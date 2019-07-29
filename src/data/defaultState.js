import battlers from './battlers'
export default () => {
  return {
    map: 'room1',
    x: 500,
    y: 600,
    field: {},
    chapter: 0,
    event: {
      '0-1': { started: false, completed: false },
      '1-1': { started: false, completed: false, talked: false, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0},
      '1-2': { started: false, completed: false, talked: false, solved: false  },
      '1-3': { started: false, completed: false },
      '1-4': { started: false, completed: false, solved: false },
      '2-1': { started: false, completed: false },
      '2-2': { started: false, completed: false },
      '2-3': { started: false, completed: false },
      '2-4': { started: false, completed: false },
      '3-1': { started: false, completed: false },
      '3-2': { started: false, completed: false },
      '3-3': { started: false, completed: false },
      '3-4': { started: false, completed: false },
      '4-1': { started: false, completed: false },
      '4-2': { started: false, completed: false },
      '4-3': { started: false, completed: false },
      '4-4': { started: false, completed: false },
      '5-1': { started: false, completed: false },
      town: { talked_sick: false }
    },
    battlers: battlers.filter((_, i) => i < 3).map(v => Object.assign(v, { exp: 0, maxHp: v.hp })),
    items: [{ item_id: 1, count: 5 }],
    weapons: [{ id: 1, weapon_id: 1 }, { id: 2, weapon_id: 1 }]
  }
}
