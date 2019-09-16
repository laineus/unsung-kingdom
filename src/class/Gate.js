import Area from './Area'
export default class Gate extends Area {
  constructor (scene, key, x, y, zone_x, zone_y, zone_width, zone_height) {
    super(scene, zone_x, zone_y, zone_width, zone_height)
    this.originalEvent = () => {
      scene.mapChange(key, x.toPixelCenter, y.toPixelCenter)
    }
    this.setEvent(this.originalEvent)
  }
  setBlocked (callback) {
    this.setEvent(callback || this.originalEvent)
    return this
  }
}
