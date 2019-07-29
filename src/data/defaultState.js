import battlers from './battlers'
export default () => {
  return {
    map: 'room1',
    x: 500,
    y: 600,
    field: {},
    chapter: 0,
    event: {
      0_1: { started: false, completed: false },
      1_1: { started: false, completed: false, talked: false, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0},
      1_2: { started: false, completed: false, talked: false, solved: false  },
      1_3: { started: false, completed: false },
      1_4: { started: false, completed: false, solved: false },
      2_1: { started: false, completed: false },
      2_2: { started: false, completed: false },
      2_3: { started: false, completed: false },
      2_4: { started: false, completed: false },
      3_1: { started: false, completed: false },
      3_2: { started: false, completed: false },
      3_3: { started: false, completed: false },
      3_4: { started: false, completed: false },
      4_1: { started: false, completed: false },
      4_2: { started: false, completed: false },
      4_3: { started: false, completed: false },
      4_4: { started: false, completed: false },
      5_1: { started: false, completed: false },
      town: { talked_sick: false }
    },
    battlers: battlers.filter((_, i) => i < 3).map(v => Object.assign(v, { exp: 0, maxHp: v.hp })),
    items: [{ item_id: 1, count: 5 }],
    weapons: [{ id: 1, weapon_id: 1 }, { id: 2, weapon_id: 1 }]
  }
}
