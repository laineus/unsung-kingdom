import { jack } from '../event/aragnie'
export default {
  name: `${t('area.underpass')} - ${t('areaSub.underpass.h')}`,
  bgm: 'underpass',
  enemyLevel: 17,
  enemyGroups: [
    ['gargoyle', 'gargoyle'],
    ['gargoyle', 'gargoyle', 'gargoyle'],
    ['succubus'],
    ['succubus', 'succubus']
  ],
  create (scene) {
    jack(scene, scene.map.getObjectById(3), scene.map.getObjectById(4))
    const fire = scene.map.getObjectById(5)
    if (scene.storage.state.gimmicks.includes('unserpass8_5')) {
      this.openNeedle(scene, false)
      fire.destroy()
    } else {
      fire.setTapEvent(async () => {
        scene.storage.state.gimmicks.push('unserpass8_5')
        await scene.talk([
          { chara: 'ann', text: t('mapEvent.underpass8.candle') }
        ])
        await scene.ui.sleep(500)
        await scene.player.setTargetPosition((28).toPixelCenter, (40).toPixelCenter)
        scene.player.setR('right')
        await scene.ui.sleep(1000)
        await scene.player.setTargetPosition((26).toPixelCenter, (40).toPixelCenter)
        scene.player.setR('left')
        await scene.ui.sleep(500)
        await this.openNeedle(scene, true)
        fire.destroy()
      })
    }
  },
  async openNeedle (scene, event) {
    const layer4 = scene.map.getLayerByName('layer4')
    layer4.layer.data[40][25].index = 59
    scene.map.getLight((25).toPixelCenter, (40).toPixelCenter, 0xff6600)
    if (event) await scene.ui.sleep(500)
    if (event) await scene.camera.look((11).toPixelCenter, (26).toPixelCenter, 1000)
    if (event) await scene.ui.sleep(100)
    const yList = [23, 24, 25, 26, 27, 28]
    yList.forEach(y => {
      layer4.layer.data[y][11].index = 79
      layer4.layer.data[y][11].setCollision(false)
    })
    if (event) await scene.ui.sleep(500)
    if (event) await scene.camera.revert(1000)
  }
}
