import { execChapterBeginEvents } from '../event/room'
export default {
  create (scene) {
    execChapterBeginEvents(scene)
  }
}
