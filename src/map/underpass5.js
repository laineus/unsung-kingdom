import { dionysus } from '../event/moonshine'
export default {
  area: {
    key: 'forest',
    x: 0, y: 0
  },
  create (scene) {
    dionysus(scene, scene.map.getObjectById(3), scene.map.getObjectById(4), scene.map.getObjectById(2))
  }
}
