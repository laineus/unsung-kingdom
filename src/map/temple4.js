import { architect } from '../event/lorraine'
export default {
  name: 'グリファルデ神殿 - 中央部',
  create (scene) {
    const arct = scene.map.getObjectById(3).setRandomWalk(true)
    architect(scene, arct)
  }
}
