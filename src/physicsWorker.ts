import type { Vector3 } from 'three/src/math/Vector3'
import type { Quaternion } from 'three/src/math/Quaternion'

const MAX_SUBSTEPS = 10
const FIXED_TIMESTEP = 1 / 60
const GRAVITY = -9.81

self.exports = self

importScripts('ammo.js')

let ammo: any
let world: any
let worldTransform: any
let boxes: any[] = []
let body: any
let motionState: any
let i = 0, ii = 0, l = 0
let position: any, quaternion: any

const init = async () => {
  // @ts-ignore
  ammo = await self.Ammo()

  const collisionConfiguration = new ammo.btDefaultCollisionConfiguration()
	const dispatcher = new ammo.btCollisionDispatcher(collisionConfiguration)
	const broadphase = new ammo.btDbvtBroadphase()
	const solver = new ammo.btSequentialImpulseConstraintSolver()

  world = new ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration)
	world.setGravity(new ammo.btVector3(0, GRAVITY, 0))

  worldTransform = new ammo.btTransform()
  
  // @ts-ignore
  postMessage({ init: true })
}

let now = 0, then = 0, dt = 0

const tick = (positions: number[], quaternions: number[]) => {
  now = performance.now()
  dt = ((now - then) / 1000)
  then = now

  world.stepSimulation(dt, MAX_SUBSTEPS, FIXED_TIMESTEP)

  i = 1
  l = boxes.length

  while (i < l) {
    body = boxes[i]
    motionState = body.getMotionState()
    motionState.getWorldTransform(worldTransform)
    position = worldTransform.getOrigin()
    quaternion = worldTransform.getRotation()

    positions[3 * i + 0] = position.x()
    positions[3 * i + 1] = position.y()
    positions[3 * i + 2] = position.z()

    quaternions[4 * i + 0] = quaternion.x()
    quaternions[4 * i + 1] = quaternion.y()
    quaternions[4 * i + 2] = quaternion.z()
    quaternions[4 * i + 3] = quaternion.w()

    i += 1
    ii += 1
  }

  // @ts-ignore
  postMessage({ positions, quaternions }, [positions.buffer, quaternions.buffer])
}

const addBox = (
  position: Vector3,
  quaternion: Quaternion,
  volume: Vector3,
  mass: number = 1
) => {
  const transform = new ammo.btTransform()
  transform.setIdentity()
	transform.setOrigin(new ammo.btVector3(position.x, position.y, position.z))
  transform.setRotation(new ammo.btQuaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w))
  const motionState = new ammo.btDefaultMotionState(transform)

  const shape = new ammo.btBoxShape(new ammo.btVector3(volume.x, volume.y, volume.z))
	shape.setMargin(0.0)

  const localInertia = new ammo.btVector3(0, 0, 0)
  
  if (mass !== 0) {
    shape.calculateLocalInertia(mass, localInertia)
  }

  const bodyInfo = new ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia)
  bodyInfo.restitution = 0.5
  bodyInfo.friction = 0.5

  const body = new ammo.btRigidBody(bodyInfo)
  
  ammo.destroy(bodyInfo)
  ammo.destroy(localInertia)

  world.addRigidBody(body)
  boxes.push(body)
}

onmessage = ({ data }) => {

  switch (data.operation) {

    case 'tick': return tick(
      data.positions,
      data.quaternions
    )
    
    case 'init': return init()

    case 'addBox': 
    return addBox(
      data.position,
      data.quaternion,
      data.volume,
      data.mass
    )
  }
}

export {}