import Substance from '../class/Substance'
export default {
  create () {
    // doorToRoom
    this.doorToRoom = new Substance(this, (17).toPixel, (34).toPixel)
    this.doorToRoom.setTalk()
  },
  update () {
    this.doorToRoom.update()
  }
}
