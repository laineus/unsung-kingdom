import areas from '../data/areas'
const TILE = 8
export default class FieldMap extends Phaser.GameObjects.Container {
  constructor (scene, key) {
    super(scene)
    this.key = key
    const area = areas.find(v => v.key === key)
    const visited = scene.storage.state.visited
    const sprites = area.list.filter(v => visited.includes(v.key)).map(v => {
      const x = v.x * TILE
      const y = v.y * TILE
      return scene.add.sprite(x, y, `map/${v.key}`).setOrigin(0, 0)
    })
    this.add(sprites)
  }
}
