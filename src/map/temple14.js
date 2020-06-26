import { gateConfirm } from '../event/dragonkiller'
export default {
  name: `${t('area.temple')} - ${t('areaSub.temple.f')}`,
  enemyLevel: 44,
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
