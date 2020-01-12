import { doorEvent } from '../event/princess'
export default {
  area: {
    key: 'forest',
    x: 0, y: 0
  },
  create (scene) {
    const door = scene.map.getObjectById(4)
    door.setTapEvent(async () => scene.mapChange('underpass4', (16).toPixel, (16).toPixelCenter, { r: 'up' }))
    doorEvent(scene, door)
  }
}
