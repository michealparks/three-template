import {
  MeshStandardMaterial,
  BufferGeometry,
  SpotLight,
} from 'three'

import type {
  Rigidbody,
  TriggerVolume,
  GLTFParams
} from './types'

import {
  Object3D,
  Quaternion,
  Vector3,
  Box3,
  Mesh,
  RGBADepthPacking,
  DoubleSide,
  MeshDepthMaterial,
  PointLight,
  Light
} from 'three'

import {
  BODYTYPE_STATIC,
  BODYSHAPE_BOX,
  BODYSHAPE_MESH,
  physicsEnums,
  BODYSHAPE_SPHERE
} from './constants'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { physics } from './physics'
// import { cameraSystem } from '../systems/camera'
// import { playerSystem } from '../systems/player'
// import { worldSystem } from '../systems/world'
// import { fadeSystem } from '../systems/fade'
// import { spriteSystem } from '../systems/sprite'
// import { Utils } from './util'
import { animation } from './animation'
import { audio } from './audio'

const gltfLoader = new GLTFLoader()

const init = (path: string) => {
  gltfLoader.setPath(path)
}

const vec3 = new Vector3()
const quat = new Quaternion()
const box3 = new Box3()

const createTransform = (object: Object3D) => {
  const { position, quaternion } = object
  const transform = new Float32Array(10)
  transform[0] = position.x
  transform[1] = position.y
  transform[2] = position.z
  transform[3] = quaternion.x
  transform[4] = quaternion.y
  transform[5] = quaternion.z
  transform[6] = quaternion.w
  return transform
}

const createTriggerComponent = (
  object: Object3D,
  triggerMeshes: Object3D[],
  triggerVolumes: TriggerVolume[]
) => {
  const { userData } = object
  const shape = physicsEnums.get(userData.trigger_shape) ?? BODYSHAPE_BOX
  const transform = createTransform(object)

  switch (shape) {
    case BODYSHAPE_BOX:
      box3.setFromObject(object).getSize(vec3)
      transform[7] = vec3.x / 2
      transform[8] = vec3.y / 2
      transform[9] = vec3.z / 2
      break

    case BODYSHAPE_SPHERE:
      if (object instanceof Mesh) {
        object.geometry.computeBoundingSphere()
        if (object.geometry.boundingSphere === null) throw new Error()
        transform[7] = object.geometry.boundingSphere.radius + (object.userData.trigger_margin ?? 0)
      } else {
        throw new Error(`Bounding sphere failed to calculate for ${object.name}`)
      }
      break
      
  }

  triggerMeshes.push(object)

  triggerVolumes.push({
    shape,
    id: object.id,
    name: object.name,
    enter: userData.trigger_enter,
    leave: userData.trigger_leave,
    entity: userData.trigger_entity,
    linkedRigidbodyId: userData.linkedRigidbodyId,
    transform
  })
}

const createRigidbodyComponent = (object: Object3D, physicsMeshes: Object3D[], rigidbodies: Rigidbody[]) => {
  const { userData, quaternion } = object
  const { components } = userData
  const type = physicsEnums.get(userData.rigidbody_type) ?? BODYTYPE_STATIC
  const shape = physicsEnums.get(userData.rigidbody_shape) ?? BODYSHAPE_BOX
  const isFlat = components.includes('flat')
  const transform = createTransform(object)
  const rigidbodyTemplate = (userData.rigidbody_child !== undefined)
    ? object.getObjectByName(userData.rigidbody_child)
    : object

  if (rigidbodyTemplate === undefined) {
    throw new Error('GLTF: Rigidbody template is undefined.')
  }

  let triangles

  if (shape === BODYSHAPE_MESH && object instanceof Mesh) {
    const geo = (object.geometry as BufferGeometry)

    if (geo.index === null) {
      throw new Error('GLTF: Geo index is null')
    }

    const { index } = geo
    const { array } = geo.getAttribute('position')
    triangles = new Float32Array(index.count * 3)

    for (let cur = 0, i = 0, j = 0, l = index.array.length; i < l; i += 1, j += 3) {
      cur = index.array[i]
      triangles[j + 0] = array[cur * 3 + 0]
      triangles[j + 1] = array[cur * 3 + 1]
      triangles[j + 2] = array[cur * 3 + 2]
    }
  }

  quat.copy(quaternion)
  quaternion.identity()
  box3.setFromObject(rigidbodyTemplate).getSize(vec3)
  quaternion.copy(quat)

  transform[7] = vec3.x / 2
  transform[8] = vec3.y / 2
  transform[9] = isFlat ? 0.1 : vec3.z / 2

  physicsMeshes.push(object)

  rigidbodies.push({
    type,
    shape,
    triangles,
    id: object.id,
    name: object.name,
    flat: isFlat,
    linkedRigidbodyId: userData.linkedRigidbodyId,
    transform,
    mass: type === BODYTYPE_STATIC ? 0 : userData.rigidbody_mass ?? 1,
    linearDamping: userData.rigidbody_linearDamping ?? 0,
    angularDamping: userData.rigidbody_angularDamping ?? 0,
    friction: userData.rigidbody_friction ?? 0.5,
    restitution: userData.rigidbody_restitution ?? 0.5
  })
}

const parse = (gltf: any, params: GLTFParams) => {
  const triggerObjects: Object3D[] = []
  const physicsObjects: Object3D[] = []
  const triggerVolumes: TriggerVolume[] = []
  const rigidbodies: Rigidbody[] = []

  // TODO: Move a lot of this to compile time with:
  // https://github.com/donmccurdy/glTF-Transform
  gltf.scene.traverse((object: Object3D) => {
    const { userData } = object
    const { components = '' } = userData

    // Set object options
    if (userData.visible === 'false') {
      object.visible = false
    }

    // Set param options
    if (params.shadows === true) {
      if (object instanceof Light) {
        if (object instanceof PointLight || object instanceof SpotLight) {
          object.castShadow = true
          object.shadow.bias = -0.0005
          object.shadow.camera.fov = 5
          object.shadow.mapSize.width = 1024 * 4
          object.shadow.mapSize.height = 1024 * 4
          // object.shadow.camera.far = 15
          object.shadow.camera.near = 1
        }
      } else {
        const castShadow = userData.castShadow === 'false' ? false : true
        const receiveShadow = userData.receiveShadow === 'false' ? false : true
        object.castShadow = castShadow
        object.receiveShadow = receiveShadow
      }
    }

    if (object instanceof Mesh) {
      const material = object.material

      // Init flat texture object component
      if (components.includes('sprite') === true && material instanceof MeshStandardMaterial) {
        material.shadowSide = DoubleSide
        object.customDepthMaterial = new MeshDepthMaterial({
          depthPacking: RGBADepthPacking,
          map: material.map,
          alphaTest: 0.5
        })

        // spriteSystem.add(object)
      }

      // Init player component
      // if (components.includes('player') === true) {
      //   playerSystem.setMesh(object)
      // }

      if (components.includes('addable') === true) {
        const trigger = new Mesh()
        trigger.userData = { ...object.userData }
        trigger.userData.addable_meshName = object.name
        trigger.userData.trigger_enter = 'enter:addable'
        trigger.userData.trigger_leave = 'leave:addable'
        trigger.userData.trigger_entity = 'Player'
        trigger.userData.trigger_shape = 'sphere'
        trigger.userData.trigger_margin = 0.3
        trigger.position.copy(object.position)
        trigger.quaternion.copy(object.quaternion)
        
        object.geometry.computeBoundingSphere()
        object.userData.linkedRigidbodyId = trigger.id
        
        trigger.geometry.boundingSphere = object.geometry.boundingSphere
  
        createTriggerComponent(trigger, triggerObjects, triggerVolumes)
      }
    }

    // Init trigger volume component
    if (components.includes('trigger') === true) {
      createTriggerComponent(object, triggerObjects, triggerVolumes)
    }

    // Init trigger volume component for any trigger children
    if (userData.trigger_child !== undefined) {
      const trigger = object.getObjectByName(userData.trigger_child)

      if (trigger === undefined) {
        throw new Error('GLTF: Trigger child is undefined.')
      }

      object.remove(trigger)
      trigger.position.copy(object.position)

      object.userData.linkedRigidbodyId = trigger.id

      createTriggerComponent(trigger, triggerObjects, triggerVolumes)
    }

    // Init rigidbody component
    if (components.includes('rigidbody') === true) {
      createRigidbodyComponent(object, physicsObjects, rigidbodies)
    }

    // Init audio component
    if (components.includes('audio') === true) {
      audio.createPositional(userData.audio_file, object, userData.audio_refDistance)
        .then(() => audio.play(userData.audio_file))
    }
  })

  physics.addTriggerVolumes(triggerObjects, triggerVolumes)
  physics.addRigidbodies(physicsObjects, rigidbodies)

  gltf.scene.animations = gltf.animations

  for (const animationClip of gltf.animations) {
    if (animationClip.name.includes('Default') === false) {
      continue
    }

    animation.playClip(gltf.scene, animationClip.name)
  }

  return gltf
}

export const GLTF = {
  init,
  parse
}
