import weapons from '../data/weapons'
import storage from '../data/storage'
export default weaponId => {
  const weapon = weapons.find(v => v.id === weaponId)
  if (!weapon) return false
  const id = storage.state.weapons.reduce((prev, current) => Math.max(prev, current.id), 0) + 1
  storage.state.weapons.push({ id, weapon_id: weapon.id })
  return weapon
}
