import { MANDRAKE_COUNT } from './drystan'
import { MAGIC_STONES } from './princess'
import { WATER_COUNT } from './marianne'
import { KELUNNE_COUNT } from './allsRight'

export default scene => {
  if (scene.storage.state.event.m1_3.count >= MANDRAKE_COUNT) {
    scene.tweetOnce(scene.jaquelyn, 'マンドレイクの根が集まったみたいね', 'mdrk')
  }
  if (scene.storage.state.event.m2_2.count >= MAGIC_STONES) {
    scene.tweetOnce(scene.francisca, 'カーバンクルの魔石が集まったね', 'mstn')
  }
  if (scene.storage.state.event.m3_2.count >= WATER_COUNT) {
    scene.tweetOnce(scene.francisca, '飲み水が十分に集まったね', 'wtr')
  }
  if (scene.storage.state.event.m4_3.count >= KELUNNE_COUNT) {
    scene.tweetOnce(scene.jaquelyn, 'ケルーネの羽根が集まったね', 'kln')
  }
}
