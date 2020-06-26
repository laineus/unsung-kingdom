import { princess } from '../event/princess'
export default {
  name: `${t('area.underpass')} - ${t('areaSub.underpass.d')}`,
  bgm: 'underpass',
  create (scene) {
    princess(scene, scene.map.getObjectById(2), scene.map.getObjectById(3))
  }
}
