import { aragnie } from '../event/aragnie'
export default {
  create (scene) {
    const boss = scene.map.getObjectById(3)
    const area = scene.map.getObjectById(5)
    const hector = scene.map.getObjectById(6)
    const hectorInjured = scene.map.getObjectById(7)
    const scream = scene.map.getObjectById(9)
    aragnie(scene, area, boss, hector, hectorInjured, scream)
  }
}
