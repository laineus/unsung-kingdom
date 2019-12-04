import Substance from './Substance'
import increaseWeapon from '../util/increaseWeapon'
export default class TreasureChest extends Substance {
  constructor (scene, x, y, weaponId, stateKey, left) {
    super(scene, x, y, 'treasure_chest')
    if (left) this.image.setScale(-1, 1)
    const treasures = scene.storage.state.treasures
    if (treasures.includes(stateKey)) return
    this.setTapEvent(async () => {
      const weapon = increaseWeapon(weaponId)
      scene.ui.announce(`${weapon.name}を手に入れた`)
      treasures.push(stateKey)
      this.removeTapEvent()
    })
  }
  preUpdate () {
    super.preUpdate()
  }
}
