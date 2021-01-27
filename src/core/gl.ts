import type { Tick } from './types'

import {
  WebGLRenderer,
  ACESFilmicToneMapping,
  sRGBEncoding,
  Scene,
  PerspectiveCamera,
  HalfFloatType,
  AmbientLight,
  AudioListener,
  Camera,
  OrthographicCamera
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

import Stats from '@drecom/stats.js'
import TWEEN from '@tweenjs/tween.js'

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

let fn: Tick
let then = 0, now = 0, dt = 0

const stats = new Stats({ maxFPS: Infinity, maxMem: Infinity })
const canvas = renderer.domElement
const composer = new EffectComposer(renderer, {
  frameBufferType: HalfFloatType
})
const scene = new Scene()
let camera: PerspectiveCamera | OrthographicCamera = new PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, NEAR, FAR)
const listener = new AudioListener()
scene.add(camera)
camera.add(listener)

if (import.meta.env.MODE === 'development') {
  document.body.appendChild(stats.dom)
}

const color = '#afe3f3'
const intensity = 1.0
const ambientLight = new AmbientLight(color, intensity)
scene.add(ambientLight)

const init = async () => {
  const bloomEffect = new BloomEffect({
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

const render = () => {
  if (import.meta.env.MODE === 'development') {
    stats.begin()
  }

  now = performance.now()
  dt = now - then
  then = now

  TWEEN.update()

  fn(dt)

  let width = canvas.clientWidth * window.devicePixelRatio | 0
  let height = canvas.clientHeight * window.devicePixelRatio | 0
  let zoom = 300

  if (canvas.width === width && canvas.height === height) {
    composer.render(dt)
  } else {
    if (camera instanceof PerspectiveCamera) {
      camera.aspect = width / height
    } else if (camera instanceof OrthographicCamera) {
      camera.left = -width / zoom
      camera.right = width / zoom
      camera.top = height / zoom
      camera.bottom = -height / zoom
    }
    
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
    composer.setSize(width, height, false)
  }

  if (import.meta.env.MODE === 'development') {
    stats.end()
  }
}

const setAnimationLoop = (frame: Tick) => {
  fn = frame
  renderer.setAnimationLoop(render)
}

const setCamera = (newCamera: PerspectiveCamera | OrthographicCamera) => {
  camera = newCamera

  if (camera.getObjectById(listener.id) === undefined) {
    camera.add(listener)
  }
}

export const gl = {
  stats,
  renderer,
  canvas,
  scene,
  camera,
  ambientLight,
  listener,
  init,
  setAnimationLoop,
  setCamera
}
