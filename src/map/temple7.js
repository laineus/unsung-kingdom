import { allsRight } from '../event/allsRight'
export default {
  create (scene) {
    const zi = scene.map.getObjectById(3).setRandomWalk(true)
    allsRight(scene, zi)
  }
}
