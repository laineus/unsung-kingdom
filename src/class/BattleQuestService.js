import storage from '../data/storage'
import { MANDRAKE_COUNT } from '../event/drystan'
const event = storage.state.event
export default class BattleQuestService {
  constructor (group) {
    this.group = group
  }
  getResult () {
    const list = []
    list.push(this.m1_3())
    return list.filter(v => v)
  }
  collection (target, chance = 100) {
    return this.group.filter(v => {
      return v.key === target && Math.chance(chance)
    }).length
  }
  m1_3 () {
    if (event.m1_3.completed || !event.m1_3.started) return
    const result = this.collection('mandrake', 66)
    if (!result) return
    event.m1_3.count += result
    return `マンドレイクの根を${result}個獲得！（${event.m1_3.count}/${MANDRAKE_COUNT}）`
  }
}
