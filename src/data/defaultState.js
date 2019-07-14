import battlers from './battlers'
export default () => {
  return {
    map: 'room1',
    x: 500,
    y: 600,
    field: {},
    chapter: 0,
    event: {
      town: { talked_sick: false },
      dogs: { talked: false, started: false, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, completed: false },
      mercenary: { talked: false, started: false, solved: false, completed: false },
      drystan: { started: false, second: false, solved: false, completed: false }
    },
    battlers: battlers.filter((_, i) => i < 3).map(v => Object.assign(v, { exp: 0, maxHp: v.hp })),
    items: [{ item_id: 1, count: 5 }],
    weapons: [{ id: 1, weapon_id: 1 }, { id: 2, weapon_id: 1 }]
  }
}
