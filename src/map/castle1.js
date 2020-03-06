import { jack, king } from '../event/jack'
export default {
  name: '王城 - 中庭',
  create (scene) {
    jack(scene, scene.map.getObjectById(8), scene.map.getObjectById(10))
    king(scene, scene.map.getObjectById(9), scene.map.getObjectById(11), scene.map.getObjectById(12), scene.map.getObjectById(13))
  }
}
