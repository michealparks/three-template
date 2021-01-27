import {
  PASSIVE,
  XBOX_THUMSTICK_THRESHOLD
} from './constants'

const pressedKeys: Set<string> = new Set()

/**
 * Indexes:
 * 0 - x
 * 1 - y
 * 2 - z
 * 3 - action1
 * 4 - action2
 */
const state = new Float32Array(5)

let gamepadConnected = false
let keyboardControlling = false

const update = () => {
  if (gamepadConnected === false || keyboardControlling === true) {
    return
  }

  const [gamepad] = navigator.getGamepads()

  if (gamepad === null) {
    return
  }

  if (gamepad.id.toLowerCase().includes('xbox 360 controller')) {
    return handleXboxController(gamepad)
  }
}

const handleKey = (key: string, pressed: number) => {
  switch (key.toLowerCase()) {
    case 'a':
    case 'arrowleft':
      return (state[0] = -1 * pressed)
    case 'd':
    case 'arrowright':
      return (state[0] = +1 * pressed)
    case 's':
    case 'arrowdown':
      return (state[2] = +1 * pressed)
    case 'w':
    case 'arrowup':
      return (state[2] = -1 * pressed)
    case ' ':
      return (state[3] = +1 * pressed)
    case 'e':
      return (state[4] = +1 * pressed)
  }
}

const handleKeyDown = ({ key }: { key: string }) => {
  if (pressedKeys.has(key) === true) {
    return
  }

  keyboardControlling = true

  pressedKeys.add(key)

  for (const key of pressedKeys) {
    handleKey(key, 1)
  }
}

const handleKeyUp = ({ key }: { key: string }) => {
  pressedKeys.delete(key)

  handleKey(key, 0)

  for (const key of pressedKeys) {
    handleKey(key, 1)
  }

  if (pressedKeys.size === 0) {
    keyboardControlling = false
  }
}

const handleGamepadConnected = () => {
  const gamepad = navigator.getGamepads()[0]

  if (gamepad === null) {
    return
  }

  gamepadConnected = true
  window.addEventListener('gamepaddisconnected', handleGamepadDisconnected, PASSIVE)
}

const handleGamepadDisconnected = () => {
  gamepadConnected = false
}

const handleXboxController = (gamepad: Gamepad) => {
  const [
    leftStickX,
    leftStickY,
    rightStickX,
    rightStickY
  ] = gamepad.axes

  const [
    A, B, X, Y,
    leftBumper, rightBumper, leftTrigger, rightTrigger,
    back, start,
    leftStickButton, rightStickButton,
    padUp, padDown, padLeft, padRight
  ] = gamepad.buttons

  state.fill(0)

  if (Math.abs(leftStickX) > XBOX_THUMSTICK_THRESHOLD) {
    state[0] = leftStickX
  } else if (padLeft.pressed === true) {
    state[0] = -1
  } else if (padRight.pressed === true) {
    state[0] = +1
  }

  if (Math.abs(leftStickY) > XBOX_THUMSTICK_THRESHOLD) {
    state[2] = leftStickY
  } else if (padUp.pressed === true) {
    state[2] = -1
  } else if (padDown.pressed === true) {
    state[2] = +1
  }

  if (A.pressed === true) {
    state[3] = 1
  }

  if (B.pressed === true) {
    state[4] = 1
  }
}

window.addEventListener('keydown', handleKeyDown, PASSIVE)
window.addEventListener('keyup', handleKeyUp, PASSIVE)
window.addEventListener('gamepadconnected', handleGamepadConnected, PASSIVE)

export const controls = {
  state,
  update
}