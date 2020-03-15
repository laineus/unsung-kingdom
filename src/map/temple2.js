import { gimmick } from '../event/lorraine'
export default {
  create (scene) {
    const buttons = [6, 7, 8].map(id => scene.map.getObjectById(id))
    const door = scene.map.getObjectById(9)
    const gimmicks = Number(4).toArray().map(i => {
      return scene.add.sprite(i * 24, 0, 'tileset/door_gimmick').setOrigin(0, 0).setFrame(i)
    })
    door.add(gimmicks)
    gimmick(scene, buttons, gimmicks)
  }
}
