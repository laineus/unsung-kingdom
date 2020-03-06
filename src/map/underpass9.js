import { hector } from '../event/aragnie'
export default {
  name: 'トロイア公爵邸の地下通路 - 王城への扉',
  create (scene) {
    hector(scene, scene.map.getObjectById(2), scene.map.getObjectById(3), scene.map.getObjectById(4))
  }
}
