export default {
  name: 'グリファルデ神殿 - 入り口',
  bgm: 'temple',
  enemyLevel: 32,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird']
  ],
  create (scene) {
    scene.tweetOnce(scene.jaquelyn, '神殿の入り口に着いたわ', 'tm1')
  }
}
