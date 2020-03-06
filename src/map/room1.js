import { execChapterBeginEvents } from '../event/room'
export default {
  name: '王都 - 拠点',
  create (scene) {
    execChapterBeginEvents(scene)
  }
}
