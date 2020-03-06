import { drystan } from '../event/drystan'
export default {
  name: 'ワルコフォレンスの森 - 賢人の家',
  create (scene) {
    drystan(scene, scene.map.getObjectById(3), scene.map.getObjectById(2))
  }
}
