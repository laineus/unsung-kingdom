import Substance from './Substance'
export default class TreasureChest extends Substance {
  constructor (scene, x, y, weaponId, stateKey, left) {
    super(scene, x, y, 'treasure_chest')
    this.scene = scene
    this.stateKey = stateKey
    if (left) this.image.setScale(-1, 1)
    if (this.state.includes(stateKey)) {
      this.image.setFrame(6)
      this.removeTapEvent()
      return
    }
    if (weaponId) {
      this.setTapEvent(async () => {
        scene.ui.increaseWeapon(weaponId)
        this.open()
      })
    }
  }
  preUpdate () {
    super.preUpdate()
  }
  open () {
    this.state.push(this.stateKey)
    this.image.anims.play('treasure', true)
    this.removeTapEvent()
  }
  get state () {
    return this.scene.storage.state.treasures
  }
}
