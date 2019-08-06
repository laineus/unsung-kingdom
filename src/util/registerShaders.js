import CustomPipeline from '../class/CustomPipeline'
import config from '../data/config'
import light from '../shader/light'
import blur from '../shader/blur'
import spotlight from '../shader/spotlight'
export default scene => {
  // light
  scene.game.renderer.addPipeline('light', new CustomPipeline(scene.game, light))
  // blur
  const blurPipeline = scene.game.renderer.addPipeline('blur', new CustomPipeline(scene.game, blur))
  blurPipeline.setFloat1('resolution', config.WIDTH)
  blurPipeline.setFloat1('radius', 10.0)
  // spotlight
  const spot = scene.game.renderer.addPipeline('spotlight', new CustomPipeline(scene.game, spotlight))
  spot.setFloat2('resolution', 1, 1)
  spot.setFloat1('tx', 480.0)
  spot.setFloat1('ty', 270.0)
  spot.setFloat1('r', 320.0)
}
