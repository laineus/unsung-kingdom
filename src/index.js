import 'phaser'
import BootScene from './class/BootScene'
import GameScene from './class/GameScene'
import UIScene from './class/UIScene'
import config from './data/config'
import extendNativeClassFunctions from './util/extendNativeClassFunctions'

extendNativeClassFunctions()

const option = {
  type: Phaser.AUTO,
  width: config.WIDTH,
  height: config.HEIGHT,
  scene: [BootScene, GameScene, UIScene],
  parent: 'game',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  }
}

new Phaser.Game(option)
