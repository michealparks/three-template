import type {
  Mesh,
  MeshStandardMaterial,
  Texture
} from 'three'

import {
  MeshDepthMaterial,
  PlaneGeometry,
  NearestFilter,
  sRGBEncoding,
  DoubleSide,
  RGBADepthPacking,
  Vector2,
  Vector3,
  Box3
} from 'three'

export interface SpriteMeta {
  frameTags: [
    {
      name: string,
      from: number,
      to: number
    }
  ]
}

export interface SpriteFrame {
  duration: number
}

const vec3 = new Vector3()
const aabb = new Box3()

export class Sprite {
  paused = true
  currentAction = ''
  nextAction = ''
  currentTile = 0
  currentTileDuration = 0
  tileDisplayDuration = 0
  actionIndexStart = 0
  actionIndexEnd = 0
  actionLoop = false
  nextActionLoop = false
  actionFinishedClamped = false
  actionFinishedHide = false
  offset = new Vector2()
  frameTags = new Map()

  texture: Texture
  mesh: Mesh
  material: MeshStandardMaterial
  tiles: number
  frames: SpriteFrame[]

  constructor (mesh: Mesh, texture: Texture, frames: [], meta: SpriteMeta) {
    this.frames = Object.values(frames)
    this.tiles = meta.frameTags.length > 0
      ? meta.frameTags[meta.frameTags.length - 1].to + 1
      : 1

    texture.encoding = sRGBEncoding
    texture.matrixAutoUpdate = false
    texture.generateMipmaps = false
    texture.magFilter = NearestFilter
    texture.minFilter = NearestFilter
    texture.repeat =  new Vector2(1.0 / this.tiles, 1.0)
    texture.offset = this.offset
    texture.updateMatrix()
    this.texture = texture


    this.mesh = mesh
    this.material = mesh.material as MeshStandardMaterial

    aabb.setFromObject(mesh)
    aabb.getSize(vec3)
  
    const oldGeometry = mesh.geometry
    this.mesh.geometry = new PlaneGeometry(vec3.x, vec3.y, 1, 1)
    oldGeometry.dispose()

    if (!this.material.map) {
      throw new Error('new Sprite(): no material map')
    }

    this.material.flatShading = true
    this.material.map = this.texture
    this.material.map.needsUpdate = true
    this.material.shadowSide = DoubleSide

    mesh.customDepthMaterial = new MeshDepthMaterial({
      depthPacking: RGBADepthPacking,
      map: this.material.map,
      alphaTest: 0.5
    })

    for (const { name, from, to } of meta.frameTags) {
      this.frameTags.set(name, { from, to })
    }
  }

  update (dt: number) {
    if (this.paused === true) { 
      return
    }

    this.tileDisplayDuration = this.frames[this.currentTile].duration
    this.currentTileDuration += dt

    // TODO: attempt to remove this loop
    while (this.currentTileDuration > this.tileDisplayDuration) {
      this.currentTileDuration -= this.tileDisplayDuration
      this.currentTile += 1

      // Restart the action if the last frame was reached at last call
      if (this.currentTile > this.actionIndexEnd) {
        this.currentTile = this.actionIndexStart

        // Loop the action
        if (this.actionLoop === true) {
          // if (this.actionLoopEvent === true) {
          //   this.el.emit('loopend', {}, false)
          // }

        // Do not loop
        } else {
          this.paused = true

          if (this.actionFinishedHide === true) {
            this.mesh.visible = false
          }

          if (this.actionFinishedClamped === true) {
            // this.finalAction()
          } else {
            // setTimeout(this.finalAction, this.tileDisplayDuration)
          }
        }
      }

      this.offsetTexture()
    }
  }

  offsetTexture () {
    this.offset.x = (this.currentTile % this.tiles) / this.tiles
    this.texture.updateMatrix()
    this.material.needsUpdate = true
  }

  setFrame (frame: number) {
    this.paused = true
    this.currentTile = frame
    this.offsetTexture()
  }

  playFrames (name: string, loop = true) {
    const tag = this.frameTags.get(name)
    this.currentAction = name
    this.actionLoop = loop
    this.currentTile = this.actionIndexStart = tag.from
    this.actionIndexEnd = tag.to
    this.paused = false
    this.offsetTexture()
  }

  playFramesAfterLoopIteration (name: string, loop = true) {
    this.actionLoop = false
    this.nextAction = name
    this.nextActionLoop = loop
  }

  pause () {
    this.paused = true
  }

  pauseAfterLoopIteration () {
    this.actionLoop = false
  }

  stop () {
    const tag = this.frameTags.get(this.currentAction)
    this.paused = true
    this.currentTileDuration = 0
    this.currentTile = this.actionIndexStart = tag.from

    if (this.actionFinishedHide === true) {
      this.mesh.visible = false
    }

    this.offsetTexture()
  }

  resume () {
    if (
      this.currentTile < this.actionIndexStart ||
      this.currentTile > this.actionIndexEnd
    ) {
      this.currentTile = this.actionIndexStart
    }

    this.paused = false
    this.mesh.visible = true
  }
}
