import * as THREE from 'three'
import { orbitControls } from './controls/orbit'
import { assets } from './lib/assets'
import { gl } from './lib/gl'

{
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  cube.castShadow = true
  cube.receiveShadow = true
  gl.scene.add(cube)
}

const debugControls = orbitControls(gl.camera, gl.canvas)

const frame = () => {
  debugControls.update()
}

const init = async () => {
  const room = await assets.load('room.glb')
  const bakedTexture = await assets.load('room.png')
  bakedTexture.flipY = false
  const material = new THREE.MeshBasicMaterial({ map: bakedTexture })

  room.scene.traverse((node: THREE.Object3D) => {
    if (node instanceof THREE.Mesh) {
      node.material = material
    }
  })

  gl.ambientLight.intensity = 0.5

  gl.scene.add(room.scene)

  await gl.init()

  gl.setAnimationLoop(frame)
}

init()
