import { orthrus } from '../event/moonshine'
export default {
  name: 'トロイア公爵邸の地下通路 - 番犬の間',
  create (scene) {
    orthrus(scene, scene.map.getObjectById(3), scene.map.getObjectById(4))
  }
}
