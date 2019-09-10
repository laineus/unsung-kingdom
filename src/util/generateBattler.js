import battlers from '../data/battlers'
export default (key, lv, increase = {}) => {
  const base = battlers.find(v => v.key === key)
  const addTimes = lv - base.lv
  return Object.assign(Object.assign({}, base), {
    lv,
    hp: base.hp + Math.floor(base.up.hp * addTimes / 20) + (increase.hp || 0),
    atk: base.atk + Math.floor(base.up.atk * addTimes / 100) + (increase.atk || 0),
    def: base.def + Math.floor(base.up.def * addTimes / 100) + (increase.def || 0),
    dex: base.dex + Math.floor(base.up.dex * addTimes / 100) + (increase.dex || 0),
    agi: base.agi + Math.floor(base.up.agi * addTimes / 100) + (increase.agi || 0)
  })
}
