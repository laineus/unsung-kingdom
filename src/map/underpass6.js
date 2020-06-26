import { orthrus } from '../event/moonshine'
export default {
  name: `${t('area.underpass')} - ${t('areaSub.underpass.f')}`,
  bgm: 'underpass',
  create (scene) {
    const barrel = scene.map.getImageByName('barrel')
    orthrus(scene, scene.map.getObjectById(3), scene.map.getObjectById(4), barrel)
  }
}
