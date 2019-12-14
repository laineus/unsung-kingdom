import Area from './Area'
import Gate from './Gate'
import Character from './Character'
import Substance from './Substance'
import TreasureChest from './TreasureChest'
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
    this.staticLayers = tilemap.layers.map((layer, i) => {
      return layer.visible ? tilemap.createStaticLayer(i, tilesets, 0, 0) : null
    }).filter(Boolean)
    const collides = this._getTileIdsByType(tilemap, 'collides')
    this.staticLayers.forEach(layer => layer.setCollision(collides))
    this.staticLayers[this.staticLayers.length - 1].setDepth(100000)
    scene.physics.add.collider(this.staticLayers, scene.substances)
    this.gates = this._getObjects(tilemap, 'gate').map(this._toAreaData).map(gate => new Gate(scene, gate.key, gate.x, gate.y, gate.zone_x, gate.zone_y, gate.zone_width, gate.zone_height).setId(gate.id))
    this.areas = this._getObjects(tilemap, 'area').map(this._toAreaData).map(area => new Area(scene, area.zone_x, area.zone_y, area.zone_width, area.zone_height).setId(area.id))
    this.charas = this._getObjects(tilemap, 'chara').map(data => new Character(scene, data.x, data.y, data.name).setR((data.rotation + 90) * (Math.PI / 180)).setId(data.id))
    this.objects = this._getObjects(tilemap, 'object').map(data => new Substance(scene, data.x, data.y, data.name).setId(data.id))
    this.treasures = this._getObjects(tilemap, 'treasure').map(data => new TreasureChest(scene, data.x, data.y, Number(data.name), `${mapKey}_${data.id}`, data.rotation === 90).setId(data.id))
  }
  getObjectById (id) {
    return ['charas', 'gates', 'areas', 'objects', 'treasures'].reduce((found, key) => {
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
  _generateTopLayer (tilemap) {
    const visibleLayers = tilemap.layers.filter(v => v.visible).reverse()
    const topTileIds = this._getTileIdsByType(tilemap, 'top')
    const top = new Phaser.Tilemaps.LayerData({ name: 'topLayer', width: tilemap.width, height: tilemap.height })
    top.data = tilemap.height.toArray.map(y => {
      return tilemap.width.toArray.map(x => {
        const found = visibleLayers.find(v => topTileIds.includes(v.data[y][x].index))
        return new Phaser.Tilemaps.Tile(top, (found ? found.data[y][x].index : -1), x, y, 32, 32, 32, 32)
      })
    })
    return top
  }
  _getTilesets (tilemap) {
    return tilemap.tilesets.map(tileset => tilemap.addTilesetImage(tileset.name, `tileset/${tileset.name}`))
  }
  _getTileIdsByType (tilemap, type) {
    return tilemap.tilesets.map(set => {
      const data = this.scene.cache.json.get(set.name)
      return data.tiles.filter(tile => tile.type === type).map(tile => tile.id + set.firstgid)
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
