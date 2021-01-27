import type { Object3D } from 'three'

import { AnimationMixer, AnimationClip } from 'three'
import { physics } from './physics'

const mixers = new Set<AnimationMixer>()
const rigidbodies = new Set<Object3D>()
const mixerMap = new Map<string, AnimationMixer>()

const update = (dt: number) => {
  const delta = dt / 1000

  for (const mixer of mixers) {
    mixer.update(delta)
  }

  const ids = new Uint16Array(rigidbodies.size)
  const transforms = new Float32Array(rigidbodies.size * 3 * 4)

  let i = 0
  let j = 0
  for (const mesh of rigidbodies) {
    ids[i] = mesh.id
    transforms[j + 0] = mesh.position.x
    transforms[j + 1] = mesh.position.y
    transforms[j + 2] = mesh.position.z
    transforms[j + 3] = mesh.quaternion.x
    transforms[j + 4] = mesh.quaternion.y
    transforms[j + 5] = mesh.quaternion.z
    transforms[j + 6] = mesh.quaternion.w
    i += 1
    j += 7
    mesh.updateMatrix()
  }

  physics.teleportMany(ids, transforms)
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
  const [name] = clip.tracks[0].name.split('.')
  const child = object.getObjectByName(name)
  mixer.clipAction(clip).play()

  if (child?.userData.components.includes('rigidbody')) {
    rigidbodies.add(child)
  }
}

export const animation = {
  update,
  playClip
}
