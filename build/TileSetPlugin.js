const { extrudeTilesetToImage } = require('tile-extruder')
const fs = require('fs')

const DIR = './public/img/tileset'
const ORIGINAL = `${DIR}/original`
const EXTRUDED = `${DIR}/extruded`

module.exports = class {
  apply (compiler) {
    compiler.hooks.beforeCompile.tapAsync('TileSet', (_, callback) => {
      fs.readdir(ORIGINAL, (_, files) => {
        const promises = files.map(file => {
          extrudeTilesetToImage(32, 32, `${ORIGINAL}/${file}`, `${EXTRUDED}/${file}`)
        })
        Promise.all(promises).then(() => {
          callback()
        })
      })
    })
  }
}
