import tileToPixel from './tileToPixel'
import pixelToTile from './pixelToTile'
export default () => {
  Object.defineProperty(Number.prototype, 'toTile', {
    get () { return pixelToTile(this) }
  })
  Object.defineProperty(Number.prototype, 'toPixel', {
    get () { return tileToPixel(this) }
  })
}
