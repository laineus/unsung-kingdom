import config from '../data/config'
// Number instance methods
Object.defineProperty(Number.prototype, 'half', {
  get () { return this / 2 }
})
Object.defineProperty(Number.prototype, 'toTile', {
  get () { return Math.floor(this / config.TILE_SIZE) }
})
Object.defineProperty(Number.prototype, 'toPixel', {
  get () { return this * config.TILE_SIZE }
})
Object.defineProperty(Number.prototype, 'toPixelCenter', {
  get () { return (this * config.TILE_SIZE) + (config.TILE_SIZE.half) }
})
Object.defineProperty(Number.prototype, 'toArray', {
  value () { return [...Array(this).keys()] }
})
Object.defineProperty(Number.prototype, 'toColorString', {
  get () { return `#${this.toString(16)}` }
})
Object.defineProperty(Number.prototype, 'byRight', {
  get () { return config.WIDTH - this }
})
Object.defineProperty(Number.prototype, 'byBottom', {
  get () { return config.HEIGHT - this }
})
// String instance methods
Object.defineProperty(String.prototype, 'toColorInt', {
  get () { return parseInt(this.slice(1), 16) }
})
Object.defineProperty(String.prototype, 'upperCase', {
  get () { return this.replace(/^[a-z]/g, v => v.toUpperCase()) }
})
// Array instance methods
Object.defineProperty(Array.prototype, 'random', {
  value () { return this[Math.randomInt(0, this.length - 1)] }
})
// Math class methods
Math.sum = (...args) => args.reduce((accumulator, current) => accumulator + current)
Math.average = (...args) => Math.sum(...args) / args.length
Math.fix = (value, min, max) => Math.min(Math.max(value, min), max)
Math.randomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min
Math.chance = percent => (percent / 100) > Math.random()
// Object class method
Object.isObject = value => Boolean(value && value.constructor.name === 'Object')
