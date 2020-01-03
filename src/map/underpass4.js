import { princess } from '../event/princess'
export default {
  area: {
    key: 'forest',
    x: 0, y: 0
  },
  create (scene) {
    princess(scene, scene.map.getObjectById(2), scene.map.getObjectById(3))
  }
}
