import { execChapterBeginEvents } from '../event/room'
export default {
  area: {
    key: 'forest_all',
    x: 0, y: 0
  },
  create (scene) {
    execChapterBeginEvents(scene)
  }
}
