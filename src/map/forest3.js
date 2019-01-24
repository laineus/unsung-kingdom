import dogEvent from './dogEvent'
export default {
  create (scene) {
    dogEvent(scene, scene.map.getCharaById(4), '1')
  }
}
