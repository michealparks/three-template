import type { Scene } from 'three/src/scenes/Scene'
import type { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer'
import { WebGLMultisampleRenderTarget } from 'three/src/renderers/WebGLMultisampleRenderTarget'
import { ACESFilmicToneMapping, sRGBEncoding, RGBFormat } from 'three/src/constants'
import { Vector2 } from 'three/src/math/Vector2'

const canvas = document.getElementById('canvas') as HTMLCanvasElement

const parameters = {
  canvas,
  antialias: true,
  powerPreference: 'high-performance'
}

const initMSAATarget = () => {
  const opts = { format: RGBFormat }
  const size = renderer.getDrawingBufferSize(new Vector2())
  const target = new WebGLMultisampleRenderTarget(size.width, size.height, opts)
  return target
}

const renderer = new WebGLRenderer(parameters)
const composer = new EffectComposer(renderer, renderer.capabilities.isWebGL2 ? initMSAATarget() : undefined)
const fxaaPass = new ShaderPass(FXAAShader)

const init = (scene: Scene, camera: PerspectiveCamera) => {
  renderer.toneMapping = ACESFilmicToneMapping
  // renderer.toneMappingExposure = 3.5
  renderer.outputEncoding = sRGBEncoding
  renderer.physicallyCorrectLights = true

  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(fxaaPass)

  document.body.appendChild(canvas)
}

const render = (scene: Scene, camera: PerspectiveCamera) => {
  const pixelRatio = window.devicePixelRatio
  const width = canvas.clientWidth * pixelRatio | 0
  const height = canvas.clientHeight * pixelRatio | 0

  if (canvas.width === width && canvas.height === height) {
    return composer.render()
  }

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  fxaaPass.material.uniforms.resolution.value.x = 1.0 / width
  fxaaPass.material.uniforms.resolution.value.y = 1.0 / height

  renderer.setSize(width, height, false)
  composer.setSize(width, height)
  composer.render()
}

const runRenderLoop = (scene: Scene, camera: PerspectiveCamera, frame: Function) => {
  renderer.setAnimationLoop(() => {
    frame()

    render(scene, camera)
  })
}

export const webglRenderer = {
  canvas,
  init,
  render,
  runRenderLoop
}
