const COLLISION_LAYER = 1
export default class GameMap {
  constructor (scene, mapKey, tilesetKey) {
    this.scene = scene
    this.tilemap = new Phaser.Tilemaps.ParseToTilemap(scene, mapKey, 16, 16)
    const tileset = this.tilemap.addTilesetImage(tilesetKey, tilesetKey)
    this.staticLayers = this.tilemap.layers.map((_layer, i) => this.tilemap.createStaticLayer(i, tileset, 0, 0))
    this.staticLayers[COLLISION_LAYER].setCollision(this.getCollides(tilesetKey), true)
    return this
  }
  getCollides (tilesetKey) {
    const tileData = this.scene.cache.json.get(tilesetKey)
    return Object.keys(tileData.tileproperties).map((id, i) => tileData.tileproperties[id].collides ? i + 1 : null).filter(i => i !== null)
  }
  addCollider (target) {
    this.scene.physics.add.collider(target, this.staticLayers[COLLISION_LAYER])
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
