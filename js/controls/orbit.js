import {OrbitControls as OrbitControls2} from "../../web_modules/three/examples/jsm/controls/OrbitControls.js";
export const orbitControls = (camera, canvas) => {
  const controls = new OrbitControls2(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 1;
  controls.maxDistance = 500;
  controls.maxPolarAngle = Math.PI / 2;
  return controls;
};
