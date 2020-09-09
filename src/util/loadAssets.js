import assets from 'assets'
export default scene => Object.keys(assets).forEach(method => assets[method].forEach(args => scene.load[method](...args)))
