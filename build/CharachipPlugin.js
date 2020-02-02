const sizeOf = require('image-size')

const CHARACHIP_SETTINGS = require('./charachipSettings')

module.exports = class {
  apply (compiler) {
    compiler.hooks.afterEnvironment.tap('Charachip', () => {
      console.log('Begin: Charachip')
      const list = CHARACHIP_SETTINGS.map(setting => {
        const [name, x, y] = setting
        const { width, height } = sizeOf(`./public/img/field/${name}.png`)
        const frameWidth = Math.round(width / x)
        const frameHeight = Math.round(height / y)
        const endFrame = x * y
        return [`field/${name}`, `../img/field/${name}.png`, { frameWidth, frameHeight, endFrame }]
      })
      compiler.options.externals.charachipData = JSON.stringify(list)
      console.log('End: Charachip')
    })
  }
}
