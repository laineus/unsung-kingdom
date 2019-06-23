import CustomPipeline from '../class/CustomPipeline'
import config from '../data/config'
import light from '../shader/light'
import blur from '../shader/blur'
export default scene => {
  // light
  scene.game.renderer.addPipeline('light', new CustomPipeline(scene.game, light))
  // blur
  const blurPipeline = scene.game.renderer.addPipeline('blur', new CustomPipeline(scene.game, blur))
  blurPipeline.setFloat1('resolution', config.WIDTH)
  blurPipeline.setFloat1('radius', 1.0)
  blurPipeline.setFloat2('dir', 3.0, 3.0)
}
