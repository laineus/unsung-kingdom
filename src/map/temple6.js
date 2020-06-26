export default {
  name: `${t('area.temple')} - ${t('areaSub.temple.d')}`,
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
          { chara: 'ann', text: t('mapEvent.temple6.statue') }
        ])
        const i = await scene.select([t('mapEvent.temple6.option.0'), t('mapEvent.temple6.option.1')])
        if (i !== 0) return
        scene.storage.state.gimmicks.push('temple6_13')
        treasure.setVisible(true)
        statue.removeTapEvent()
        scene.player.tweet('♪')
      }).setCheckableDistance(70)
    }
  }
}
