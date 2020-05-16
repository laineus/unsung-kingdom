import { princess } from '../event/princess'
export default {
  name: 'トロイア公爵邸の地下通路 - 小部屋',
  bgm: 'underpass',
  create (scene) {
    princess(scene, scene.map.getObjectById(2), scene.map.getObjectById(3))
  }
}
