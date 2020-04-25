import { gateConfirm } from '../event/dragonkiller'
export default {
  name: 'グリファルデ神殿 - 地下',
  enemyLevel: 37,
  enemyGroups: [
    ['thief', 'thief'],
    ['thief', 'thief', 'thief'],
    ['knight'],
    ['knight', 'knight']
  ],
  create (scene) {
    const gate = scene.map.getObjectById(7)
    gateConfirm(scene, gate)
  }
}
