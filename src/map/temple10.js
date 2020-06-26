import { lute } from '../event/lute'
export default {
  name: `${t('area.temple')} - ${t('areaSub.temple.e')}`,
  bgm: 'temple',
  battleBgm: 'temple',
  enemyLevel: 40,
  enemyGroups: [
    ['tree', 'tree'],
    ['bird', 'tree', 'bird'],
    ['thief', 'thief'],
    ['tree', 'thief']
  ],
  create (scene) {
    const poets = scene.map.getObjectById(2)
    const goddessLight = scene.map.getImageByName('megami2')
    lute(scene, poets, goddessLight)
  }
}
