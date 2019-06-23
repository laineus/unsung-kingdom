import CustomPipeline from '../class/CustomPipeline'
import light from '../shader/light'
export default scene => {
  scene.game.renderer.addPipeline('light', new CustomPipeline(scene.game, light))
}
