const sizeOf = require('image-size')

const CHARACHIP_SETTINGS = require('./charachipSettings')

module.exports = class {
  apply (compiler) {
    compiler.hooks.afterEnvironment.tap('Charachip', () => {
      console.log('Begin: Charachip')
      const list = CHARACHIP_SETTINGS.map(setting => {
        const [name, x, y] = setting
        const { width, height } = sizeOf(`./public/img/chara_sprites/${name}.png`)
        const frameWidth = Math.round(width / x)
        const frameHeight = Math.round(height / y)
        const endFrame = x * y
        return [`chara_sprite/${name}`, `../img/chara_sprites/${name}.png`, { frameWidth, frameHeight, endFrame }]
      })
      compiler.options.externals.charachipData = JSON.stringify(list)
      console.log('End: Charachip')
    })
  }
}
