import { drystan } from '../event/drystan'
export default {
  area: {
    key: 'forest_all',
    x: 112, y: 112
  },
  create (scene) {
    drystan(scene, scene.map.getObjectById(3), scene.map.getObjectById(2))
  }
}
