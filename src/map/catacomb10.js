import { renfield } from '../event/renfield'
export default {
  create (scene) {
    const ray = scene.map.getObjectById(2)
    renfield(scene, ray)
  }
}
