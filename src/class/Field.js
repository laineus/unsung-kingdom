import Area from './Area'
import Gate from './Gate'
import Character from './Character'
import Substance from './Substance'
import TreasureChest from './TreasureChest'
import config from '../data/config'
export const DEPTH = {
  GROUND: 0,
  PARTICLES: 100000,
  TOP: 110000,
  LIGHT: 120000,
  SUN_LIGHT: 140000,
  DARKNESS: 130000
}
const getValueByProperties = (properties, key) => {
  if (!Array.isArray(properties)) return null
  const property = properties.find(v => v.name === key)
  return property ? property.value : null
}
const parseArgb = str => {
  return {
    alpha: parseInt(str.slice(1, 3), 16) / 255,
    color: parseInt(str.slice(3), 16)
  }
}
export default class Field {
  constructor (scene, mapKey) {
    scene.add.existing(this)
    this.scene = scene
    this.name = mapKey
    const tilemap = new Phaser.Tilemaps.ParseToTilemap(scene, mapKey)
    this.width = tilemap.widthInPixels
    this.height = tilemap.heightInPixels
    const tilesets = this._getTilesets(tilemap)
    tilemap.layers.push(this._generateTopLayer(tilemap))
    this.animationTiles = this._getAllTileSettings(tilemap).filter(v => 'animation' in v.setting).map(v => {
      const targets = tilemap.layers.filter(v => v.visible).map(l => l.data.flat()).flat().filter(tile => tile.index === v.id)
      const max = Math.sum(...v.setting.animation.map(v => v.duration))
      return { targets, animations: v.setting.animation, max }
    })
    this.layers = tilemap.layers.map((layer, i) => {
      const dynamicFlag = getValueByProperties(layer.properties, 'dynamic')
      const allAnimTiles = this.animationTiles.map(v => v.targets).flat()
      const hasAnimTile = layer.data.flat().some(v => allAnimTiles.includes(v))
      const typeName = dynamicFlag || hasAnimTile ? 'createDynamicLayer' : 'createStaticLayer'
      return layer.visible ? tilemap[typeName](i, tilesets, 0, 0).setDepth(DEPTH.GROUND + this._getLayerIndexByName(layer.name)) : null
    }).filter(Boolean)
    const lights = this._generateLights(tilemap)
    const darkness = getValueByProperties(tilemap.properties, 'darkness')
    if (darkness) {
      const { alpha, color } = parseArgb(darkness)
      this._renderDarkness(alpha, color, lights, this._getExposures(tilemap))
    }
    const sun = getValueByProperties(tilemap.properties, 'sun')
    if (sun) this._generateSunLight()
    const particles = getValueByProperties(tilemap.properties, 'particles')
    if (particles) this._generateParticles(parseArgb(particles).color)
    this.images = tilemap.images.map(data => this._getImage(data))
    const collides = this._getTileIdsByType(tilemap, 'collides')
    this.layers.forEach(layer => layer.setCollision(collides))
    this.layers[this.layers.length - 1].setDepth(DEPTH.TOP)
    scene.physics.add.collider(this.layers, scene.substances)
    this.gates = this._getObjects(tilemap, 'gate').map(this._toAreaData).map(gate => new Gate(scene, gate.key, gate.x, gate.y, gate.zone_x, gate.zone_y, gate.zone_width, gate.zone_height).setId(gate.id))
    this.areas = this._getObjects(tilemap, 'area').map(this._toAreaData).map(area => new Area(scene, area.zone_x, area.zone_y, area.zone_width, area.zone_height).setId(area.id))
    this.charas = this._getObjects(tilemap, 'chara').map(data => new Character(scene, data.x, data.y, data.name).setR((data.rotation + 90) * (Math.PI / 180)).setId(data.id))
    this.objects = this._getObjects(tilemap, 'object').map(data => new Substance(scene, data.x, data.y, data.name).setId(data.id))
    this.treasures = this._getObjects(tilemap, 'treasure').map(data => new TreasureChest(scene, data.x, data.y, Number(data.name), `${mapKey}_${data.id}`, data.rotation === 90).setId(data.id))
  }
  update (time) {
    this.animationTiles.forEach(setting => {
      const current = time % setting.max
      const anim = setting.animations.find((_, i, arr) => {
        return current < Math.sum(...arr.slice(0, i + 1).map(v => v.duration))
      })
      setting.targets.forEach(v => {
        v.index = anim.tileid + 1
      })
    })
  }
  getLayerByName (name) {
    return this.layers.find(v => v.layer.name === name)
  }
  getObjectById (id) {
    return ['charas', 'gates', 'areas', 'objects', 'treasures'].reduce((found, key) => {
      return found || this[key].find(v => v.id === id)
    }, null)
  }
  getImageByName (name) {
    return this.images.find(v => v.name === name)
  }
  isCollides (tileX, tileY) {
    return this.layers.some(layer => {
      const tile = layer.getTileAt(tileX, tileY)
      return tile && tile.collides
    })
  }
  displayDebug () {
    const debugGraphics = this.scene.add.graphics().setAlpha(0.75)
    this.layers.forEach(layer => {
      layer.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
        faceColor: new Phaser.Display.Color(40, 39, 37, 255)
      })
    })
  }
  // private
  _getAllTileSettings (tilemap) {
    return tilemap.tilesets.map(set => {
      return this.scene.cache.json.get(set.name).tiles.map(v => {
        return { id: v.id + set.firstgid, setting: v }
      })
    }).flat()
  }
  _generateTopLayer (tilemap) {
    const visibleLayers = tilemap.layers.filter(v => v.visible).reverse()
    const topTileIds = this._getTileIdsByType(tilemap, 'top')
    const top = new Phaser.Tilemaps.LayerData({ name: 'topLayer', width: tilemap.width, height: tilemap.height })
    top.data = tilemap.height.toArray().map(y => {
      return tilemap.width.toArray().map(x => {
        const found = visibleLayers.find(v => topTileIds.includes(v.data[y][x].index))
        return new Phaser.Tilemaps.Tile(top, (found ? found.data[y][x].index : -1), x, y, 32, 32, 32, 32).setFlip(found && found.data[y][x].flipX, found && found.data[y][x].flipY)
      })
    })
    return top
  }
  _generateSunLight () {
    const sun1 = this.scene.add.sprite(30, -70, 'sun_light').setDepth(DEPTH.SUN_LIGHT).setBlendMode(Phaser.BlendModes.OVERLAY).setOrigin(0.5, 0).setScale(1.4, 10).setRotation(-1.1).setAlpha(0.6)
    const sun2 = this.scene.add.sprite(-70, -70, 'sun_light').setDepth(DEPTH.SUN_LIGHT).setBlendMode(Phaser.BlendModes.OVERLAY).setOrigin(0.5, 0).setScale(0.8, 10).setRotation(-0.8).setAlpha(0.6)
    const sun3 = this.scene.add.sprite(-70, 30, 'sun_light').setDepth(DEPTH.SUN_LIGHT).setBlendMode(Phaser.BlendModes.OVERLAY).setOrigin(0.5, 0).setScale(0.4, 10).setRotation(-0.5).setAlpha(0.6)
    const suns = [sun1, sun2, sun3]
    suns.forEach(sun => {
      this.scene.add.tween({
        targets: sun, duration: Math.randomInt(400, 700),
        scaleX: sun.scaleX + 0.02, alpha: 0.8,
        yoyo: true, loop: -1
      })
    })
  }
  _generateLights (tilemap) {
    const lights = this._getTileSettingsByType(tilemap, 'light')
    const lightTiles = this.layers.map(layer => {
      return layer.layer.data.map(row => {
        return row.filter(tile => lights.map(v => v.id).includes(tile.index))
      }).filter(arr => arr.length).flatMap(v => v)
    }).filter(arr => arr.length).flatMap(v => v)
    const getProperties = id => lights.find(l => l.id === id).properties
    return lightTiles.map(v => {
      const properties = getProperties(v.index)
      const { color } = parseArgb(properties.color)
      return this.getLight(v.x.toPixelCenter, v.y.toPixelCenter, color, properties.drop)
    })
  }
  getLight (x, y, color, drop = false) {
    const sprite = this.scene.add.sprite(x, y, 'light').setTint(color).setScale(0.5).setBlendMode(Phaser.BlendModes.OVERLAY).setDepth(DEPTH.LIGHT)
    const sprite2 = drop ? this.scene.add.sprite(x, y + 55, 'light').setAlpha(0.8).setTint(color).setScale(0.6).setBlendMode(Phaser.BlendModes.OVERLAY).setDepth(DEPTH.LIGHT) : null
    this.scene.add.tween({
      targets: [sprite, ...(sprite2 ? [sprite2] : [])], duration: Math.randomInt(300, 400),
      scale: 0.6, alpha: 0.8, yoyo: true, loop: -1
    })
    return sprite
  }
  _generateParticles (color) {
    const particles = this.scene.add.particles('light')
    particles.setDepth(DEPTH.PARTICLES)
    particles.createEmitter({
      x: { min: 0, max: Math.max(this.width, (40).toPixel) },
      y: { min: 0, max: Math.max(this.height, (40).toPixel) },
      scale: { start: 0.03, end: 0.07 },
      alpha: { start: 1, end: 0.2 },
      tint: color,
      blendMode: Phaser.BlendModes.OVERLAY,
      lifespan: 2000,
      speed: { min: -20, max: 20 },
      accelerationX: 0,
      accelerationY: -25,
      frequency: 20
    })
  }
  _renderDarkness (alpha, color, lights = [], exposures = []) {
    const posAndSize = [0, 0, this.width, this.height]
    const dark = this.scene.add.renderTexture(...posAndSize).fill(color, alpha, ...posAndSize).setOrigin(0.0).setDepth(DEPTH.DARKNESS)
    const brush = this.scene.add.image(0, 0, 'light').setScale(3, 3)
    lights.forEach(light => dark.erase(brush, light.x, light.y, 1))
    exposures.forEach(exp => dark.erase(brush, exp.x, exp.y, 1))
    brush.destroy()
    return dark
  }
  _getTilesets (tilemap) {
    return tilemap.tilesets.map(tileset => tilemap.addTilesetImage(tileset.name, `tileset/${tileset.name}`, 32, 32, 1, 2))
  }
  _getTileSettingsByType (tilemap, type) {
    return this._getAllTileSettings(tilemap).filter(tile => tile.setting.type && tile.setting.type.split(',').includes(type)).map(tile => {
      const properties = tile.setting.properties ? tile.setting.properties.reduce((obj, v) => {
        obj[v.name] = v.value
        return obj
      }, {}) : {}
      return { id: tile.id, properties }
    })
  }
  _getTileIdsByType (tilemap, type) {
    return this._getTileSettingsByType(tilemap, type).map(v => v.id)
  }
  _getLayerIndexByName (name) {
    return this.scene.cache.tilemap.get(this.name).data.layers.findIndex(v => v.name === name)
  }
  _getObjects (tilemap, type) {
    return tilemap.objects.map(v => v.objects).flat().filter(v => v.type === type)
  }
  _getExposures (tilemap) {
    const expLayer = tilemap.objects.find(l => l.name === 'exposure')
    return expLayer ? expLayer.objects : []
  }
  _getImage (data) {
    const image = data.image.split('/').slice(-1)[0].split('.')[0]
    const sprite = this.scene.add.sprite(data.x, data.y, `tileset/${image}`).setOrigin(0, 0).setDepth(DEPTH.GROUND + this._getLayerIndexByName(data.name))
    const blend = getValueByProperties(data.properties, 'blend')
    if (blend) sprite.setBlendMode(Phaser.BlendModes[blend])
    const depth = getValueByProperties(data.properties, 'depth')
    if (depth) {
      depth === 'SUBSTANCE' ? sprite.setDepth(data.y + (sprite.height * 0.8)) : sprite.setDepth(DEPTH[depth] + 1)
    }
    sprite.name = data.name
    return sprite
  }
  _toAreaData (v) {
    return {
      id: v.id,
      key: v.name,
      x: getValueByProperties(v.properties, 'x'),
      y: getValueByProperties(v.properties, 'y'),
      zone_x: v.x,
      zone_y: v.y,
      zone_width: v.width,
      zone_height: v.height
    }
  }
  rain () {
    const particles = this.scene.add.particles('rectangle')
    particles.setDepth(DEPTH.SUN_LIGHT).setAngle(-3)
    particles.createEmitter({
      x: { min: 0, max: Math.max(this.width, (40).toPixel) },
      y: { min: 0, max: Math.max(this.height, (40).toPixel) },
      scaleX: { start: 0.03, end: 0.07 },
      scaleY: { start: 0.4, end: 1 },
      color: config.COLORS.ghost,
      alpha: { start: 0.3, end: 0.1 },
      lifespan: 2000,
      speedY: { min: 100, max: 300 },
      accelerationX: 30,
      accelerationY: 300,
      frequency: 20
    })
    this._renderDarkness(0.3, config.COLORS.black)
  }
}
