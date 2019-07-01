import Substance from '../class/Substance'
export default {
  create (scene) {
    // doorToRoom
    this.doorToRoom = new Substance(scene, (17).toPixelCenter, (34).toPixelCenter)
    this.doorToRoom.setTapEvent().on('tap', () => scene.mapChange('room1', 18, 20))
  },
  update () {
    this.doorToRoom.update()
  }
}
