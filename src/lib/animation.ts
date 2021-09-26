import * as THREE from 'three'

const mixers = new Set<THREE.AnimationMixer>()
const mixerMap = new Map<string, THREE.AnimationMixer>()

const update = (dt: number) => {
  const delta = dt / 1000

  for (const mixer of mixers) {
    mixer.update(delta)
  }
}

const createMixer = (object: THREE.Object3D) => {
  const mixer = new THREE.AnimationMixer(object)
  mixers.add(mixer)
  mixerMap.set(object.name, mixer)
  return mixer
}

const playClip = (object: THREE.Object3D, clipName: string) => {
  const clips = object.animations
  const mixer = mixerMap.get(object.name) ?? createMixer(object)
  const clip = THREE.AnimationClip.findByName(clips, clipName)
  mixer.clipAction(clip).play()
}

export const animation = {
  update,
  playClip
}
