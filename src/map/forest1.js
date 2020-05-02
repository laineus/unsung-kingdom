import { dogEventFound } from '../event/dogEvent'
export default {
  name: 'ワルコフォレンスの森 - 東部',
  bgm: 'forest',
  enemyLevel: 1,
  enemyGroups: [
    ['slime'],
    ['bee']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), 'd1')
  }
}
