import { lute } from '../event/lute'
export default {
  create (scene) {
    const poets = scene.map.getObjectById(2)
    lute(scene, poets)
  }
}
