import { gimmick } from '../event/lorraine'
export default {
  create (scene) {
    const buttons = [6, 7, 8].map(id => scene.map.getObjectById(id))
    const door = scene.map.getObjectById(9)
    const doors = Number(2).toArray().map(i => {
      return scene.add.sprite(i * 48, 0, 'tileset/door_gimmick').setOrigin(0, 0).setFrame(i)
    })
    const lights = Number(4).toArray().map(i => {
      return scene.add.sprite(i * 24, 0, 'tileset/door_gimmick_light').setOrigin(0, 0).setFrame(i + 4)
    })
    door.add([...doors, ...lights])
    gimmick(scene, buttons, doors, lights)
  }
}
