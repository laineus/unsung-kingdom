const fs = require('fs')

const ASSET_SETTINGS = require('./assetSettings')

module.exports = class {
  apply (compiler) {
    compiler.hooks.beforeCompile.tapAsync('Asset', (_, callback) => {
      const promises = ASSET_SETTINGS.map(setting => {
        return new Promise(resolve => {
          fs.readdir(`./public/${setting.dir}`, (_, files) => {
            const list = files.filter(file => setting.rule.test(file)).map(file => {
              return [`${setting.prefix}/${file.split('.')[0]}`, `..${setting.dir}/${file}`]
            })
            resolve({ prefix: setting.prefix, list })
          })
        })
      })
      Promise.all(promises).then(results => {
        const object = results.reduce((obj, v) => {
          obj[v.prefix] = v.list
          return obj
        }, {})
        compiler.options.externals.assetData = JSON.stringify(object)
        callback()
      })
    })
  }
}
