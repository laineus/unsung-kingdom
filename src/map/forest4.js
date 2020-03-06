import { rexBear } from '../event/drystan'
export default {
  name: 'ワルコフォレンスの森 - 広場',
  create (scene) {
    rexBear(scene, scene.map.getObjectById(4), scene.map.getObjectById(3))
  }
}
