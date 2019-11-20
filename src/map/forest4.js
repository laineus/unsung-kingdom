import { rexBear } from '../event/drystan'
export default {
  area: {
    key: 'forest',
    x: 550, y: 150
  },
  create (scene) {
    rexBear(scene, scene.map.getObjectById(4), scene.map.getObjectById(3))
  }
}
