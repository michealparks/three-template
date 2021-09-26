import {
  BoxGeometry,
  MeshStandardMaterial,
  Mesh
} from 'three'

import { orbitControls } from './controls/orbit'
import { gl } from './core/gl'

{
  const geometry = new BoxGeometry()
  const material = new MeshStandardMaterial({ color: 0x00ff00 })
  const cube = new Mesh(geometry, material)
  cube.castShadow = true
  cube.receiveShadow = true
  gl.scene.add(cube)
}

const debugControls = orbitControls(gl.camera, gl.canvas)

const frame = () => {
  debugControls.update()
}

const init = async () => {

  gl.ambientLight.intensity = 0.5

  await gl.init()

  gl.setAnimationLoop(frame)
}

init()
