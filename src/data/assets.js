import assets from 'assets'
const getReplacedPath = path => {
  return path.replace(/^\.\/(.*)/, `${window.ASSET_HOST}/$1`)
}
if (window.ASSET_HOST) {
  Object.keys(assets).map(k => assets[k]).forEach(list => {
    list.forEach(row => {
      if (Array.isArray(row[1])) {
        row[1].forEach((_, i) => {
          row[1][i] = getReplacedPath(row[1][i])
        })
      } else {
        row[1] = getReplacedPath(row[1])
      }
    })
  })
}
export default assets
