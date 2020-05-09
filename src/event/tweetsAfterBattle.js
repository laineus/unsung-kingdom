import { MANDRAKE_COUNT } from './drystan'
import { MAGIC_STONES } from './princess'

export default scene => {
  if (scene.storage.state.event.m1_3.count >= MANDRAKE_COUNT) {
    scene.tweetOnce(scene.jaquelyn, 'マンドレイクの根が集まったみたいね', 'mandrake')
  } else if (scene.storage.state.event.m2_2.count >= MAGIC_STONES) {
    scene.tweetOnce(scene.francisca, 'カーバンクルの魔石が集まったね', 'mandrake')
  }
}
