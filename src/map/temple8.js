import { appleCollection, GOOD_APPLES } from '../event/lute'
export default {
  name: 'グリファルデ神殿 - 東部',
  bgm: 'temple',
  enemyLevel: 38,
  enemyGroups: [
    ['tree'],
    ['tree', 'tree'],
    ['bird', 'tree', 'bird']
  ],
  create (scene) {
    this.apples = Array.range(4, 9).map(id => {
      return { apple: scene.map.getObjectById(id), key: `a8_${id}` }
    })
    this.apples.forEach(v => appleCollection(scene, v.apple, v.key))
  },
  update (scene) {
    if (scene.frame % 15 !== 0) return
    this.apples.filter(v => v.apple.active && v.apple.distanceToPlayer < 80).forEach(v => {
      GOOD_APPLES.includes(v.key) ? scene.tweetOnce(scene.player, 'おいしそうなリンゴ', 'aplg') : scene.tweetOnce(scene.francisca, '傷んだリンゴだね', 'aplb')
    })
  }
}
