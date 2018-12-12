import assets from './assets'
export default scene => {
  Object.keys(assets).forEach(method => {
    Object.keys(assets[method]).forEach(key => scene.load[method](key, assets[method][key]))
  })
}
