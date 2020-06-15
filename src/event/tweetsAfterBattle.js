import { MANDRAKE_COUNT } from './drystan'
import { MAGIC_STONES } from './princess'
import { WATER_COUNT } from './marianne'
import { KELUNNE_COUNT } from './allsRight'

export default scene => {
  if (scene.storage.state.event.m1_3.count >= MANDRAKE_COUNT) {
    scene.tweetOnce(scene.jaquelyn, t('afterBattle.m1_3'), 'mdrk')
  }
  if (scene.storage.state.event.m2_2.count >= MAGIC_STONES) {
    scene.tweetOnce(scene.francisca, t('afterBattle.m2_2'), 'mstn')
  }
  if (scene.storage.state.event.m3_2.count >= WATER_COUNT) {
    scene.tweetOnce(scene.francisca, t('afterBattle.m3_2'), 'wtr')
  }
  if (scene.storage.state.event.m4_2.count >= KELUNNE_COUNT) {
    scene.tweetOnce(scene.jaquelyn, t('afterBattle.m4_2'), 'kln')
  }
}
