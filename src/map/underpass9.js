import { hector } from '../event/aragnie'
export default {
  create (scene) {
    hector(scene, scene.map.getObjectById(2), scene.map.getObjectById(3), scene.map.getObjectById(4))
  }
}
