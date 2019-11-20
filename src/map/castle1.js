import { jack, king } from '../event/jack'
export default {
  area: {
    key: 'forest',
    x: 0, y: 0
  },
  create (scene) {
    jack(scene, scene.map.getObjectById(8), scene.map.getObjectById(10))
    king(scene, scene.map.getObjectById(9), scene.map.getObjectById(11))
  }
}
