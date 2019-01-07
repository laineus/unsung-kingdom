export default class GameMap {
  constructor (scene, mapKey) {
    this.scene = scene
    this.tilemap = new Phaser.Tilemaps.ParseToTilemap(scene, mapKey, 16, 16)
    const tilesets = this._getTilesets()
    const collides = this._getCollides()
    this.staticLayers = this.tilemap.layers.map((layer, i) => {
      return layer.visible ? this.tilemap.createStaticLayer(i, tilesets, 0, 0) : null
    }).filter(v => v)
    this.staticLayers.forEach(layer => layer.setCollision(collides))
    return this
  }
  get width () {
    return this.tilemap.widthInPixels
  }
  get height () {
    return this.tilemap.heightInPixels
  }
  addCollider (target) {
    this.scene.physics.add.collider(target, this.staticLayers)
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
  _getGates () {
    return this.tilemap.objects.map(v => v.objects).flat().filter(v => v.type === 'gate').map(v => {
      return {
        key: v.name,
        x: v.properties.find(v => v.name === 'x').value,
        y: v.properties.find(v => v.name === 'y').value,
        area_x: v.x,
        area_y: v.y,
        width: v.width,
        height: v.height
      }
    })
  }
}
