import storage from '../data/storage'
import BattlerSummary from './BattlerSummary'
import { slideIn, slideOut } from '../util/animations'
const Y = 34
export default class BattlerSummaryService {
  constructor (scene) {
    this.scene = scene
    this.summaries = storage.state.battlers.map((_, i) => {
      const s = new BattlerSummary(scene, 100 + (i * 140), Y.byBottom + 80, i)
      s.alpha = 0
      scene.add.existing(s)
      return s
    })
    this.delay = 0
  }
  update () {
    if (this.delay > 0) {
      this.delay--
      if (this.delay === 0) {
        this.hide()
      }
    }
  }
  reload () {
    this.summaries.forEach(s => s.reload())
  }
  resetPosition () {
    this.summaries.forEach(v => (v.y = Y.byBottom))
  }
  show () {
    const update = this.delay > 0
    this.delay = 160
    this.reload()
    if (update) return
    this.resetPosition()
    slideIn(this.scene, this.summaries, { x: 0, y: 80 })
  }
  hide () {
    this.resetPosition()
    slideOut(this.scene, this.summaries, { x: 0, y: 80, destroy: false })
  }
}
