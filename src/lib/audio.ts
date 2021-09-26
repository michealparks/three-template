import * as THREE from 'three'
import { assets } from './assets'

const sounds = new Map<string, THREE.PositionalAudio>()

const createPositional = async (file: string, listener: THREE.AudioListener, parent: THREE.Object3D, refDistance = 1, loop = true, volume = 1) => {
  let buffer = assets.get(file) ?? await assets.load(file)
  const sound = new THREE.PositionalAudio(listener)
  sound.setBuffer(buffer)
  sound.setRefDistance(refDistance)
  sound.setLoop(loop)
  sound.setVolume(volume)
  sounds.set(file, sound)
  parent.add(sound)
  return audio
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
  return audio
}

const play = (key: string) => {
  const audio = get(key)
  
  if (audio.isPlaying === false) {
    audio.play()
  }

  return audio
}

const stop = (key: string) => {
  get(key).stop()
  return audio
}

export const audio = {
  createPositional,
  get,
  setLoop,
  play,
  stop
}
