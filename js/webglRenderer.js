import {EffectComposer as EffectComposer2} from "../web_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import {RenderPass as RenderPass2} from "../web_modules/three/examples/jsm/postprocessing/RenderPass.js";
import {ShaderPass as ShaderPass2} from "../web_modules/three/examples/jsm/postprocessing/ShaderPass.js";
import {FXAAShader as FXAAShader2} from "../web_modules/three/examples/jsm/shaders/FXAAShader.js";
import {WebGLRenderer as WebGLRenderer2} from "../web_modules/three/src/renderers/WebGLRenderer.js";
import {WebGLMultisampleRenderTarget as WebGLMultisampleRenderTarget2} from "../web_modules/three/src/renderers/WebGLMultisampleRenderTarget.js";
import {ACESFilmicToneMapping, sRGBEncoding, RGBFormat} from "../web_modules/three/src/constants.js";
import {Vector2 as Vector22} from "../web_modules/three/src/math/Vector2.js";
const canvas = document.getElementById("canvas");
const parameters = {
  canvas,
  antialias: true,
  powerPreference: "high-performance"
};
const initMSAATarget = () => {
  const opts = {format: RGBFormat};
  const size = renderer.getDrawingBufferSize(new Vector22());
  const target = new WebGLMultisampleRenderTarget2(size.width, size.height, opts);
  return target;
};
const renderer = new WebGLRenderer2(parameters);
const composer = new EffectComposer2(renderer, renderer.capabilities.isWebGL2 ? initMSAATarget() : void 0);
const fxaaPass = new ShaderPass2(FXAAShader2);
const init = (scene, camera) => {
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 3.5;
  renderer.outputEncoding = sRGBEncoding;
  renderer.physicallyCorrectLights = true;
  composer.addPass(new RenderPass2(scene, camera));
  composer.addPass(fxaaPass);
  document.body.appendChild(canvas);
};
const render = (scene, camera) => {
  const pixelRatio = window.devicePixelRatio;
  const width = canvas.clientWidth * pixelRatio | 0;
  const height = canvas.clientHeight * pixelRatio | 0;
  if (canvas.width === width && canvas.height === height) {
    return composer.render();
  }
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  fxaaPass.material.uniforms.resolution.value.x = 1 / width;
  fxaaPass.material.uniforms.resolution.value.y = 1 / height;
  renderer.setSize(width, height, false);
  composer.setSize(width, height);
  composer.render();
};
const runRenderLoop = (scene, camera, frame) => {
  renderer.setAnimationLoop(() => {
    frame();
    render(scene, camera);
  });
};
export const webglRenderer = {
  canvas,
  init,
  render,
  runRenderLoop
};
