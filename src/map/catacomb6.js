export default {
  name: `${t('area.catacomb')} - ${t('areaSub.catacomb.e')}`,
  bgm: 'catacomb',
  enemyLevel: 24,
  enemyGroups: [
    ['ghost', 'ghost'],
    ['skull', 'ghost', 'skull'],
    ['spectre']
  ],
  create (scene) {
    const state = scene.storage.state
    const earned = state.treasures.includes('catacomb6_9')
    scene.map.treasures[0].removeTapEvent()
    const doorEv = scene.map.getObjectById(10)
    if (earned) {
      this.openDoor(scene)
    } else if (state.event.m3_4.completed) {
      doorEv.setTapEvent(async () => {
        await scene.talk([
          { chara: 'ann', text: t('mapEvent.catacomb6.door') }
        ])
        this.openDoor(scene)
        doorEv.destroy()
      })
    }
  },
  openDoor (scene) {
    const layer3 = scene.map.getLayerByName('layer3')
    const doorArea = [
      [14, 4],
      [15, 4],
      [16, 4],
      [14, 5],
      [15, 5],
      [16, 5]
    ]
    doorArea.forEach(data => {
      layer3.layer.data[data[1]][data[0]].index = -1
      layer3.layer.data[data[1]][data[0]].setCollision(false)
    })
    scene.map.treasures[0].setEvent()
  }
}
