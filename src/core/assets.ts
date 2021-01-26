import {
  LoadingManager,
  TextureLoader,
  AudioLoader
} from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const manager = new LoadingManager()
const textureLoader = new TextureLoader()
const audioLoader = new AudioLoader()
const gltfLoader = new GLTFLoader()

const queued = new Set<string>()
const listeners = new Set()
const promises = new Set()
const cache = new Map()

const loadOne = (url: string) => {
  const ext = url.split('.').pop()

  switch (ext) {
    case 'png': return
  }
}

const get = (file: string) => {
  return cache.get(file)
}

const queue = (url: string) => {
  return queued.add(url)
}

const load = () => {
  for (const url of queued) {
    promises.add(loadOne(url))
  }

  queued.clear()
  promises.clear()
}

export const assets = {
  manager,
  textureLoader,
  audioLoader,
  gltfLoader,
  get,
  queue,
  load
}
