import type { Scene } from 'three/src/scenes/Scene'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const gltfLoader = new GLTFLoader()

const init = (path: string) => {
  gltfLoader.setPath(path)
}

const append = async (src: string, scene: Scene) => {
  const gltf = await gltfLoader.loadAsync(src)
  scene.add(gltf.scene)
  return gltf
}

export const gltf = {
  init,
  append
}
