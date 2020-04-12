import { allsRight } from '../event/allsRight'
export default {
  name: 'グリファルデ神殿 - 2階',
  enemyLevel: 30,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird'],
    ['lizard'],
    ['lizard', 'lizard'],
    ['bird', 'lizard', 'bird']
  ],
  create (scene) {
    const zi = scene.map.getObjectById(3).setRandomWalk(true)
    allsRight(scene, zi)
  }
}
