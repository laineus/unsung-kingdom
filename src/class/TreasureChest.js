import Substance from './Substance'
export default class TreasureChest extends Substance {
  constructor (scene, x, y, weaponId, stateKey, left) {
    super(scene, x, y, 'treasure_chest')
    this.scene = scene
    this.stateKey = stateKey
    this.weaponId = weaponId
    if (left) this.image.setScale(-1, 1)
    if (this.alreadyEarned) {
      this.image.setFrame(6)
      return
    }
    this.setEvent()
  }
  get alreadyEarned () {
    return this.state.includes(this.stateKey)
  }
  async event () {
    this.scene.ui.increaseWeapon(this.weaponId)
    this.open()
  }
  setEvent () {
    if (!this.weaponId || this.alreadyEarned) return
    this.setTapEvent(this.event.bind(this))
  }
  preUpdate () {
    super.preUpdate()
  }
  open () {
    this.state.push(this.stateKey)
    this.scene.se('unbox')
    this.image.anims.play('treasure', true)
    this.removeTapEvent()
  }
  get state () {
    return this.scene.storage.state.treasures
  }
}
