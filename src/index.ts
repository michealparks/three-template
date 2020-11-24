import { Scene } from 'three/src/scenes/Scene'
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera'
import { BoxBufferGeometry } from 'three/src/geometries/BoxBufferGeometry'
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial'
import { Mesh } from 'three/src/objects/Mesh'
import { Vector3 } from 'three/src/math/Vector3'
import { AmbientLight } from 'three/src/lights/AmbientLight'
import Stats from 'three/examples/jsm/libs/stats.module.js'

import { webglRenderer } from './webglRenderer'
import { gltf } from './gltf'
import { orbitControls } from './controls/orbit'
import { keyboardControls } from './controls/keyboard'
import { physics } from './physics'

let stats: any

const scene = new Scene()

const fov = 50.0
const aspect = window.innerWidth / window.innerHeight
const near = 0.1
const far = 1000.0
const camera = new PerspectiveCamera(fov, aspect, near, far)

const geometry = new BoxBufferGeometry()
const material = new MeshStandardMaterial({ color: 0x00ff00 })
const cube = new Mesh(geometry, material)
cube.position.y = 5
cube.castShadow = true
cube.receiveShadow = true
scene.add(cube)

camera.position.set(5, 5, 5)
camera.lookAt(new Vector3())

const color = 0xEFC070
const intensity = 1
const ambientLight = new AmbientLight(color, intensity)
scene.add(ambientLight)

const keyControls = keyboardControls()
const debugControls = orbitControls(camera, webglRenderer.canvas)

let now = 0, dt = 0, then = 0

const frame = () => {
  now = performance.now()
  dt = now - then
  then = now

  stats.update()
  physics.tick(dt * 0.001)
  debugControls.update()
}

const init = async () => {
  gltf.init('assets/glb/')
  webglRenderer.init(scene, camera)

  const [bedroom] = await Promise.all([
    gltf.append('pixel_room.glb', scene),
    physics.init()
  ])

  physics.addBox(bedroom.scene.getObjectByName('Floor'), { mass: 0 })
  physics.setRigidbodiesFromScene(bedroom.scene)
  physics.addBox(cube)

  // @ts-ignore
  stats = new Stats()
  document.body.appendChild(stats.dom)

  webglRenderer.runRenderLoop(scene, camera, frame)
}

init()
