import { aragnie } from '../event/aragnie'
export default {
  create (scene) {
    const boss = scene.map.getObjectById(3)
    const area = scene.map.getObjectById(5)
    aragnie(scene, area, boss)
  }
}
