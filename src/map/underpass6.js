import { orthrus } from '../event/moonshine'
export default {
  name: 'トロイア公爵邸の地下通路 - 番犬の間',
  bgm: 'underpass',
  create (scene) {
    const barrel = scene.map.getImageByName('barrel')
    orthrus(scene, scene.map.getObjectById(3), scene.map.getObjectById(4), barrel)
  }
}
