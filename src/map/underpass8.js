import { jack } from '../event/aragnie'
export default {
  enemyLevel: 12,
  enemyGroups: [
    ['gargoyle', 'gargoyle'],
    ['gargoyle', 'gargoyle', 'gargoyle'],
    ['succubus'],
    ['succubus', 'succubus']
  ],
  create (scene) {
    jack(scene, scene.map.getObjectById(3), scene.map.getObjectById(4))
  }
}
