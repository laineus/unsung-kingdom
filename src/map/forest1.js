import { dogEventFound } from '../event/dogEvent'
export default {
  name: `${t('area.forest')} - ${t('areaSub.forest.a')}`,
  bgm: 'forest',
  enemyLevel: 1,
  enemyGroups: [
    ['slime'],
    ['bee']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), 'd1')
    scene.ui.sleep(2000).then(() => {
      scene.tweetOnce(scene.player, t('tweet.fr1'), 'fr1')
    })
  }
}
