import Substance from '../class/Substance'
export default {
  gates: [{ key: 'forest1', x: 45, y: 17, area: [0, 18, 1, 22] }],
  create (scene) {
    // doorToRoom
    this.doorToRoom = new Substance(scene, (17).toPixelCenter, (34).toPixelCenter)
    this.doorToRoom.setEvent(() => scene.mapChange('room1', 18, 20))
  },
  update () {
    this.doorToRoom.update()
  }
}
