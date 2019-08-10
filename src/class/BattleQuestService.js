export default class BattleQuestService {
  constructor (group) {
    this.group = group
  }
  getResult () {
    const list = []
    list.push(this.m1_3())
    return list.filter(v => v)
  }
  m1_3 () {
    return 'マンドレイクの根を2個獲得！（2/12）'
  }
}