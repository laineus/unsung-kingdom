import townChapter0 from '../event/townChapter0'
import townChapter1 from '../event/townChapter1'
const events = [
  townChapter0,
  townChapter1
]
export default {
  area: {
    key: 'forest',
    x: 0, y: 0
  },
  create (scene) {
    scene.map.getObjectById(6).setTapEvent(async () => scene.mapChange('room1', (17).toPixel, (16).toPixelCenter, { r: 'up' }))
    const amber = scene.map.getObjectById(2).setDisplayName('噂好きなアンバー婦人').setRandomWalk(true)
    const elliott = scene.map.getObjectById(7).setDisplayName('卑劣なエリオット')
    const max = scene.map.getObjectById(8).setDisplayName('賞金稼ぎのマックス').setRandomWalk(true)
    const annabelle = scene.map.getObjectById(9).setDisplayName('宿屋のアナベル')
    const matilda = scene.map.getObjectById(10).setDisplayName('内気なマチルダ').setRandomWalk(true)
    const maison = scene.map.getObjectById(11).setDisplayName('メイソン').destroy()
    const area1 = scene.map.getObjectById(12)
    events[scene.storage.state.chapter](scene, { amber, elliott, max, annabelle, matilda, maison, area1 })
  }
}
