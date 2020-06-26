import { rexBear } from '../event/drystan'
export default {
  name: `${t('area.forest')} - ${t('areaSub.forest.d')}`,
  bgm: 'forest',
  create (scene) {
    rexBear(scene, scene.map.getObjectById(4), scene.map.getObjectById(3))
  }
}
