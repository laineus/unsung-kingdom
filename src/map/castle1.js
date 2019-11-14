import config from '../data/config'
export default {
  area: {
    key: 'forest_all',
    x: 0, y: 0
  },
  create (scene) {
    scene.map.getObjectById(8).setEvent(async () => {
      scene.setEventMode(true)
      scene.player.stopWalk()
      await scene.ui.sleep(500)
      await scene.ui.transition(false, 'slow')
      scene.player.setPosition((49).toPixel, (29).toPixel)
      scene.camera.updateFollow()
      await scene.ui.sleep(500)
    })
  }
}
