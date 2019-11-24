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
    scene.map.getObjectById(6).setTapEvent().on('tap', () => scene.mapChange('room1', (17).toPixel, (16).toPixelCenter))
    const amber = scene.map.getObjectById(2).setDisplayName('噂好きなアンバー婦人').setTapEvent().setFaceKey('amber').setRandomWalk(true)
    const elliott = scene.map.getObjectById(7).setDisplayName('卑劣なエリオット').setTapEvent().setFaceKey('elliott')
    const max = scene.map.getObjectById(8).setDisplayName('賞金稼ぎのマックス').setTapEvent().setFaceKey('max').setRandomWalk(true)
    const annabelle = scene.map.getObjectById(9).setDisplayName('宿屋のアナベル').setTapEvent()
    const matilda = scene.map.getObjectById(10).setDisplayName('内気なマチルダ').setTapEvent().setRandomWalk(true)
    const maison = scene.map.getObjectById(11).setDisplayName('メイソン').setTapEvent()
    events[scene.storage.state.chapter](scene, { amber, elliott, max, annabelle, matilda, maison })
  }
}
