export default {
  name: `${t('area.temple')} - ${t('areaSub.temple.a')}`,
  bgm: 'wind',
  enemyLevel: 32,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird']
  ],
  create (scene) {
    scene.ui.sleep(2000).then(() => {
      scene.tweetOnce(scene.jaquelyn, t('tweet.tm1'), 'tm1')
    })
  }
}
