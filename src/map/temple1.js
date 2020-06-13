export default {
  name: 'グリファルデ神殿 - 入り口',
  bgm: 'wind',
  enemyLevel: 32,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird']
  ],
  create (scene) {
    scene.ui.sleep(2000).then(() => {
      scene.tweetOnce(scene.jaquelyn, '神殿の入り口に着いたわ', 'tm1')
    })
  }
}
