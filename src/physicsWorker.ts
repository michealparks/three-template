import { World, NaiveBroadphase, Plane, Body, Vec3, Box, Quaternion } from 'cannon-es'

const NUM_BOXES = 200

const world = new World()
world.broadphase = new NaiveBroadphase()
world.gravity.set(0, -10, 0)
// @ts-ignore
world.solver.tolerance = 0.001

const plane = new Plane()
const groundBody = new Body({ mass: 0 })
groundBody.addShape(plane)
groundBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), -Math.PI / 2)

world.addBody(groundBody)

const boxShape = new Box(new Vec3(0.5, 0.5, 0.5))

let body: Body
let i = 0, ii = 0, l = 0
let position: Vec3, quaternion: Quaternion

onmessage = (e) => {
  switch (e.data.operation) {
    case 'init':

      break

    case 'tick':
      world.step(e.data.dt)

      const { positions, quaternions } = e.data

      i = 1
      ii = 0
      l = world.bodies.length

      while (i < l) {
        body = world.bodies[i]
        position = body.position
        quaternion = body.quaternion

        positions[3 * ii + 0] = position.x
        positions[3 * ii + 1] = position.y
        positions[3 * ii + 2] = position.z

        quaternions[4 * ii + 0] = quaternion.x
        quaternions[4 * ii + 1] = quaternion.y
        quaternions[4 * ii + 2] = quaternion.z
        quaternions[4 * ii + 3] = quaternion.w

        i += 1
        ii += 1
      }

      // @ts-ignore
      postMessage({ positions, quaternions }, [positions.buffer, quaternions.buffer])

      break

    case 'addBox':
      body = new Body({ mass: 1, material: { name: 'box', id: performance.now(), friction: 0.5, restitution: 30 } })
      body.addShape(boxShape)
      body.position.set(0, 4, 0)
      world.addBody(body)
      break
  }
}

export {}