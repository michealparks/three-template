// https://caniuse.com/?search=worker%20module
// import 'module-workers-polyfill'

import { Scene } from 'three/src/scenes/Scene'
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera'
import { BoxBufferGeometry } from 'three/src/geometries/BoxBufferGeometry'
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial'
import { Mesh } from 'three/src/objects/Mesh'
import { Vector3 } from 'three/src/math/Vector3'
import { AmbientLight } from 'three/src/lights/AmbientLight'

import { webglRenderer } from './webglRenderer'
import { gltf } from './gltf'
import { orbitControls } from './controls/orbit'
import { physics } from './physics'

const scene = new Scene()

const fov = 50.0
const aspect = window.innerWidth / window.innerHeight
const near = 0.1
const far = 1000.0
const camera = new PerspectiveCamera(fov, aspect, near, far)

const geometry = new BoxBufferGeometry()
const material = new MeshStandardMaterial({ color: 0x00ff00 })
const cube = new Mesh(geometry, material)
scene.add(cube)

camera.position.set(5, 5, 5)
camera.lookAt(new Vector3())

const color = 0xEFC070
const intensity = 1
const ambientLight = new AmbientLight(color, intensity)
scene.add(ambientLight)

const controls = orbitControls(camera, webglRenderer.canvas)

const frame = () => {
  physics.tick(1 / 60)
  controls.update()
}

const init = async () => {
  webglRenderer.init(scene, camera)
  physics.init()
  

  gltf.init('assets/glb/')
  const bedroom = await gltf.append('pixel_room.glb', scene)

  console.log(bedroom)

  physics.setGround()
  physics.addBox(cube)

  webglRenderer.runRenderLoop(scene, camera, frame)
}

init()
