export default [
  {
    key: 'ann', name: 'Ann', lv: 1, effect: 'hit',
    hp: 40, atk: 4, def: 3, dex: 3, agi: 2,
    up: { hp: 100, atk: 100, def: 90, dex: 70, agi: 70 }
  },
  {
    key: 'francisca', name: 'Francisca', lv: 1, effect: 'hit',
    hp: 30, atk: 3, def: 2, dex: 3, agi: 4,
    up: { hp: 85, atk: 85, def: 75, dex: 100, agi: 85 }
  },
  {
    key: 'jaquelyn', name: 'Jaquelyn', lv: 1, effect: 'hit',
    hp: 35, atk: 2, def: 2, dex: 4, agi: 4,
    up: { hp: 90, atk: 75, def: 80, dex: 85, agi: 100 }
  },
  {
    key: 'jack', name: '王殺しのジャック', lv: 1, effect: 'slash', y: 70,
    hp: 50, atk: 4, def: 2, dex: 3, agi: 4,
    up: { hp: 90, atk: 100, def: 70, dex: 70, agi: 90 },
    abillities: [{ type: 'double', chance: 60 }],
    dropWeapon: { id: 15, chance: 100 }
  },
  {
    key: 'bee', name: 'ビーストビー', lv: 1, effect: 'shot',
    hp: 16, atk: 4, def: 1, dex: 3, agi: 4,
    up: { hp: 70, atk: 90, def: 50, dex: 70, agi: 80 },
    dropWeapon: { id: 4, chance: 3 }
  },
  {
    key: 'bee2', name: 'ビーストビー', lv: 1, effect: 'shot',
    hp: 18, atk: 3, def: 1, dex: 4, agi: 5,
    up: { hp: 80, atk: 80, def: 50, dex: 80, agi: 90 },
    dropWeapon: { id: 4, chance: 3 }
  },
  {
    key: 'slime', name: 'ベニクス', lv: 1, effect: 'hit',
    hp: 24, atk: 3, def: 4, dex: 2, agi: 2,
    up: { hp: 100, atk: 80, def: 95, dex: 50, agi: 50 },
    dropWeapon: { id: 1, chance: 5 }
  },
  {
    key: 'mandrake', name: 'マンドレイク', lv: 1, effect: 'crash',
    hp: 21, atk: 3, def: 4, dex: 4, agi: 2,
    up: { hp: 90, atk: 70, def: 90, dex: 80, agi: 60 },
    dropWeapon: { id: 2, chance: 5 }
  },
  {
    key: 'wolf', name: 'ヴォルフェス', lv: 1, effect: 'scratch',
    hp: 28, atk: 3, def: 2, dex: 4, agi: 5,
    up: { hp: 100, atk: 80, def: 60, dex: 80, agi: 100 },
    dropWeapon: { id: 3, chance: 4 }
  },
  {
    key: 'flower', name: 'サニズマスク', lv: 1, effect: 'hit',
    hp: 35, atk: 8, def: 6, dex: 4, agi: 5,
    up: { hp: 100, atk: 90, def: 90, dex: 70, agi: 70 }
  },
  {
    key: 'bear', name: 'レックスベア', lv: 1, effect: 'scratch',
    hp: 40, atk: 4, def: 4, dex: 2, agi: 2,
    abillities: [{ type: 'multi', chance: 60 }],
    up: { hp: 100, atk: 100, def: 85, dex: 75, agi: 75 }
  },
  {
    key: 'goblin', name: 'ゴブリン', lv: 1, effect: 'crash',
    hp: 24, atk: 3, def: 4, dex: 2, agi: 2,
    up: { hp: 100, atk: 80, def: 95, dex: 50, agi: 50 },
    dropWeapon: { id: 5, chance: 3 }
  },
  {
    key: 'carbuncle', name: 'カーバンクル', lv: 1, effect: 'shot',
    hp: 21, atk: 3, def: 2, dex: 4, agi: 7,
    up: { hp: 80, atk: 80, def: 60, dex: 80, agi: 100 },
    dropWeapon: { id: 6, chance: 3 }
  },
  {
    key: 'orthrus', name: 'オルトロス', lv: 1, effect: 'scratch',
    hp: 50, atk: 4, def: 3, dex: 3, agi: 4,
    abillities: [{ type: 'double', chance: 25 }],
    up: { hp: 100, atk: 95, def: 70, dex: 70, agi: 80 }
  },
  {
    key: 'gargoyle', name: 'ガーゴイル', lv: 1, effect: 'hit',
    hp: 40, atk: 3, def: 6, dex: 3, agi: 3,
    up: { hp: 90, atk: 75, def: 90, dex: 70, agi: 70 },
    dropWeapon: { id: 7, chance: 3 }
  },
  {
    key: 'succubus', name: 'サキュバス', lv: 1, effect: 'stab', y: 100,
    hp: 35, atk: 4, def: 4, dex: 3, agi: 4,
    up: { hp: 80, atk: 75, def: 80, dex: 70, agi: 75 },
    dropWeapon: { id: 8, chance: 3 }
  },
  {
    key: 'aragnie', name: 'アラグニエ', lv: 1, effect: 'shot',
    hp: 60, atk: 4, def: 6, dex: 4, agi: 3,
    abillities: [{ type: 'double', chance: 70 }, { type: 'multi', chance: 30 }],
    up: { hp: 100, atk: 80, def: 90, dex: 70, agi: 60 },
    dropWeapon: { id: 9, chance: 100 }
  },
  {
    key: 'phantom', name: 'ファントム', lv: 1, effect: 'stab',
    hp: 20, atk: 3, def: 3, dex: 3, agi: 5,
    up: { hp: 90, atk: 75, def: 75, dex: 70, agi: 95 }
  },
  {
    key: 'skull', name: 'スカルヘッド', lv: 1, effect: 'stab',
    hp: 18, atk: 4, def: 4, dex: 2, agi: 2,
    up: { hp: 85, atk: 80, def: 80, dex: 70, agi: 70 }
  },
  {
    key: 'ghost', name: 'ゴースト', lv: 1, effect: 'stab', y: 70,
    hp: 20, atk: 4, def: 4, dex: 3, agi: 4,
    up: { hp: 100, atk: 85, def: 80, dex: 70, agi: 80 },
    dropWeapon: { id: 9, chance: 2 }
  },
  {
    key: 'spectre', name: 'スペクター', lv: 1, effect: 'stab', y: 60,
    hp: 30, atk: 3, def: 3, dex: 4, agi: 7,
    up: { hp: 80, atk: 75, def: 75, dex: 90, agi: 100 },
    dropWeapon: { id: 10, chance: 3 }
  },
  {
    key: 'wraith', name: 'レイス', lv: 1, effect: 'stab',
    hp: 65, atk: 6, def: 4, dex: 3, agi: 4,
    up: { hp: 100, atk: 85, def: 80, dex: 70, agi: 80 },
    abillities: [{ type: 'double', chance: 10 }],
    dropWeapon: { id: 11, chance: 4 }
  },
  {
    key: 'dullahan', name: 'デュラハン', lv: 1, effect: 'stab',
    hp: 75, atk: 6, def: 6, dex: 3, agi: 3,
    up: { hp: 150, atk: 90, def: 90, dex: 70, agi: 70 },
    abillities: [{ type: 'multi', chance: 20 }],
    dropWeapon: { id: 12, chance: 5 }
  },
  {
    key: 'queen', name: 'エヴァンジェリナ妃の亡霊', lv: 1, effect: 'stab',
    hp: 60, atk: 7, def: 4, dex: 3, agi: 4,
    up: { hp: 100, atk: 95, def: 80, dex: 75, agi: 80 },
    abillities: [{ type: 'multi', chance: 70 }],
    dropWeapon: { id: 13, chance: 100 }
  },
  {
    key: 'bird', name: 'ケルーネ', lv: 1, effect: 'hit',
    hp: 20, atk: 4, def: 4, dex: 5, agi: 5,
    up: { hp: 75, atk: 75, def: 75, dex: 85, agi: 85 }
  },
  {
    key: 'lizard', name: 'バリザード', lv: 1, effect: 'scratch',
    hp: 20, atk: 6, def: 3, dex: 5, agi: 4,
    up: { hp: 85, atk: 90, def: 75, dex: 95, agi: 80 },
    dropWeapon: { id: 15, chance: 5 }
  },
  {
    key: 'tree', name: 'トルコリス', lv: 1, effect: 'crash',
    hp: 20, atk: 4, def: 6, dex: 4, agi: 4,
    up: { hp: 90, atk: 80, def: 90, dex: 75, agi: 75 },
    dropWeapon: { id: 16, chance: 6 }
  },
  {
    key: 'knight', name: 'レムリアンナイト', lv: 1, effect: 'slash',
    hp: 90, atk: 6, def: 7, dex: 4, agi: 4,
    up: { hp: 100, atk: 90, def: 100, dex: 75, agi: 75 },
    abillities: [{ type: 'multi', chance: 50 }],
    dropWeapon: { id: 17, chance: 4 }
  },
  {
    key: 'thief', name: 'シーフェン', lv: 1, effect: 'slash',
    hp: 50, atk: 4, def: 4, dex: 6, agi: 6,
    up: { hp: 90, atk: 80, def: 70, dex: 90, agi: 90 },
    abillities: [{ type: 'double', chance: 50 }],
    dropWeapon: { id: 18, chance: 3 }
  },
  {
    key: 'nikke', name: 'ニッケ', lv: 1, effect: 'crash',
    hp: 50, atk: 4, def: 3, dex: 7, agi: 6,
    up: { hp: 90, atk: 80, def: 70, dex: 95, agi: 90 },
    abillities: [{ type: 'double', chance: 70 }]
  },
  {
    key: 'dragon', name: 'ソンベルク', lv: 1, effect: 'scratch',
    hp: 100, atk: 7, def: 6, dex: 6, agi: 5,
    up: { hp: 100, atk: 100, def: 95, dex: 90, agi: 85 },
    abillities: [{ type: 'multi', chance: 80 }]
  }
]
