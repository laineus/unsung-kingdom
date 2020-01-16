const fs = require('fs')
const DIR = './public/img/face'

module.exports = class {
  apply (compiler) {
    compiler.hooks.beforeCompile.tapAsync('Asset', (_, callback) => {
      fs.readdir(DIR, (_, files) => {
        const fileList = files.filter(file => (/.*\.png$/).test(file))
        compiler.options.externals.fileList = JSON.stringify(fileList)
        callback()
      })
    })
  }
}
