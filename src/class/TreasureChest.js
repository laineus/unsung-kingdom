import Substance from './Substance'
export default class TreasureChest extends Substance {
  constructor (scene, x, y, weaponId, stateKey, left) {
    super(scene, x, y, 'treasure_chest')
    if (left) this.image.setScale(-1, 1)
    const treasures = scene.storage.state.treasures
    if (treasures.includes(stateKey)) {
      this.image.setFrame(6)
      return
    }
    this.setTapEvent(async () => {
      scene.ui.increaseWeapon(weaponId)
      treasures.push(stateKey)
      this.image.anims.play('treasure', true)
      this.removeTapEvent()
    })
  }
  preUpdate () {
    super.preUpdate()
  }
}
