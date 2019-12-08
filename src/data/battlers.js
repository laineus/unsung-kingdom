export default [
  {
    key: 'ann', name: 'Ann', lv: 1, effect: 'hit',
    hp: 80, atk: 4, def: 3, dex: 3, agi: 2,
    up: { hp: 100, atk: 100, def: 90, dex: 70, agi: 70 }
  },
  {
    key: 'francisca', name: 'Francisca', lv: 1, effect: 'hit',
    hp: 70, atk: 3, def: 2, dex: 3, agi: 4,
    up: { hp: 85, atk: 85, def: 75, dex: 100, agi: 85 }
  },
  {
    key: 'jaquelyn', name: 'Jaquelyn', lv: 1, effect: 'hit',
    hp: 75, atk: 2, def: 2, dex: 4, agi: 4,
    up: { hp: 90, atk: 75, def: 80, dex: 85, agi: 100 }
  },
  {
    key: 'bee', name: 'ビーストビー', lv: 1, effect: 'shot',
    hp: 16, atk: 4, def: 1, dex: 3, agi: 4,
    up: { hp: 70, atk: 90, def: 50, dex: 70, agi: 80 },
    dropWeapon: { id: 4, chance: 3 },
  },
  {
    key: 'bee2', name: 'ビーストビー', lv: 1, effect: 'shot',
    hp: 18, atk: 3, def: 1, dex: 4, agi: 5,
    up: { hp: 80, atk: 80, def: 50, dex: 80, agi: 90 },
    dropWeapon: { id: 4, chance: 3 },
  },
  {
    key: 'slime', name: 'ベニクス', lv: 1, effect: 'hit',
    hp: 24, atk: 3, def: 4, dex: 2, agi: 2,
    up: { hp: 100, atk: 80, def: 95, dex: 50, agi: 50 },
    dropWeapon: { id: 1, chance: 5 },
  },
  {
    key: 'mandrake', name: 'マンドレイク', lv: 1, effect: 'crash',
    hp: 21, atk: 3, def: 4, dex: 4, agi: 2,
    up: { hp: 90, atk: 70, def: 90, dex: 80, agi: 60 },
    dropWeapon: { id: 2, chance: 5 },
  },
  {
    key: 'wolf', name: 'ヴォルフェス', lv: 1, effect: 'scratch',
    hp: 28, atk: 3, def: 2, dex: 4, agi: 5,
    up: { hp: 100, atk: 80, def: 60, dex: 80, agi: 100 },
    dropWeapon: { id: 3, chance: 4 },
  },
  {
    key: 'flower', name: 'サニズマスク', lv: 1, effect: 'hit',
    hp: 35, atk: 8, def: 6, dex: 4, agi: 5,
    up: { hp: 100, atk: 90, def: 90, dex: 70, agi: 70 }
  },
  {
    key: 'bear', name: 'レックスベア', lv: 1, effect: 'scratch',
    hp: 40, atk: 4, def: 4, dex: 2, agi: 2,
    up: { hp: 100, atk: 100, def: 85, dex: 75, agi: 75 }
  }
]
