import dogEvent from './dogEvent'
export default {
  create (scene) {
    dogEvent(scene, scene.map.getObjectById(3), '3')
    const flower = scene.map.getObjectById(4)
    if (scene.storage.state.event.mercenary.solved) {
      flower.destroy()
    } else {
      flower.setDisplayName('？').setTapEvent().on('tap', async chara => {
        if (!scene.storage.state.event.mercenary.started) {
          scene.talk([{ chara: 'francisca', text: '何この花。へんなの。' }])
        } else {
          await scene.ui.battle(['torrent'])
          scene.talk([{ chara: 'francisca', text: '倒した' }])
          scene.storage.state.event.mercenary.solved = true
        }
      })
    }
  }
}
