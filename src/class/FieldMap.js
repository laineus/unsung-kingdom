import areas from '../data/areas'
import config from '../data/config'
const MAG = 0.25
const TILE_SIZE = config.TILE_SIZE * MAG
export default class FieldMap extends Phaser.GameObjects.Container {
  constructor (scene, key) {
    super(scene)
    this.key = key
    const state = scene.storage.state
    const area = areas.find(v => v.key === key)
    const sprites = area.list.filter(v => state.visited.includes(v.key)).map(v => {
      const x = v.x * TILE_SIZE
      const y = v.y * TILE_SIZE
      return scene.add.sprite(x, y, `map_image/${v.key}`).setOrigin(0, 0).setAlpha(0.4)
    })
    this.add(sprites)
    const currentField = area.list.find(v => v.key === state.map)
    if (currentField) {
      const x = (currentField.x * TILE_SIZE) + (state.x * MAG)
      const y = (currentField.y * TILE_SIZE) + (state.y * MAG)
      const marker = scene.add.sprite(x, y, 'marker').setScale(0.5, 0.5).setOrigin(0.5, 1)
      this.add(marker)
    }
  }
}
