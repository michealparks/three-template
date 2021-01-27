import {
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  Vector3
} from 'three'

import { orbitControls } from './controls/orbit'
import { keyboardControls } from './controls/keyboard'
import { physics } from './core/physics'
import { gl } from './core/gl'
import { assets } from './core/assets'
import { GLTF } from './core/gltf'

{
  const geometry = new BoxGeometry()
  const material = new MeshStandardMaterial({ color: 0x00ff00 })
  const cube = new Mesh(geometry, material)
  cube.position.y = 5
  cube.castShadow = true
  cube.receiveShadow = true
  gl.scene.add(cube)
}

const keyControls = keyboardControls()
const debugControls = orbitControls(gl.camera, gl.canvas)

const frame = (dt: number) => {
  // physics.tick(dt * 0.001)
  debugControls.update()
}

const init = async () => {
  assets.queue(
    'pixel_room.glb',
    '2d.glb'
  )

  await Promise.all([
    physics.init(),
    assets.load()
  ])

  const gltf = GLTF.parse(assets.get('2d.glb'), {
    shadows: true
  })


  gl.scene.add(gltf.scene)
  gl.setCamera(gltf.cameras[0])

  gl.ambientLight.intensity = 0.1

  console.log(gltf)

  await gl.init()

  // physics.addBox(bedroom.scene.getObjectByName('Floor'), { mass: 0 })
  // physics.setRigidbodiesFromScene(bedroom.scene)
  // physics.addBox(cube)

  gl.setAnimationLoop(frame)
}

init()
