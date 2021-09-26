const events = new Map<string, Set<EventListener>>()

const on = (name: string, listener: EventListener) => {
  if (events.has(name) === false) {
    events.set(name, new Set())
  }

  events.get(name)!.add(listener)
}

const fire = (name: string, data: unknown) => {
  if (events.has(name) === false) {
    return console.warn('No global listners for fired event ', name)
  }

  for (const listener of events.get(name)!) {
    listener(data as Event)
  }
}

const off = (name: string, listener: EventListener) => {
  events.get(name)!.delete(listener)
}

const once = (name: string, listener: EventListener) => {
  const wrappedListener = (data: unknown) => {
    listener(data as Event)
    off(name, wrappedListener)
  }

  on(name, wrappedListener)
}

export const app = {
  on,
  once,
  fire,
  off
}
