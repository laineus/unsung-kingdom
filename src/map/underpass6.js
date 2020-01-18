import { orthrus } from '../event/moonshine'
export default {
  create (scene) {
    orthrus(scene, scene.map.getObjectById(3), scene.map.getObjectById(4))
  }
}
