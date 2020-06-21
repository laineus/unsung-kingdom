export default [
  {
    key: 'ann', name: 'Ann', lv: 1, effect: 'hit',
    hp: 40, atk: 4, def: 3, dex: 3, agi: 2,
    up: { hp: 100, atk: 100, def: 90, dex: 70, agi: 70 }
  },
  {
    key: 'francisca', name: 'Francisca', lv: 1, effect: 'hit',
    hp: 30, atk: 2, def: 2, dex: 4, agi: 4,
    up: { hp: 85, atk: 75, def: 80, dex: 90, agi: 100 }
  },
  {
    key: 'jaquelyn', name: 'Jaquelyn', lv: 1, effect: 'hit',
    hp: 35, atk: 3, def: 2, dex: 3, agi: 4,
    up: { hp: 90, atk: 85, def: 75, dex: 100, agi: 85 }
  },
  {
    key: 'jack', name: t('battler.jack'), lv: 1, effect: 'slash', y: 70,
    hp: 50, atk: 4, def: 2, dex: 3, agi: 4,
    up: { hp: 90, atk: 100, def: 70, dex: 70, agi: 90 },
    abillities: [{ type: 'double', chance: 60 }],
    dropWeapon: { id: 15, chance: 100 }
  },
  {
    key: 'bee', name: t('battler.bee'), lv: 1, effect: 'shot',
    hp: 16, atk: 4, def: 1, dex: 3, agi: 4,
    up: { hp: 70, atk: 90, def: 50, dex: 70, agi: 80 },
    dropWeapon: { id: 4, chance: 3 }
  },
  {
    key: 'bee2', name: t('battler.bee2'), lv: 1, effect: 'shot',
    hp: 18, atk: 3, def: 1, dex: 4, agi: 5,
    up: { hp: 80, atk: 80, def: 50, dex: 80, agi: 90 },
    dropWeapon: { id: 4, chance: 3 }
  },
  {
    key: 'slime', name: t('battler.slime'), lv: 1, effect: 'hit',
    hp: 24, atk: 3, def: 4, dex: 2, agi: 2,
    up: { hp: 100, atk: 80, def: 95, dex: 50, agi: 50 },
    dropWeapon: { id: 1, chance: 3 }
  },
  {
    key: 'mandrake', name: t('battler.mandrake'), lv: 1, effect: 'crash',
    hp: 21, atk: 3, def: 4, dex: 4, agi: 2,
    up: { hp: 90, atk: 70, def: 90, dex: 80, agi: 60 },
    dropWeapon: { id: 2, chance: 3 }
  },
  {
    key: 'wolf', name: t('battler.wolf'), lv: 1, effect: 'scratch',
    hp: 28, atk: 3, def: 2, dex: 4, agi: 5,
    up: { hp: 100, atk: 80, def: 60, dex: 80, agi: 100 },
    dropWeapon: { id: 3, chance: 3 }
  },
  {
    key: 'flower', name: t('battler.flower'), lv: 1, effect: 'hit',
    hp: 35, atk: 4, def: 3, dex: 3, agi: 4,
    up: { hp: 100, atk: 90, def: 85, dex: 70, agi: 70 }
  },
  {
    key: 'bear', name: t('battler.bear'), lv: 1, effect: 'scratch',
    hp: 40, atk: 4, def: 4, dex: 2, agi: 2,
    abillities: [{ type: 'multi', chance: 50 }],
    up: { hp: 100, atk: 100, def: 85, dex: 75, agi: 65 }
  },
  {
    key: 'goblin', name: t('battler.goblin'), lv: 1, effect: 'crash',
    hp: 24, atk: 3, def: 4, dex: 2, agi: 2,
    up: { hp: 100, atk: 80, def: 95, dex: 50, agi: 50 },
    dropWeapon: { id: 5, chance: 3 }
  },
  {
    key: 'goblin2', name: t('battler.goblin2'), lv: 1, effect: 'crash',
    hp: 24, atk: 3, def: 4, dex: 3, agi: 3,
    up: { hp: 100, atk: 80, def: 95, dex: 50, agi: 50 },
    abillities: [{ type: 'double', chance: 30 }]
  },
  {
    key: 'carbuncle', name: t('battler.carbuncle'), lv: 1, effect: 'shot',
    hp: 21, atk: 3, def: 2, dex: 4, agi: 5,
    up: { hp: 80, atk: 80, def: 60, dex: 80, agi: 100 },
    dropWeapon: { id: 6, chance: 3 }
  },
  {
    key: 'orthrus', name: t('battler.orthrus'), lv: 1, effect: 'scratch',
    hp: 50, atk: 5, def: 3, dex: 3, agi: 4,
    abillities: [{ type: 'double', chance: 25 }],
    up: { hp: 100, atk: 95, def: 70, dex: 70, agi: 80 }
  },
  {
    key: 'gargoyle', name: t('battler.gargoyle'), lv: 1, effect: 'hit',
    hp: 40, atk: 3, def: 6, dex: 3, agi: 3,
    up: { hp: 90, atk: 75, def: 90, dex: 70, agi: 70 },
    dropWeapon: { id: 7, chance: 3 }
  },
  {
    key: 'succubus', name: t('battler.succubus'), lv: 1, effect: 'stab', y: 100,
    hp: 35, atk: 4, def: 4, dex: 3, agi: 4,
    up: { hp: 80, atk: 75, def: 80, dex: 70, agi: 75 },
    dropWeapon: { id: 8, chance: 3 }
  },
  {
    key: 'aragnie', name: t('battler.aragnie'), lv: 1, effect: 'shot',
    hp: 60, atk: 4, def: 6, dex: 4, agi: 3,
    abillities: [{ type: 'double', chance: 70 }, { type: 'multi', chance: 30 }],
    up: { hp: 100, atk: 80, def: 90, dex: 70, agi: 60 },
    dropWeapon: { id: 9, chance: 100 }
  },
  {
    key: 'phantom', name: t('battler.phantom'), lv: 1, effect: 'stab',
    hp: 20, atk: 3, def: 3, dex: 3, agi: 5,
    up: { hp: 90, atk: 75, def: 75, dex: 70, agi: 95 }
  },
  {
    key: 'skull', name: t('battler.skull'), lv: 1, effect: 'stab',
    hp: 18, atk: 4, def: 4, dex: 2, agi: 2,
    up: { hp: 85, atk: 80, def: 80, dex: 70, agi: 70 }
  },
  {
    key: 'ghost', name: t('battler.ghost'), lv: 1, effect: 'stab', y: 70,
    hp: 20, atk: 4, def: 4, dex: 3, agi: 4,
    up: { hp: 100, atk: 85, def: 80, dex: 70, agi: 80 },
    dropWeapon: { id: 9, chance: 2 }
  },
  {
    key: 'spectre', name: t('battler.spectre'), lv: 1, effect: 'stab', y: 60,
    hp: 30, atk: 3, def: 3, dex: 4, agi: 7,
    up: { hp: 80, atk: 75, def: 75, dex: 90, agi: 100 },
    dropWeapon: { id: 10, chance: 3 }
  },
  {
    key: 'wraith', name: t('battler.wraith'), lv: 1, effect: 'stab',
    hp: 65, atk: 6, def: 4, dex: 3, agi: 4,
    up: { hp: 100, atk: 85, def: 80, dex: 70, agi: 80 },
    abillities: [{ type: 'double', chance: 10 }],
    dropWeapon: { id: 11, chance: 4 }
  },
  {
    key: 'dullahan', name: t('battler.dullahan'), lv: 1, effect: 'stab',
    hp: 75, atk: 6, def: 6, dex: 3, agi: 3,
    up: { hp: 150, atk: 90, def: 90, dex: 70, agi: 70 },
    abillities: [{ type: 'multi', chance: 20 }],
    dropWeapon: { id: 12, chance: 4 }
  },
  {
    key: 'queen', name: t('battler.queen'), lv: 1, effect: 'stab',
    hp: 60, atk: 7, def: 4, dex: 3, agi: 4,
    up: { hp: 100, atk: 95, def: 80, dex: 75, agi: 80 },
    abillities: [{ type: 'multi', chance: 70 }],
    dropWeapon: { id: 13, chance: 100 }
  },
  {
    key: 'bird', name: t('battler.bird'), lv: 1, effect: 'hit',
    hp: 20, atk: 4, def: 4, dex: 5, agi: 5,
    up: { hp: 75, atk: 75, def: 75, dex: 85, agi: 85 }
  },
  {
    key: 'lizard', name: t('battler.lizard'), lv: 1, effect: 'scratch',
    hp: 20, atk: 6, def: 3, dex: 5, agi: 4,
    up: { hp: 85, atk: 90, def: 75, dex: 95, agi: 80 },
    dropWeapon: { id: 15, chance: 3 }
  },
  {
    key: 'tree', name: t('battler.tree'), lv: 1, effect: 'crash',
    hp: 20, atk: 4, def: 6, dex: 4, agi: 4,
    up: { hp: 90, atk: 80, def: 90, dex: 75, agi: 75 },
    dropWeapon: { id: 16, chance: 3 }
  },
  {
    key: 'knight', name: t('battler.knight'), lv: 1, effect: 'slash', y: 70,
    hp: 90, atk: 6, def: 7, dex: 4, agi: 4,
    up: { hp: 100, atk: 90, def: 100, dex: 75, agi: 75 },
    abillities: [{ type: 'multi', chance: 40 }],
    dropWeapon: { id: 17, chance: 4 }
  },
  {
    key: 'thief', name: t('battler.thief'), lv: 1, effect: 'slash', y: 70,
    hp: 40, atk: 3, def: 4, dex: 5, agi: 5,
    up: { hp: 70, atk: 75, def: 70, dex: 90, agi: 90 },
    abillities: [{ type: 'double', chance: 30 }],
    dropWeapon: { id: 18, chance: 3 }
  },
  {
    key: 'nikke', name: t('battler.nikke'), lv: 1, effect: 'crash',
    hp: 50, atk: 4, def: 3, dex: 5, agi: 5,
    up: { hp: 90, atk: 80, def: 70, dex: 95, agi: 90 },
    abillities: [{ type: 'double', chance: 70 }]
  },
  {
    key: 'dragon', name: t('battler.dragon'), lv: 1, effect: 'scratch',
    hp: 100, atk: 8, def: 6, dex: 6, agi: 4,
    up: { hp: 100, atk: 100, def: 95, dex: 90, agi: 80 },
    abillities: [{ type: 'multi', chance: 70 }, { type: 'double', chance: 50 }]
  }
]
