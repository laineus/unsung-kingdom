// type
//   1: 剣
//   2: 槍
//   3: 斧
//   4: 杖
// ability
//   1: attack_all
//   2: heal
//   3: heal_all
//   4: counter
export default [
  { id: 1, name: t('weapon.1'), atk: 2, dex: 1, ability: null, effect: 'slash', icon: 'w1' },
  { id: 2, name: t('weapon.2'), atk: 2, agi: 1, ability: 2, effect: 'shot', icon: 'w11' },
  { id: 3, name: t('weapon.3'), atk: 4, def: 1, ability: 1, effect: 'slash', icon: 'w2' },
  { id: 4, name: t('weapon.4'), atk: 5, dex: 1, ability: null, effect: 'stab', icon: 'w8' },
  { id: 5, name: t('weapon.5'), atk: 6, def: 2, ability: 2, effect: 'slash', icon: 'w1' },
  { id: 6, name: t('weapon.6'), atk: 7, dex: 1, agi: 2, ability: 3, effect: 'shot', icon: 'w11' },
  { id: 7, name: t('weapon.7'), atk: 8, dex: 1, ability: 1, effect: 'crash', icon: 'w9' },
  { id: 8, name: t('weapon.8'), atk: 9, def: 1, agi: 1, ability: 2, effect: 'slash', icon: 'w3' },
  { id: 9, name: t('weapon.9'), atk: 10, def: 2, ability: 1, effect: 'slash', icon: 'w3' },
  { id: 10, name: t('weapon.10'), atk: 12, agi: -1, ability: null, effect: 'crash', icon: 'w10' },
  { id: 11, name: t('weapon.11'), atk: 12, ability: 1, effect: 'slash', icon: 'w4' },
  { id: 12, name: t('weapon.12'), atk: 10, dex: 4, ability: 2, effect: 'stab', icon: 'w8' },
  { id: 13, name: t('weapon.13'), atk: 13, agi: -1, ability: null, effect: 'slash', icon: 'w5' },
  { id: 14, name: t('weapon.14'), atk: 12, agi: 2, ability: 3, effect: 'shot', icon: 'w11' },
  { id: 15, name: t('weapon.15'), atk: 13, dex: 3, ability: 1, effect: 'slash', icon: 'w2' },
  { id: 16, name: t('weapon.16'), atk: 15, agi: -2, ability: null, effect: 'crash', icon: 'w10' },
  { id: 17, name: t('weapon.17'), atk: 14, def: 3, ability: 2, effect: 'slash', icon: 'w5' },
  { id: 18, name: t('weapon.18'), atk: 15, dex: 2, agi: 2, ability: null, effect: 'slash', icon: 'w6' },
  { id: 19, name: t('weapon.19'), atk: 20, ability: 1, effect: 'slash', icon: 'w7' }
]
