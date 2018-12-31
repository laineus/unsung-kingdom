import Substance from '../class/Substance'
export default {
  create () {
    // doorToRoom
    this.doorToRoom = new Substance(this, (17).toPixelCenter, (34).toPixelCenter)
    this.doorToRoom.setEvent(() => {
      this.scene.get('UI').transition(() => {
        this.scene.start('Game', { map: 'room1', x: (18).toPixelCenter, y: (20).toPixelCenter })
      })
    })
  },
  update () {
    this.doorToRoom.update()
  }
}
