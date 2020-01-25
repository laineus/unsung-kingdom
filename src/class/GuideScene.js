import FieldMap from './FieldMap'
export default class GuideScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Guide', active: false })
  }
  create () {
    this.storage = {
      state: {
        map: 'forest3',
        x: 400,
        y: 400,
        visited: ['forest1', 'forest2', 'forest3', 'forest4']
      }
    }
    const map = this.getFieldMap('forest')
    this.add.existing(map)
  }
  update () {
  }
  getFieldMap (key) {
    return new FieldMap(this, key)
  }
}
