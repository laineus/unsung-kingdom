export default {
  name: '聖アンテルスの墓地 - 入口',
  bgm: 'catacomb',
  enemyLevel: 20,
  enemyGroups: [
    ['phantom'],
    ['phantom', 'phantom'],
    ['skull'],
    ['skull', 'skull']
  ],
  create (scene) {
    const soldier = scene.map.getObjectById(11)
    soldier.setDisplayName(t('chara.guard')).setTapEvent(async chara => {
      await scene.talk([
        { chara, text: t('mapEvent.catacomb1.guard.0') },
        { chara, text: t('mapEvent.catacomb1.guard.1') }
      ])
    })
    scene.ui.sleep(2000).then(() => {
      scene.tweetOnce(scene.player, t('tweet.ct1'), 'ct1')
    })
  }
}
