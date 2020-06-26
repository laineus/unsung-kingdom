import { drystan } from '../event/drystan'
export default {
  name: `${t('area.forest')} - ${t('areaSub.forest.i')}`,
  bgm: 'forest',
  create (scene) {
    drystan(scene, scene.map.getObjectById(3), scene.map.getObjectById(2))
  }
}
