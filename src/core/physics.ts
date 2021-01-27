import type {
  Object3D,
  Vector3
} from 'three'

import type {
  Rigidbody,
  TriggerVolume,
  TriggerListener
} from './types'

import {
  MAX_BODIES,
  PASSIVE,
  BODYTYPE_DYNAMIC
} from './constants'

import { app } from './app'

const worker = new Worker('physicsWorker.js', { type: 'module' })
const bodyMap = new Map<number, Object3D>()
const dynamicBodies = new Set<Object3D>()

let transforms = new Float32Array(MAX_BODIES * 7)
let pendingUpdate = false

const init = async (): Promise<void> => {
  return new Promise((resolve) => {
    worker.addEventListener('message', () => {
      worker.addEventListener('message', handleMessage, PASSIVE)
      resolve()
    }, { once: true, passive: true })
  })
}

const update = () => {
  if (pendingUpdate === true) {
    return
  }

  worker.postMessage({
    op: 'update',
    transforms
  }, [transforms.buffer])

  pendingUpdate = true
}

const handleMessage = (e: MessageEvent) => {
  switch (e.data.op) {
    case 'update': return updateBodies(e)
  }
}

const updateBodies = (e: MessageEvent) => {
  let i = 0, shift = 0
  const { data } = e

  transforms = data.transforms

  for (const object of dynamicBodies) {
    shift = 7 * i

    object.position.set(
      transforms[shift + 0],
      transforms[shift + 1],
      transforms[shift + 2]
    )

    object.quaternion.set(
      transforms[shift + 3],
      transforms[shift + 4],
      transforms[shift + 5],
      transforms[shift + 6]
    )

    object.updateMatrix()

    i += 1
  }

  for (const [globalEvent, id1, id2] of data.globalEvents) {
    app.fire(globalEvent, [bodyMap.get(id1), bodyMap.get(id2)])
  }

  pendingUpdate = false
}

const addRigidbodies = (objects: Object3D[], rigidbodies: Rigidbody[]) => {
  let i = 0

  for (const object of objects) {
    bodyMap.set(object.id, object)
    object.matrixAutoUpdate = false

    switch (rigidbodies[i].type) {

      case BODYTYPE_DYNAMIC:
        dynamicBodies.add(object)
        break

    }

    i += 1
  }

  worker.postMessage({
    op: 'createRigidbodies',
    objects: rigidbodies
  })
}

const addTriggerVolumes = (objects: Object3D[], triggerVolumes: TriggerVolume[]) => {
  for (const object of objects) {
    bodyMap.set(object.id, object)
  }

  worker.postMessage({
    op: 'createTriggerVolumes',
    objects: triggerVolumes
  })
}

const applyCentralImpulse = (id: number, impulse: Vector3) => {
  worker.postMessage({
    op: 'applyCentralImpulse',
    id,
    impulse: { x: impulse.x, y: impulse.y, z: impulse.z }
  })
}

const applyCentralForce = (id: number, force: Vector3) => {
  worker.postMessage({
    op: 'applyCentralForce',
    id,
    force: { x: force.x, y: force.y, z: force.z }
  })
}

const teleport = (id: number, transform: Float32Array) => {
  worker.postMessage({
    op: 'teleport',
    id,
    transform
  })
}

const teleportMany = (ids: Uint16Array, transforms: Float32Array) => {
  worker.postMessage({
    op: 'teleportMany',
    ids,
    transforms
  })
}

const setGravity = (id: number, acceleration: Vector3) => {
  worker.postMessage({
    op: 'setGravity',
    id,
    acceleration: { x: acceleration.x, y: acceleration.y, z: acceleration.z }
  })
}

const setFriction = (id: number, friction: number) => {
  worker.postMessage({
    op: 'setFriction',
    id,
    friction
  })
}

const removeRigidbody = (object: Object3D) => {
  bodyMap.delete(object.id)
  dynamicBodies.delete(object)

  const ids = new Uint16Array(1)
  ids[0] = object.id

  worker.postMessage({
    op: 'removeRigidbodies',
    ids
  })
}

const removeRigidbodies = (objects: Object3D[]) => {
  const ids = new Uint16Array(objects.length)
  let i = 0

  for (const object of objects) {
    ids[i] = object.id
    bodyMap.delete(object.id)
    dynamicBodies.delete(object)
    i++
  }

  worker.postMessage({
    op: 'removeRigidbodies',
    ids
  })
}

export const physics = {
  init,
  update,
  addRigidbodies,
  addTriggerVolumes,
  applyCentralImpulse,
  applyCentralForce,
  teleport,
  teleportMany,
  setGravity,
  setFriction,
  removeRigidbody,
  removeRigidbodies
}