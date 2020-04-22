import { ethelbald } from '../event/dragonkiller'
export default {
  name: 'グリファルデ神殿 - 地下',
  enemyLevel: 35,
  enemyGroups: [
    ['thief', 'thief'],
    ['knight'],
    ['knight', 'knight']
  ],
  create (scene) {
    const ethel = scene.map.getObjectById(3)
    const soldiers = Array.range(4, 6).map(id => scene.map.getObjectById(id).setFaceKey('soldier'))
    ethelbald(scene, ethel, soldiers)
  }
}
