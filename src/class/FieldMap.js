const MAPS = {
  forest: [
    { key: 'forest1', x: 103, y: 51 },
    { key: 'forest2', x: 74, y: 83 },
    { key: 'forest3', x: 71, y: 35 },
    { key: 'forest4', x: 44, y: 3 },
    { key: 'forest5', x: 55, y: 115 },
    { key: 'forest6', x: 22, y: 83 },
    { key: 'forest7', x: 39, y: 35 },
    { key: 'forest8', x: 7, y: 32 },
    { key: 'forest9', x: 0, y: 0 }
  ]
}
const TILE = 8
export default class FieldMap extends Phaser.GameObjects.Container {
  constructor (scene, key) {
    super(scene)
    const sprites = MAPS[key].map(v => {
      const x = v.x * TILE
      const y = v.y * TILE
      return scene.add.sprite(x, y, `map/${v.key}`).setOrigin(0, 0)
    })
    this.add(sprites)
  }
}
