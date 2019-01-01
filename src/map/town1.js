import Substance from '../class/Substance'
import Gate from '../class/Gate'
export default {
  create (scene) {
    // doorToRoom
    this.doorToRoom = new Substance(scene, (17).toPixelCenter, (34).toPixelCenter)
    this.doorToRoom.setEvent(() => scene.mapChange('room1', 18, 20))
    new Gate(scene, 'forest1', 45, 17, [0, 18, 1, 22])
  },
  update () {
    this.doorToRoom.update()
  }
}
