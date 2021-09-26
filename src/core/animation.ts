import type { Object3D } from 'three'

import { AnimationMixer, AnimationClip } from 'three'

const mixers = new Set<AnimationMixer>()
const mixerMap = new Map<string, AnimationMixer>()

const update = (dt: number) => {
  const delta = dt / 1000

  for (const mixer of mixers) {
    mixer.update(delta)
  }
}

const createMixer = (object: Object3D) => {
  const mixer = new AnimationMixer(object)
  mixers.add(mixer)
  mixerMap.set(object.name, mixer)
  return mixer
}

const playClip = (object: Object3D, clipName: string) => {
  const clips = object.animations
  const mixer = mixerMap.get(object.name) ?? createMixer(object)
  const clip = AnimationClip.findByName(clips, clipName)
  mixer.clipAction(clip).play()
}

export const animation = {
  update,
  playClip
}
