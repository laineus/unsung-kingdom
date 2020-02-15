import { jack } from '../event/dario'
export default {
  create (scene) {
    const jk = scene.map.getObjectById(2)
    const area1 = scene.map.getObjectById(3)
    const area2 = scene.map.getObjectById(4)
    jack(scene, jk, area1, area2)
  }
}
