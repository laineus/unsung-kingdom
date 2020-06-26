import { ethelbald } from '../event/dragonkiller'
export default {
  name: `${t('area.temple')} - ${t('areaSub.temple.f')}`,
  enemyLevel: 42,
  enemyGroups: [
    ['thief', 'thief'],
    ['knight'],
    ['knight', 'knight']
  ],
  create (scene) {
    const ethel = scene.map.getObjectById(3)
    const gate = scene.map.getObjectById(2)
    const soldiers = Array.range(4, 6).map(id => scene.map.getObjectById(id).setFaceKey('soldier'))
    ethelbald(scene, ethel, soldiers, gate)
    scene.map.getObjectById(7).setEvent(async () => {
      scene.tweetOnce(scene.player, '！', 'tm12')
    }, false)
  }
}
