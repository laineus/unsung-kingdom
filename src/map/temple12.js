import { ethelbald } from '../event/dragonkiller'
export default {
  create (scene) {
    const ethel = scene.map.getObjectById(3)
    ethelbald(scene, ethel)
  }
}
