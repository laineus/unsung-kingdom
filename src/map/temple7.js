import { allsRight } from '../event/allsRight'
export default {
  name: 'グリファルデ神殿 - 2階',
  enemyLevel: 24,
  enemyGroups: [
  ],
  create (scene) {
    const zi = scene.map.getObjectById(3).setRandomWalk(true)
    allsRight(scene, zi)
  }
}
