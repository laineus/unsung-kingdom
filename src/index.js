import 'phaser'
import BootScene from './class/BootScene'
import TitleScene from './class/TitleScene'
import GameScene from './class/GameScene'
import UIScene from './class/UIScene'
import config from './data/config'
import extendNativeClassFunctions from './util/extendNativeClassFunctions'

extendNativeClassFunctions()

location.query = location.search.substr(1).split('&').filter(Boolean).reduce((obj, v) => {
  const arr = v.split('=')
  obj[arr[0]] = arr[1]
  return obj
}, {})

const option = {
  type: Phaser.AUTO,
  width: config.WIDTH,
  height: config.HEIGHT,
  scene: [BootScene, TitleScene, GameScene, UIScene],
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  }
}

new Phaser.Game(option)
