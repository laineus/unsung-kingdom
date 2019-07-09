import { dogEventHunter } from '../event/dogEvent'
export default {
  create (scene) {
    dogEventHunter(scene, scene.map.getObjectById(4))
  }
}
