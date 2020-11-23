import type { Mesh } from 'three/src/objects/Mesh'

import { Box3 } from 'three/src/math/Box3'

const worker = new Worker('physicsWorker.js')

const NUM_BOXES = 200

const boxes: Mesh[] = []

let pendingTick = false

let positions = new Float32Array(NUM_BOXES * 3)
let quaternions = new Float32Array(NUM_BOXES * 4)

let i = 0
let l = 0
let box: Mesh

const init = (): Promise<void> => {
  return new Promise((resolve) => {
    worker.addEventListener('message', (e) => {
      if (e.data.init !== true) {
        throw new Error('Ammo failed to instantiate.')
      }
  
      worker.addEventListener('message', tickCallback)
      resolve()
    }, { once: true })

    worker.postMessage({ operation: 'init' })
  })
}

const tickCallback = (e: MessageEvent) => {
  positions = e.data.positions
  quaternions = e.data.quaternions

  i = 0
  l = boxes.length

  while (i < l) {
    box = boxes[i]
    box.position.set(
      positions[3 * i + 0],
      positions[3 * i + 1],
      positions[ 3 * i + 2]
    )
    box.quaternion.set(
      quaternions[4 * i + 0],
      quaternions[4 * i + 1],
      quaternions[4 * i + 2],
      quaternions[4 * i + 3]
    )
    i += 1
  }

  pendingTick = false
}

const tick = (dt: number) => {
  if (pendingTick) return

  pendingTick = true

  worker.postMessage({
    operation: 'tick',
    dt,
    positions,
    quaternions
  }, [positions.buffer, quaternions.buffer])
}

const setGround = () => {

}

const bb = new Box3()

const addBox = (mesh: Mesh, config: any = {}) => {
  const { mass = 1 } = config

  boxes.push(mesh)

  bb.setFromObject(mesh)

  worker.postMessage({
    operation: 'addBox',
    mass,
    position: { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z },
    quaternion: { x: mesh.quaternion.x, y: mesh.quaternion.y, z: mesh.quaternion.z, w: mesh.quaternion.w },
    volume: { x: bb.max.x - bb.min.x, y: bb.max.y - bb.min.y, z: bb.max.z - bb.min.z }
  })
}

export const physics = {
  init,
  tick,
  setGround,
  addBox
}
