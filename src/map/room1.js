import { execChapterBeginEvents } from '../event/room'
import storage from '../data/storage'
export default {
  name: `${t('area.town')} - ${t('areaSub.room')}`,
  get bgm () {
    return storage.state.chapter === 4 ? 'rain' : 'town'
  },
  sceneVolume: 0.3,
  create (scene) {
    scene.storage.state.battlers.forEach(v => v.hp = v.max_hp)
    const book = scene.map.getObjectById(13)
    execChapterBeginEvents(scene, book)
    scene.map.getObjectById(11).setEvent(async () => {
      scene.francisca.setTarget(scene.player)
      scene.jaquelyn.setTarget(scene.player)
    }, false)
    const tw = scene.map.getObjectById(12).setEvent(async () => {
      Math.chance(50) ? scene.francisca.tweet(t('mapEvent.room1.bed.0')) : scene.jaquelyn.tweet(t('mapEvent.room1.bed.1'))
      tw.destroy()
    }, false)
  }
}
