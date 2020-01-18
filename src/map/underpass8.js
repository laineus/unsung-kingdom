import { jack } from '../event/aragnie'
export default {
  create (scene) {
    jack(scene, scene.map.getObjectById(3), scene.map.getObjectById(4))
  }
}
