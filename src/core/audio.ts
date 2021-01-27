import {
  Object3D,
  PositionalAudio
} from 'three'

import { gl } from './gl'
import { assets } from './assets'

const sounds = new Map<string, PositionalAudio>()

const createPositional = async (file: string, parent: Object3D, refDistance = 1, loop = true, volume = 1) => {
  const buffer = assets.get(file)
  const sound = new PositionalAudio(gl.listener)
  sound.setBuffer(buffer)
  sound.setRefDistance(refDistance)
  sound.setLoop(loop)
  sound.setVolume(volume)
  sounds.set(file, sound)
  parent.add(sound)
}

const get = (key: string) => {
  const audio = sounds.get(key)

  if (audio === undefined) {
    throw new Error(`Audio ${key} is undefined.`)
  }

  return audio
}

const setLoop = (key: string, loop: boolean) => {
  get(key).setLoop(loop)
}

const play = (key: string) => {
  const audio = get(key)
  
  if (audio.isPlaying === false) {
    audio.play()
  }
}

const stop = (key: string) => {
  get(key).stop()
}

export const audio = {
  createPositional,
  get,
  setLoop,
  play,
  stop
}
