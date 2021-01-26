import {
  WebGLRenderer,
  ACESFilmicToneMapping,
  sRGBEncoding,
  Scene,
  PerspectiveCamera,
  HalfFloatType
} from 'three'

import {
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  SMAAImageLoader,
  SMAAPreset,
  BloomEffect,
  BlendFunction,
  KernelSize,
  SSAOEffect,
  NormalPass,
  DepthEffect
  // @ts-ignore
} from 'postprocessing'

import {
  CLEARCOLOR,
  EXPOSURE,
  FAR,
  FOV,
  NEAR,
  SHADOWMAP
} from './constants'

const renderer = new WebGLRenderer({
  antialias: false,
  alpha: false,
  depth: false,
  stencil: false,
  powerPreference: 'high-performance',
})

renderer.toneMapping = ACESFilmicToneMapping
renderer.toneMappingExposure = EXPOSURE
renderer.outputEncoding = sRGBEncoding
renderer.physicallyCorrectLights = true
renderer.shadowMap.enabled = true
renderer.shadowMap.type = SHADOWMAP
renderer.setClearColor(CLEARCOLOR)
document.body.append(renderer.domElement)

const canvas = renderer.domElement

const composer = new EffectComposer(renderer, {
  frameBufferType: HalfFloatType
})

const scene = new Scene()

const camera = new PerspectiveCamera(FOV, innerWidth / innerHeight, NEAR, FAR)

const init = async () => {
  const bloomEffect = new BloomEffect({
    // blendFunction: BlendFunction.ADD,
    luminanceThreshold: 0.75,
    intensity: 1.2,
    height: 480,
    kernelSize: KernelSize.VERY_LARGE
  })

  const smaaImageLoader  = new SMAAImageLoader()

  const [search, area] = await new Promise((resolve) =>
    smaaImageLoader.load(resolve)
  )

  const smaaEffect = new SMAAEffect(search, area, SMAAPreset.ULTRA)

  const effectPass = new EffectPass(
    camera,
    smaaEffect,
    bloomEffect
  )

  effectPass.renderToScreen = true

  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(effectPass)
}

type Tick = { (dt: number): void }

let fn: Tick
let then = 0, now = 0, dt = 0

const render = () => {
  now = performance.now()
  dt = now - then
  then = now

  fn(dt)

  let width = canvas.clientWidth * window.devicePixelRatio | 0
  let height = canvas.clientHeight * window.devicePixelRatio | 0

  if (canvas.width === width && canvas.height === height) {
    return composer.render(dt)
  }

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height, false)
  composer.setSize(width, height, false)
}

const setAnimationLoop = (frame: Tick) => {
  fn = frame
  renderer.setAnimationLoop(render)
}

export const gl = {
  renderer,
  canvas,
  scene,
  camera,
  init,
  setAnimationLoop
}
