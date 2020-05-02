import { drystan } from '../event/drystan'
export default {
  name: 'ワルコフォレンスの森 - 賢人の家',
  bgm: 'forest',
  create (scene) {
    drystan(scene, scene.map.getObjectById(3), scene.map.getObjectById(2))
  }
}
