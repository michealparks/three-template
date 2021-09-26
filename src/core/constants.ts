import {
  BasicShadowMap
} from 'three'

/**
 * Renderer
 */
// export const SHADOWMAP = PCFSoftShadowMap
export const EXPOSURE = 1
export const SHADOWMAP = BasicShadowMap
export const CLEARCOLOR = 0x000000

/**
 * Camera
 */
export const FOV = 50.0
export const NEAR = 0.1
export const FAR = 100.0

export const MAX_BODIES = 1000
export const MAX_SUBSTEPS = 40
export const FIXED_TIMESTEP = 1 / 60
export const MAX_PLAYER_SPEED = 3
export const GRAVITY = -20

/**
 * Controls
 */
export const PASSIVE = { passive: true }
export const XBOX_THUMSTICK_THRESHOLD = 0.2
