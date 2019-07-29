import { rexBear } from '../event/drystan'
export default {
  area: {
    key: 'forest_all',
    x: 550, y: 150
  },
  create (scene) {
    rexBear(scene, scene.map.getObjectById(3))
  }
}
