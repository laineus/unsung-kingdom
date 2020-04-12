import { dragon } from '../event/dragonkiller'
export default {
  name: 'グリファルデ神殿 - 最深部',
  enemyLevel: 24,
  enemyGroups: [
  ],
  create (scene) {
    const sonberk = scene.map.getObjectById(2)
    const king = scene.map.getObjectById(3)
    const area1 = scene.map.getObjectById(4)
    const area2 = scene.map.getObjectById(5)
    const area3 = scene.map.getObjectById(6)
    dragon(scene, sonberk, king, area1, area2, area3)
  }
}
