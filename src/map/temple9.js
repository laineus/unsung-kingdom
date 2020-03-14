import { calibur } from '../event/calibur'
export default {
  create (scene) {
    const nikke = scene.map.getObjectById(2)
    calibur(scene, nikke)
  }
}
