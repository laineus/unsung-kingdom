import 'phaser'
import BootScene from './BootScene'
import GameScene from './GameScene'
import UIScene from './UIScene'

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
