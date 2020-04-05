import { dragon } from '../event/dragonkiller'
export default {
  create (scene) {
    const sonberk = scene.map.getObjectById(2)
    const king = scene.map.getObjectById(3)
    const area1 = scene.map.getObjectById(4)
    const area2 = scene.map.getObjectById(5)
    dragon(scene, sonberk, king, area1, area2)
  }
}
