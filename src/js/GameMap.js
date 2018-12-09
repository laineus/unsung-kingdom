export default class GameScene {
  constructor (scene, debug = false) {
    const map = new Phaser.Tilemaps.ParseToTilemap(scene, 'map', 16, 16)
    const tileset = map.addTilesetImage('town', 'tiles')
    map.staticLayers = []
    map.staticLayers.push(map.createStaticLayer('layer1', tileset, 0, 0))
    map.staticLayers.push(map.createStaticLayer('layer2', tileset, 0, 0).setCollisionByProperty({ collides: true }))
    if (debug) this.displayDebug(scene, map)
    return map
  }
  displayDebug (scene, map) {
    const debugGraphics = scene.add.graphics().setAlpha(0.75)
    map.staticLayers.forEach(layer => {
      layer.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
        faceColor: new Phaser.Display.Color(40, 39, 37, 255)
      })
    })
  }
}
