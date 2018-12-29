import 'phaser'
import BootScene from './class/BootScene'
import GameScene from './class/GameScene'
import UIScene from './class/UIScene'

const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
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

new Phaser.Game(config)
