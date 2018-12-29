import config from '../data/config'
export default class Gate extends Phaser.GameObjects.Zone {
  constructor (scene, area, key, position) {
    const x = area[0] * config.TILE_SIZE
    const y = area[1] * config.TILE_SIZE
    const width = (area[2] + 1 - area[0]) * config.TILE_SIZE
    const height = (area[3] + 1 - area[1]) * config.TILE_SIZE
    super(scene, x, y, width, height)
    this.setOrigin(0, 0)
    scene.physics.world.enable(this)
    scene.physics.add.overlap(this, scene.player, () => {
      console.log(`go to ${key}`)
      scene.scene.start('Game', { map: key, x: position[0] * config.TILE_SIZE, y: position[1] * config.TILE_SIZE })
    })
  }
}
