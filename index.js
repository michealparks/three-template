import {Scene as Scene2} from "./web_modules/three/src/scenes/Scene.js";
import {PerspectiveCamera as PerspectiveCamera2} from "./web_modules/three/src/cameras/PerspectiveCamera.js";
import {BoxBufferGeometry as BoxBufferGeometry2} from "./web_modules/three/src/geometries/BoxBufferGeometry.js";
import {MeshStandardMaterial as MeshStandardMaterial2} from "./web_modules/three/src/materials/MeshStandardMaterial.js";
import {Mesh as Mesh2} from "./web_modules/three/src/objects/Mesh.js";
import {Vector3 as Vector32} from "./web_modules/three/src/math/Vector3.js";
import {AmbientLight as AmbientLight2} from "./web_modules/three/src/lights/AmbientLight.js";
import Stats from "./web_modules/three/examples/jsm/libs/stats.module.js";
import {webglRenderer as webglRenderer2} from "./webglRenderer.js";
import {gltf as gltf2} from "./gltf.js";
import {orbitControls} from "./controls/orbit.js";
import {physics as physics2} from "./physics.js";
let stats;
const scene = new Scene2();
const fov = 50;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1e3;
const camera = new PerspectiveCamera2(fov, aspect, near, far);
const geometry = new BoxBufferGeometry2();
const material = new MeshStandardMaterial2({color: 65280});
const cube = new Mesh2(geometry, material);
cube.position.y = 5;
scene.add(cube);
camera.position.set(5, 5, 5);
camera.lookAt(new Vector32());
const color = 15712368;
const intensity = 1;
const ambientLight = new AmbientLight2(color, intensity);
scene.add(ambientLight);
const controls = orbitControls(camera, webglRenderer2.canvas);
let now = 0, dt = 0, then = 0;
const frame = () => {
  now = performance.now();
  dt = now - then;
  then = now;
  stats.update();
  physics2.tick(dt * 1e-3);
  controls.update();
};
const init = async () => {
  gltf2.init("assets/glb/");
  webglRenderer2.init(scene, camera);
  const [bedroom] = await Promise.all([
    gltf2.append("pixel_room.glb", scene),
    physics2.init()
  ]);
  physics2.addBox(bedroom.scene.getObjectByName("Floor"), {
    mass: 0
  });
  physics2.addBox(cube);
  stats = new Stats();
  document.body.appendChild(stats.dom);
  webglRenderer2.runRenderLoop(scene, camera, frame);
};
init();