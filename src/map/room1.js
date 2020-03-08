import { execChapterBeginEvents } from '../event/room'
export default {
  name: '王都 - 拠点',
  create (scene) {
    execChapterBeginEvents(scene)
    scene.map.getObjectById(11).setEvent(async () => {
      scene.francisca.setTarget(scene.player)
      scene.jaquelyn.setTarget(scene.player)
    }, false)
  }
}
