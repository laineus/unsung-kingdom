import weapons from '../data/weapons'
import storage from '../data/storage'
export default weaponId => {
  const weapon = weapons.find(v => v.id === weaponId)
  if (!weapon) return false
  const id = Math.max(...storage.state.weapons.map(v => v.id)) + 1
  storage.state.weapons.push({ id, weapon_id: weapon.id })
  return weapon
}
