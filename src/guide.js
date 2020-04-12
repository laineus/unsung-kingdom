import 'phaser'
import './util/extendNativeClassFunctions'
import GuideBootScene from './class/GuideBootScene'
import GuideScene from './class/GuideScene'
import config from './data/config'

const option = {
  type: Phaser.AUTO,
  width: config.WIDTH,
  height: config.HEIGHT,
  scene: [GuideBootScene, GuideScene],
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  }
}

window.game = new Phaser.Game(option)
