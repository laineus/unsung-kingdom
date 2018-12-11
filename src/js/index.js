import 'phaser'
import GameScene from './GameScene'

const config = {
  width: 960,
  height: 540,
  scene: GameScene,
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
