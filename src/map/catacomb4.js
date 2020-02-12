import { dario } from '../event/dario'
export default {
  create (scene) {
    const dr = scene.map.getObjectById(5)
    dario(scene, dr)
  }
}
