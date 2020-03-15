import { calibur } from '../event/calibur'
export default {
  create (scene) {
    const sword = scene.map.getObjectById(3)
    const nikke = scene.map.getObjectById(2)
    calibur(scene, sword, nikke)
  }
}
