import { marianne } from '../event/marianne'
export default {
  create (scene) {
    const sister = scene.map.getObjectById(2)
    marianne(scene, sister)
  }
}
