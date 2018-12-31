import Substance from '../class/Substance'
import Gate from '../class/Gate'
export default {
  create () {
    // doorToRoom
    this.doorToRoom = new Substance(this, (17).toPixelCenter, (34).toPixelCenter)
    this.doorToRoom.setEvent(() => this.mapChange('room1', 18, 20))
    new Gate(this, [0, 18, 1, 22], 'forest1', [45, 17])
  },
  update () {
    this.doorToRoom.update()
  }
}
