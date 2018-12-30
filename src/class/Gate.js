import tileToPixel from '../util/tileToPixel'
export default class Gate extends Phaser.GameObjects.Zone {
  constructor (scene, area, key, position) {
    const x = tileToPixel(area[0])
    const y = tileToPixel(area[1])
    const width = tileToPixel(area[2] + 1 - area[0])
    const height = tileToPixel(area[3] + 1 - area[1])
    super(scene, x, y, width, height)
    this.setOrigin(0, 0)
    scene.physics.world.enable(this)
    scene.physics.add.overlap(this, scene.player, () => {
      console.log(`go to ${key}`)
      scene.scene.start('Game', { map: key, x: tileToPixel(position[0]), y: tileToPixel(position[1]) })
    })
  }
}
