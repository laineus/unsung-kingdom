import { evangelina } from '../event/evangelina'
export default {
  create (scene) {
    const queen = scene.map.getObjectById(3)
    evangelina(scene, queen)
  }
}
