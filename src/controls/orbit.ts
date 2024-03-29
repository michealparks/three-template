import type { PerspectiveCamera } from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const orbitControls = (camera: PerspectiveCamera, canvas: HTMLCanvasElement): OrbitControls => {
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.screenSpacePanning = false
  controls.minDistance = 14
  controls.maxDistance = 500
  controls.maxPolarAngle = Math.PI / 2.0
  return controls
}
