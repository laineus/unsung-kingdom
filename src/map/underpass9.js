import { hector } from '../event/aragnie'
export default {
  name: `${t('area.underpass')} - ${t('areaSub.underpass.i')}`,
  bgm: 'underpass',
  create (scene) {
    hector(scene, scene.map.getObjectById(2), scene.map.getObjectById(3), scene.map.getObjectById(4))
  }
}
