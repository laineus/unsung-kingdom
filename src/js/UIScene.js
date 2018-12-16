import Talk from './Talk'
export default class UIScene extends Phaser.Scene {
  constructor () {
    super({ key: 'UI', active: false })
  }
  create () {
    // test
    const talk = new Talk(this)
  }
  update (time, delta) {
  }
}
