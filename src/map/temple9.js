import { calibur } from '../event/calibur'
import { appleCollection } from '../event/lute'
export default {
  name: `${t('area.temple')} - ${t('areaSub.temple.e')}`,
  bgm: 'temple',
  battleBgm: 'temple',
  enemyLevel: 39,
  enemyGroups: [
    ['tree', 'tree'],
    ['bird', 'tree', 'bird'],
    ['thief']
  ],
  create (scene) {
    const sword = scene.map.getObjectById(3)
    const nikke = scene.map.getObjectById(2)
    calibur(scene, sword, nikke)
    Array.range(4, 5).forEach(id => appleCollection(scene, scene.map.getObjectById(id), `a9_${id}`))
    this.sword = sword
  },
  update (scene) {
    if (scene.storage.state.event.m4_3.started && this.sword.active && this.sword.distanceToPlayer < 180) {
      scene.tweetOnce(scene.francisca, t('tweet.clbr'), 'clbr')
    }
  }
}
