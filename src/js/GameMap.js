export default class GameScene {
  constructor (scene) {
    this.scene = scene
    this.tilemap = new Phaser.Tilemaps.ParseToTilemap(scene, 'map', 16, 16)
    const tileset = this.tilemap.addTilesetImage('town', 'tiles')
    this.staticLayers = []
    this.staticLayers.push(this.tilemap.createStaticLayer('layer1', tileset, 0, 0))
    this.staticLayers.push(this.tilemap.createStaticLayer('layer2', tileset, 0, 0).setCollisionByProperty({ collides: true }))
    return this
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
