import dogEvent from './dogEvent'
export default {
  create (scene) {
    dogEvent(scene, scene.map.getCharaById(3), '2')
  }
}
