import { gimmick } from '../event/lorraine'
export default {
  name: 'グリファルデ神殿 - 広場',
  enemyLevel: 26,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird'],
    ['lizard'],
    ['lizard', 'lizard']
  ],
  create (scene) {
    const buttons = [6, 7, 8].map(id => scene.map.getObjectById(id))
    const doorContainer = scene.map.getObjectById(9)
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
    gimmick(scene, buttons, doorContainer, doors, lights)
  }
}
