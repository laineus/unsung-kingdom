import { jackEvent, kingEvent } from '../event/jack'
export default {
  name: '王城 - 中庭',
  create (scene) {
    const area1 = scene.map.getObjectById(8)
    const jack = scene.map.getObjectById(10)
    const area2 = scene.map.getObjectById(9)
    const king = scene.map.getObjectById(11)
    const soldier1 = scene.map.getObjectById(12)
    const soldier2 = scene.map.getObjectById(13)
    // cp0
    jackEvent(scene, area1, jack)
    kingEvent(scene, area2, king, soldier1, soldier2)
  }
}
