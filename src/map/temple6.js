export default {
  name: 'グリファルデ神殿 - 2階',
  bgm: 'temple',
  battleBgm: 'temple',
  enemyLevel: 37,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird'],
    ['lizard'],
    ['lizard', 'lizard'],
    ['bird', 'lizard', 'bird']
  ],
  create (scene) {
    const treasure = scene.map.getObjectById(2)
    const statue = scene.map.getObjectById(13)
    if (!scene.storage.state.gimmicks.includes('temple6_13')) {
      treasure.setVisible(false)
      statue.setTapEvent(async () => {
        await scene.talk([
          { chara: 'ann', text: '台座に仕掛けがある！' }
        ])
        const i = await scene.select(['仕掛けを動かす', '何もしない'])
        if (i !== 0) return
        scene.storage.state.gimmicks.push('temple6_13')
        treasure.setVisible(true)
        statue.removeTapEvent()
        scene.player.tweet('♪')
      }).setCheckableDistance(70)
    }
  }
}
