import 'phaser'
import './util/extendNativeClassFunctions'
import BootScene from './class/BootScene'
import TitleScene from './class/TitleScene'
import GameScene from './class/GameScene'
import UIScene from './class/UIScene'
import config from './data/config'

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
  },
  input: {
    activePointers:3,
  },
  // fps: { target: 30, forceSetTimeOut: true }
}

const game = new Phaser.Game(option)

window.game = game
window.addEventListener('resize', () => game.scale.refresh())
