import Gate from './Gate'
import Enemy from './Enemy'
import Character from './Character'
export default class GameMap {
  constructor (scene, mapKey) {
    this.scene = scene
    this.name = mapKey
    this.tilemap = new Phaser.Tilemaps.ParseToTilemap(scene, mapKey, 16, 16)
    const tilesets = this._getTilesets()
    const collides = this._getCollides()
    this.staticLayers = this.tilemap.layers.map((layer, i) => {
      return layer.visible ? this.tilemap.createStaticLayer(i, tilesets, 0, 0) : null
    }).filter(v => v)
    this.staticLayers.forEach(layer => layer.setCollision(collides))
    scene.physics.add.collider(this.staticLayers, scene.substances)
    this.gates = this._getGateObjects().map(gate => new Gate(scene, gate.key, gate.x, gate.y, gate.zone_x, gate.zone_y, gate.zone_width, gate.zone_height))
    this.charas = this._getObjects('chara').map(data => new Character(scene, data.x, data.y, data.name).setId(data.id))
    this.enemies = this._getObjects('enemy').map(data => new Enemy(scene, data.x, data.y, data.name).setId(data.id))
    this.scene.ui.renderMiniMap(this.tilemap)
    return this
  }
  get width () {
    return this.tilemap.widthInPixels
  }
  get height () {
    return this.tilemap.heightInPixels
  }
  getCharaById (id) {
    return this.charas.find(v => v.id === id)
  }
  getEnemyById (id) {
    return this.enemy.find(v => v.id === id)
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
  _getTilesets () {
    return this.tilemap.tilesets.map(tileset => this.tilemap.addTilesetImage(tileset.name))
  }
  _getCollides () {
    return this.tilemap.tilesets.map(set => {
      const data = this.scene.cache.json.get(set.name)
      return data.tiles.filter(tile => tile.type === 'collides').map(tile => tile.id + set.firstgid)
    }).flat()
  }
  _getObjects (type) {
    return this.tilemap.objects.map(v => v.objects).flat().filter(v => v.type === type)
  }
  _getGateObjects () {
    return this._getObjects('gate').map(v => {
      return {
        key: v.name,
        x: v.properties.find(v => v.name === 'x').value,
        y: v.properties.find(v => v.name === 'y').value,
        zone_x: v.x,
        zone_y: v.y,
        zone_width: v.width,
        zone_height: v.height
      }
    })
  }
}
