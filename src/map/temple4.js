import { architect } from '../event/lorraine'
export default {
  create (scene) {
    const arct = scene.map.getObjectById(3).setRandomWalk(true)
    architect(scene, arct)
  }
}
