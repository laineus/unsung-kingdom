import { renfield } from '../event/renfield'
export default {
  create (scene) {
    const ray = scene.map.getObjectById(2)
    const spectres = (5).toArray().map(i => scene.map.getObjectById(i + 3))
    renfield(scene, ray, spectres)
  }
}
