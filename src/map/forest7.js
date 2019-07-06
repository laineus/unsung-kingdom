import dogEvent from './dogEvent'
export default {
  create (scene) {
    dogEvent(scene, scene.map.getObjectById(4), '4')
  }
}
