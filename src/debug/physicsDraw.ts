const modes = {
  'Disable': 0,
  'Wireframe': 1,
  'Bounding Boxes': 2,
  'Wireframe + AABB': 3,
  'Contact Points': 4
}

const lineBatch = new Set()

let intervalid: NodeJS.Timeout

const init = (ammo: any, world: any) => {
  const drawer = new ammo.DebugDrawer()

  drawer.drawLine = (from: any, to: any, color: any) => {
    const f = ammo.wrapPointer(from, ammo.btVector3)
    const t = ammo.wrapPointer(to, ammo.btVector3)
    const c = ammo.wrapPointer(color, ammo.btVector3)

    lineBatch.add(new Float32Array([
      f.x(), f.y(), f.z(),
      t.x(), t.y(), t.z(),
      c.x(), c.y(), c.z()
    ]))
  }

  drawer.drawContactPoint = (pointOnB: any, normalOnB: any, distance: any, lifetime: any, color: any) => {
    const f = ammo.wrapPointer(pointOnB, ammo.btVector3)
    const t = ammo.wrapPointer(normalOnB, ammo.btVector3)
    const c = ammo.wrapPointer(color, ammo.btVector3)

    lineBatch.add(new Float32Array([
      f.x(), f.y(), f.z(),
      t.x(), t.y(), t.z(),
      c.x(), c.y(), c.z()
    ]))
  }

  drawer.setDebugMode = (mode: 'Disable' | 'Wireframe' | 'Bounding Boxes' | 'Wireframe + AABB' | 'Contact Points') => {
    drawer._debugDrawMode = modes[mode]
  }

  drawer.getDebugMode = () => {
    return drawer._debugDrawMode
  }

  const tick = () => {
    world.debugDrawWorld()
    // @ts-ignore
    postMessage({ op: 'debug', lines: [...lineBatch] })
    lineBatch.clear()
  }

  world.setDebugDrawer(drawer)

  addEventListener('message', (e) => {
    if (e.data.op !== 'debug') return

    if (e.data.value === true) {
      drawer.setDebugMode('Wireframe')
      intervalid = setInterval(tick, 500)
    } else {
      drawer.setDebugMode('Disable')
      clearInterval(intervalid)
    }
  })

  return drawer
}

export const physicsDraw = {
  init
}
