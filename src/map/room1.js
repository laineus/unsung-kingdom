import { execChapterBeginEvents } from '../event/room'
import storage from '../data/storage'
export default {
  name: '王都 - 拠点',
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
      Math.chance(50) ? scene.francisca.tweet('早く出発しよう') : scene.jaquelyn.tweet('アン、眠たいの？')
      tw.destroy()
    }, false)
  }
}
