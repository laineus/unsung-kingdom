import { dionysus } from '../event/moonshine'
import { wine } from '../event/cassandra'
export default {
  name: `${t('area.underpass')} - ${t('areaSub.underpass.e')}`,
  bgm: 'underpass',
  enemyLevel: 14,
  enemyGroups: [
    ['goblin', 'goblin'],
    ['carbuncle', 'carbuncle'],
    ['gargoyle', 'gargoyle'],
    ['succubus']
  ],
  create (scene) {
    dionysus(scene, scene.map.getObjectById(3), scene.map.getObjectById(4), scene.map.getObjectById(2))
    wine(scene, scene.map.getObjectById(5), 2)
    wine(scene, scene.map.getObjectById(8), 3)
    const btn = scene.map.getObjectById(9)
    if (scene.storage.state.gimmicks.includes('unserpass4_9')) {
      this.openNeedle(scene, false)
      btn.destroy()
    } else {
      btn.setEvent(async () => {
        scene.storage.state.gimmicks.push('unserpass4_9')
        await this.openNeedle(scene, true)
        btn.destroy()
      })
    }
  },
  async openNeedle (scene, event) {
    const layer4 = scene.map.getLayerByName('layer4')
    layer4.layer.data[9][41].index = 20
    if (event) await scene.ui.sleep(500)
    if (event) await scene.camera.look((41).toPixelCenter, (22).toPixelCenter, 1000)
    if (event) await scene.ui.sleep(100)
    const xList = [40, 41, 42]
    xList.forEach(x => {
      layer4.layer.data[22][x].index = 79
      layer4.layer.data[22][x].setCollision(false)
    })
    if (event) await scene.ui.sleep(500)
    if (event) await scene.camera.revert(1000)
  }
}
