export default {
  name: 'トロイア公爵邸の地下通路 - 王家側通路',
  enemyLevel: 15,
  enemyGroups: [
    ['gargoyle', 'gargoyle'],
    ['gargoyle', 'gargoyle', 'gargoyle'],
    ['succubus'],
    ['succubus', 'succubus']
  ],
  create (scene) {
    const btn = scene.map.getObjectById(8)
    if (scene.storage.state.gimmicks.includes('unserpass7_8')) {
      this.openNeedle(scene, false)
      btn.destroy()
    } else {
      btn.setEvent(async () => {
        scene.storage.state.gimmicks.push('unserpass7_8')
        await this.openNeedle(scene, true)
        btn.destroy()
      })
    }
  },
  async openNeedle (scene, event) {
    const layer4 = scene.map.getLayerByName('layer4')
    layer4.layer.data[10][8].index = 20
    if (event) await scene.ui.sleep(500)
    if (event) await scene.camera.look((53).toPixelCenter, (17).toPixelCenter, 1500)
    if (event) await scene.ui.sleep(100)
    const xList = [50, 51, 52, 53, 54, 55, 56, 57]
    xList.forEach(x => {
      layer4.layer.data[17][x].index = 79
      layer4.layer.data[17][x].setCollision(false)
    })
    if (event) await scene.ui.sleep(500)
    if (event) await scene.camera.revert(1500)
  }
}
