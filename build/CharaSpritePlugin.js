const sizeOf = require('image-size')

const CHARASPRITE_SETTINGS = require('./charaSpriteSettings')

module.exports = class {
  apply (compiler) {
    compiler.hooks.afterEnvironment.tap('CharaSprite', () => {
      console.log('Begin: CharaSprite')
      const list = CHARASPRITE_SETTINGS.map(setting => {
        const [name, x, y] = setting
        const { width, height } = sizeOf(`./public/img/chara_sprites/${name}.png`)
        const frameWidth = Math.round(width / x)
        const frameHeight = Math.round(height / y)
        const endFrame = x * y
        return [`chara_sprite/${name}`, `./img/chara_sprites/${name}.png`, { frameWidth, frameHeight, endFrame }]
      })
      compiler.options.externals.charaSpriteData = JSON.stringify(list)
      console.log('End: CharaSprite')
    })
  }
}
