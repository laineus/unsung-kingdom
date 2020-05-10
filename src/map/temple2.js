import { gimmick } from '../event/lorraine'
import { DEPTH } from '../class/Field'
import templeCharacters from '../event/templeCharacters'
export default {
  name: 'グリファルデ神殿 - 広場',
  enemyLevel: 33,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird'],
    ['lizard'],
    ['lizard', 'lizard']
  ],
  create (scene) {
    // Characters
    templeCharacters(scene, {
      soldier1: scene.map.getObjectById(11),
      soldier2: scene.map.getObjectById(12),
      mary: scene.map.getObjectById(13),
      loretta: scene.map.getObjectById(14),
      dario: scene.map.getObjectById(15).setRandomWalk(true),
      drystan: scene.map.getObjectById(16),
      ray: scene.map.getObjectById(17).setRandomWalk(true)
    })
    // Door to loof
    const buttons = [6, 7, 8].map(id => scene.map.getObjectById(id))
    const doorContainer = scene.map.getObjectById(9)
    const gimmickArea = scene.map.getObjectById(18)
    const doors = Number(2).toArray().map(i => {
      return scene.add.sprite(i * 48, 0, 'tileset/door_gimmick').setOrigin(0, 0).setFrame(i)
    })
    const lights = Number(4).toArray().map(i => {
      const x = (i % 2) * 48
      const y = Math.floor(i / 2) * 33
      return scene.add.sprite(x, y, 'tileset/door_gimmick_light').setOrigin(0, 0).setFrame(i + 4)
    })
    scene.add.tween({ targets: lights, duration: 500, alpha: 0.5, yoyo: true, loop: -1 })
    doorContainer.add([...doors, ...lights])
    gimmick(scene, buttons, doorContainer, doors, lights, gimmickArea)
    // Door to underpass
    if (scene.storage.state.event.m4_4.completed) {
      const layer3 = scene.map.getLayerByName('layer3')
      const door2Collision = [[17, 48], [18, 48], [19, 48]]
      door2Collision.forEach(pos => {
        layer3.layer.data[pos[1]][pos[0]].setCollision(false)
      })
    } else {
      const door2 = scene.map.getObjectById(10)
      Number(2).toArray().map(i => {
        return scene.add.sprite(door2.x + (i * 48), door2.y, 'tileset/door_gimmick').setOrigin(0, 0).setFrame(i).setDepth(DEPTH.TOP)
      })
    }
  }
}
