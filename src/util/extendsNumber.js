import tileToPixel from './tileToPixel'
import pixelToTile from './pixelToTile'
export default () => {
  Object.defineProperty(Number.prototype, 'toTile', {
    get () { return pixelToTile(this) }
  })
  Object.defineProperty(Number.prototype, 'toPixel', {
    get () { return tileToPixel(this, 0) }
  })
  Object.defineProperty(Number.prototype, 'toPixelCenter', {
    get () { return tileToPixel(this) }
  })
  Object.defineProperty(Number.prototype, 'toArray', {
    get () { return [...Array(this).keys()] }
  })
}
