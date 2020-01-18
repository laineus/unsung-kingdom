import { princess } from '../event/princess'
export default {
  create (scene) {
    princess(scene, scene.map.getObjectById(2), scene.map.getObjectById(3))
  }
}
