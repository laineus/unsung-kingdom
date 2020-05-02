import { dogEventFound } from '../event/dogEvent'
export default {
  name: 'ワルコフォレンスの森 - 南部',
  bgm: 'forest',
  enemyLevel: 2,
  enemyGroups: [
    ['slime'],
    ['slime', 'slime'],
    ['bee', 'bee'],
    ['bee', 'bee2']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(7), 'd2')
    dogEventFound(scene, scene.map.getObjectById(3), 'd3')
  }
}
