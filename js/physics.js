const worker = new Worker("js/physicsWorker.js", {type: "module"});
const NUM_BOXES = 200;
const boxes = [];
let pendingTick = false;
let positions = new Float32Array(NUM_BOXES * 3);
let quaternions = new Float32Array(NUM_BOXES * 4);
let i = 0;
let l = 0;
let box;
const init = () => {
  worker.onmessage = (e) => {
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
const addBox = (mesh) => {
  boxes.push(mesh);
  worker.postMessage({
    operation: "addBox"
  });
};
export const physics = {
  init,
  tick,
  setGround,
  addBox
};
