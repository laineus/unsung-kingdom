import { appleCollection } from '../event/lute'
export default {
  create (scene) {
    Array.range(4, 9).forEach(id => appleCollection(scene, scene.map.getObjectById(id), `a8_${id}`))
  }
}
