import {GLTFLoader as GLTFLoader2} from "./web_modules/three/examples/jsm/loaders/GLTFLoader.js";
const gltfLoader = new GLTFLoader2();
const init = (path) => {
  gltfLoader.setPath(path);
};
const append = async (src, scene) => {
  const gltf2 = await gltfLoader.loadAsync(src);
  scene.add(gltf2.scene);
  return gltf2;
};
export const gltf = {
  init,
  append
};
