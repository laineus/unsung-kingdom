const { extrudeTilesetToBuffer } = require('tile-extruder')
const imagemin = require('imagemin')
const imageminPngquant = require('imagemin-pngquant')
const fs = require('fs')

const DIR = './public/img/tilesets'
const ORIGINAL = `${DIR}/original`
const EXTRUDED = `${DIR}/extruded`

module.exports = class {
  apply (compiler) {
    compiler.hooks.afterEnvironment.tap('TileSet', () => {
      console.log('Begin: TileSet')
      fs.readdir(ORIGINAL, (_, files) => {
        const promises = files.map(async file => {
          const buffer = await extrudeTilesetToBuffer(32, 32, `${ORIGINAL}/${file}`)
          const minifiedBuffer = await imagemin.buffer(buffer, {
            plugins: [
              imageminPngquant()
            ]
          })
          fs.writeFileSync(`${EXTRUDED}/${file}`, minifiedBuffer)
        })
        Promise.all(promises).then(() => console.log('End: TileSet'))
      })
    })
  }
}
