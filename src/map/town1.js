import Substance from '../class/Substance'
export default {
  create () {
    // doorToRoom
    this.doorToRoom = new Substance(this, (17).toPixel, (34).toPixel)
    this.doorToRoom.setEvent(() => {
      this.scene.get('UI').transition(() => {
        this.scene.start('Game', { map: 'room1', x: (18).toPixel, y: (20).toPixel })
      })
    })
  },
  update () {
    this.doorToRoom.update()
  }
}
