import {Box3 as Box32} from "./web_modules/three/src/math/Box3.js";
const worker = new Worker("physicsWorker.js");
const NUM_BOXES = 200;
const boxes = [];
let pendingTick = false;
let positions = new Float32Array(NUM_BOXES * 3);
let quaternions = new Float32Array(NUM_BOXES * 4);
let i = 0;
let l = 0;
let box;
const init = () => {
  return new Promise((resolve) => {
    worker.addEventListener("message", (e) => {
      if (e.data.init !== true) {
        throw new Error("Ammo failed to instantiate.");
      }
      worker.addEventListener("message", tickCallback);
      resolve();
    }, {once: true});
    worker.postMessage({operation: "init"});
  });
};
const tickCallback = (e) => {
  positions = e.data.positions;
  quaternions = e.data.quaternions;
  i = 0;
  l = boxes.length;
  while (i < l) {
    box = boxes[i];
    box.position.set(positions[3 * i + 0], positions[3 * i + 1], positions[3 * i + 2]);
    box.quaternion.set(quaternions[4 * i + 0], quaternions[4 * i + 1], quaternions[4 * i + 2], quaternions[4 * i + 3]);
    i += 1;
  }
  pendingTick = false;
};
const tick = (dt) => {
  if (pendingTick)
    return;
  pendingTick = true;
  worker.postMessage({
    operation: "tick",
    dt,
    positions,
    quaternions
  }, [positions.buffer, quaternions.buffer]);
};
const setGround = () => {
};
const addBox = (mesh, config = {}) => {
  const {mass = 1, volume} = config;
  boxes.push(mesh);
  const bb = new Box32();
  bb.setFromObject(mesh);
  worker.postMessage({
    operation: "addBox",
    mass,
    position: {x: mesh.position.x, y: mesh.position.y, z: mesh.position.z},
    quaternion: {x: mesh.quaternion.x, y: mesh.quaternion.y, z: mesh.quaternion.z, w: mesh.quaternion.w},
    volume: volume || {x: (bb.max.x - bb.min.x) / 2, y: (bb.max.y - bb.min.y) / 2, z: (bb.max.z - bb.min.z) / 2}
  });
};
export const physics = {
  init,
  tick,
  setGround,
  addBox
};