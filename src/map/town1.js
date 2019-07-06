import Substance from '../class/Substance'
export default {
  create (scene) {
    const eState = scene.storage.state.event
    // doorToRoom
    this.doorToRoom = new Substance(scene, (17).toPixelCenter, (34).toPixelCenter)
    this.doorToRoom.setTapEvent().on('tap', () => scene.mapChange('room1', 18, 20))
    scene.map.getCharaById(2).setDisplayName('市民').setTapEvent().on('tap', async chara => {
      if (!eState.talked_sick) {
        scene.talk([
          { chara, text: '王は病気だワン' },
          null
        ])
        eState.talked_sick = true
      } else {
        scene.talk([
          { chara, text: 'ワン！' },
          null
        ])
      }
    })
  },
  update () {
    this.doorToRoom.update()
  }
}
