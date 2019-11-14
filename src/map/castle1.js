import config from '../data/config'
export default {
  area: {
    key: 'forest_all',
    x: 0, y: 0
  },
  create (scene) {
    const jack = scene.map.getObjectById(10)
    const king = scene.map.getObjectById(11)
    jack.setVisible(false)
    king.setVisible(false)
    scene.map.getObjectById(8).setEvent(async () => {
      scene.setEventMode(true)
      scene.player.stopWalk()
      await scene.ui.sleep(500)
      await scene.ui.transition(false, 'slow')
      scene.player.setPosition((50).toPixel, (29).toPixel)
      scene.camera.updateFollow()
      await scene.ui.sleep(500)
      scene.camera.followPlayer(false)
      await scene.camera.move(-10, -200, 1000)
      await scene.ui.sleep(2500)
      scene.camera.followPlayer(true, true)
      console.log(1)
      scene.setEventMode(false)
    })
  }
}
