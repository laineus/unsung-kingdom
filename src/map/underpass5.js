import { dionysus } from '../event/moonshine'
import { wine } from '../event/cassandra'
export default {
  enemyLevel: 11,
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
    const layer4 = scene.map.getLayerByName('layer4')
    const btn = scene.map.getObjectById(9)
    btn.setEvent(async () => {
      layer4.layer.data[9][41].index = 20
      await scene.camera.look(0, 320, 1000)
      await scene.ui.sleep(100)
      Array(40, 41, 42).forEach(x => {
        layer4.layer.data[22][x].index = 79
        layer4.layer.data[22][x].setCollision(false)
      })
      await scene.ui.sleep(500)
      await scene.camera.look(0, -320, 1000)
      btn.destroy()
    })
  }
}
