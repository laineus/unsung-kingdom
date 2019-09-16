import Area from './Area'
import Gate from './Gate'
import Character from './Character'
import Substance from './Substance'
export default class GameMap {
  constructor (scene, mapKey) {
    this.scene = scene
    this.name = mapKey
    const tilemap = new Phaser.Tilemaps.ParseToTilemap(scene, mapKey)
    this.width = tilemap.widthInPixels
    this.height = tilemap.heightInPixels
    const tilesets = this._getTilesets(tilemap)
    const collides = this._getCollides(tilemap)
    this.staticLayers = tilemap.layers.map((layer, i) => {
      return layer.visible ? tilemap.createStaticLayer(i, tilesets, 0, 0) : null
    }).filter(v => v)
    this.staticLayers.forEach(layer => layer.setCollision(collides))
    scene.physics.add.collider(this.staticLayers, scene.substances)
    this.gates = this._getObjects(tilemap, 'gate').map(this._toAreaData).map(gate => new Gate(scene, gate.key, gate.x, gate.y, gate.zone_x, gate.zone_y, gate.zone_width, gate.zone_height).setId(gate.id))
    this.areas = this._getObjects(tilemap, 'area').map(this._toAreaData).map(area => new Area(scene, area.zone_x, area.zone_y, area.zone_width, area.zone_height).setId(area.id))
    this.charas = this._getObjects(tilemap, 'chara').map(data => new Character(scene, data.x, data.y, data.name).setId(data.id))
    this.objects = this._getObjects(tilemap, 'object').map(data => new Substance(scene, data.x, data.y, data.name).setId(data.id))
    this.images = tilemap.images.map(data => scene.add.sprite(data.x, data.y, data.name).setOrigin(0, 0))
    this.scene.ui.renderMiniMap(this.tilemap)
    return this
  }
  getObjectById (id) {
    return ['charas', 'gates', 'areas', 'objects'].reduce((found, key) => {
      return found || this[key].find(v => v.id === id)
    }, null)
  }
  isCollides (tileX, tileY) {
    return this.staticLayers.some(layer => {
      const tile = layer.getTileAt(tileX, tileY)
      return tile && tile.collides
    })
  }
  displayDebug () {
    const debugGraphics = this.scene.add.graphics().setAlpha(0.75)
    this.staticLayers.forEach(layer => {
      layer.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
        faceColor: new Phaser.Display.Color(40, 39, 37, 255)
      })
    })
  }
  // private
  _getTilesets (tilemap) {
    return tilemap.tilesets.map(tileset => tilemap.addTilesetImage(tileset.name))
  }
  _getCollides (tilemap) {
    return tilemap.tilesets.map(set => {
      const data = this.scene.cache.json.get(set.name)
      return data.tiles.filter(tile => tile.type === 'collides').map(tile => tile.id + set.firstgid)
    }).flat()
  }
  _getObjects (tilemap, type) {
    return tilemap.objects.map(v => v.objects).flat().filter(v => v.type === type)
  }
  _toAreaData (v) {
    return {
      id: v.id,
      key: v.name,
      x: v.properties && v.properties.find(v => v.name === 'x').value,
      y: v.properties && v.properties.find(v => v.name === 'y').value,
      zone_x: v.x,
      zone_y: v.y,
      zone_width: v.width,
      zone_height: v.height
    }
  }
}
