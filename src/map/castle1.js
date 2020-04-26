import { jackEvent, kingEvent } from '../event/jack'
import { peaceful } from '../event/peaceful'
export default {
  name: '王城 - 中庭',
  create (scene) {
    const area1 = scene.map.getObjectById(8)
    const jack = scene.map.getObjectById(10)
    const area2 = scene.map.getObjectById(9)
    const king = scene.map.getObjectById(11)
    const soldier1 = scene.map.getObjectById(12)
    const soldier2 = scene.map.getObjectById(13)
    const soldier3 = scene.map.getObjectById(15)
    const kingbrother = scene.map.getObjectById(14)
    if (scene.storage.state.chapter === 0) {
      // cp0
      jackEvent(scene, area1, jack)
      kingEvent(scene, area2, king, soldier1, soldier3)
      kingbrother.destroy()
      soldier1.destroy()
    } else if (scene.storage.state.chapter === 5) {
      // cp5
      peaceful(scene, area1, area2, soldier1, soldier2, kingbrother)
      king.destroy()
      jack.destroy()
      soldier3.destroy()
    } else {
      [soldier1, soldier2, soldier3, king, jack, kingbrother].forEach(v => v.destroy())
    }
  }
}
