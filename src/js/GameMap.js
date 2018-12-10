export default class GameScene {
  constructor (scene) {
    this.scene = scene
    this.tilemap = new Phaser.Tilemaps.ParseToTilemap(scene, 'map', 16, 16)
    const tileset = this.tilemap.addTilesetImage('town', 'tiles')
    this.staticLayers = this.tilemap.layers.map((_layer, i) => this.tilemap.createStaticLayer(i, tileset, 0, 0))
    this.staticLayers[1].setCollision(this.getCollides(), true)
    return this
  }
  getCollides () {
    const tileData = this.scene.cache.json.get('town')
    return Object.keys(tileData.tileproperties).map((id, i) => tileData.tileproperties[id].collides ? i + 1 : null).filter(i => i !== null)
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
}
