import { dragon } from '../event/dragonkiller'
export default {
  name: 'グリファルデ神殿 - 最深部',
  create (scene) {
    const sonberk = scene.map.getObjectById(2)
    sonberk.image.y += 55
    const king = scene.map.getObjectById(3)
    const area1 = scene.map.getObjectById(4)
    const area2 = scene.map.getObjectById(5)
    const area3 = scene.map.getObjectById(6)
    dragon(scene, sonberk, king, area1, area2, area3)
    const dragonScale = scene.map.getObjectById(7)
    if (scene.storage.state.chapter === 5 && !scene.storage.state.gimmicks.includes('temple15_7')) {
      dragonScale.setTapEvent(async () => {
        scene.storage.state.gimmicks.push('temple15_7')
        scene.ui.announce(t('gotItem', t('item.dragonScale')))
        dragonScale.destroy()
      })
    } else {
      dragonScale.destroy()
    }
  }
}
