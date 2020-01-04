import { jack } from '../event/aragnie'
export default {
  area: {
    key: 'forest',
    x: 0, y: 0
  },
  create (scene) {
    jack(scene, scene.map.getObjectById(3), scene.map.getObjectById(4))
  }
}
