import { jack } from '../event/dario'
export default {
  create (scene) {
    const area = scene.map.getObjectById(0) // TODO
    const jk = scene.map.getObjectById(2)
    jack(scene, area, jk)
  }
}
