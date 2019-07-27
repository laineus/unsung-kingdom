import { pixelToTile, tileToPixel, positionByRight, positionByBottom, half } from './numberFunctions'
export default () => {
  // Number instance methods
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
  Object.defineProperty(Number.prototype, 'toColorString', {
    get () { return `#${this.toString(16)}` }
  })
  Object.defineProperty(Number.prototype, 'byRight', {
    get () { return positionByRight(this) }
  })
  Object.defineProperty(Number.prototype, 'byBottom', {
    get () { return positionByBottom(this) }
  })
  Object.defineProperty(Number.prototype, 'half', {
    get () { return half(this) }
  })
  // String instance methods
  Object.defineProperty(String.prototype, 'toColorInt', {
    get () { return parseInt(this.slice(1), 16) }
  })
  // Math class methods
  Math.fix = (value, min, max) => Math.min(Math.max(value, min), max)
  Math.randomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min
  Math.chance = (percent) => (percent / 100) > Math.random()
  // Array instance methods
  Array.prototype.random = function () { return this[Math.randomInt(0, this.length - 1)] }
}
