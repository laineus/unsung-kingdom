export default class CustomPipeline extends Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline {
  constructor (game, fragShader) {
    super({ game, renderer: game.renderer, fragShader })
  }
}
