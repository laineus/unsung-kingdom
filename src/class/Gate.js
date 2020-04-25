import Area from './Area'
export default class Gate extends Area {
  constructor (scene, key, x, y, zoneX, zoneY, zoneWidth, zoneHeight) {
    super(scene, zoneX, zoneY, zoneWidth, zoneHeight)
    this.originalEvent = async () => {
      key === 'world' ? scene.ui.worldMap() : scene.mapChange(key, x.toPixelCenter, y.toPixelCenter)
    }
    this.setEvent(this.originalEvent)
  }
  setBlocked (callback) {
    this.setEvent(() => callback(this.originalEvent) || this.originalEvent)
    return this
  }
}
