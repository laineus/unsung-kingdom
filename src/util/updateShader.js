export default (game, name, time = 0.02) => {
  const customPipeline = game.renderer.getPipeline(name)
  if (!customPipeline.hasOwnProperty('time')) customPipeline.time = 0
  customPipeline.time += time
  customPipeline.setFloat1('time', customPipeline.time)
}
