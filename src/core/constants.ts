import {
  PCFSoftShadowMap,
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

/**
 * Physics
 */
// Rigid body has infinite mass and cannot move.
export const BODYTYPE_STATIC = 0

// Rigid body is simulated according to applied forces.
export const BODYTYPE_DYNAMIC = 1

// Rigid body has infinite mass and does not respond to forces but can still be moved by setting their velocity or position.
export const BODYTYPE_KINEMATIC = 2

// Collision shapes
export const BODYSHAPE_BOX = 0
export const BODYSHAPE_SPHERE = 1
export const BODYSHAPE_MESH = 2

// Collision flags
export const BODYFLAG_STATIC_OBJECT = 1
export const BODYFLAG_KINEMATIC_OBJECT = 2
export const BODYFLAG_NORESPONSE_OBJECT = 4

// Activation states
export const BODYSTATE_ACTIVE_TAG = 1
export const BODYSTATE_ISLAND_SLEEPING = 2
export const BODYSTATE_WANTS_DEACTIVATION = 3
export const BODYSTATE_DISABLE_DEACTIVATION = 4
export const BODYSTATE_DISABLE_SIMULATION = 5

// Groups
export const BODYGROUP_NONE = 0
export const BODYGROUP_DEFAULT = 1
export const BODYGROUP_DYNAMIC = 1
export const BODYGROUP_STATIC = 2
export const BODYGROUP_KINEMATIC = 4
export const BODYGROUP_ENGINE_1 = 8
export const BODYGROUP_TRIGGER = 16
export const BODYGROUP_ENGINE_2 = 32
export const BODYGROUP_ENGINE_3 = 64
export const BODYGROUP_USER_1 = 128
export const BODYGROUP_USER_2 = 256
export const BODYGROUP_USER_3 = 512
export const BODYGROUP_USER_4 = 1024
export const BODYGROUP_USER_5 = 2048
export const BODYGROUP_USER_6 = 4096
export const BODYGROUP_USER_7 = 8192
export const BODYGROUP_USER_8 = 16384

// Masks
export const BODYMASK_NONE = 0
export const BODYMASK_ALL = 65535
export const BODYMASK_STATIC = 2
export const BODYMASK_NOT_STATIC = 65535 ^ 2
export const BODYMASK_NOT_STATIC_KINEMATIC = 65535 ^ (2 | 4)

export const physicsEnums = new Map()
physicsEnums.set('static', BODYTYPE_STATIC)
physicsEnums.set('dynamic', BODYTYPE_DYNAMIC)
physicsEnums.set('kinematic', BODYTYPE_KINEMATIC)
physicsEnums.set('box', BODYSHAPE_BOX)
physicsEnums.set('sphere', BODYSHAPE_SPHERE)
physicsEnums.set('mesh', BODYSHAPE_MESH)
