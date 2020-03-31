export default class RayCast {
  constructor (x1, y1, x2, y2) {
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  }
  test (x, y, scale = 1) {
    const scaleHalf = scale / 2
    if (x < this.minX - scaleHalf || x > this.maxX + scaleHalf) return false
    if (y < this.minY - scaleHalf || y > this.maxY + scaleHalf) return false
    const diffX = x - this.x1
    const diffY = y - this.y1
    const lineX = diffY * this.xRatio
    const lineY = diffX * this.yRatio
    return Math.abs(lineX - diffX) < scaleHalf || Math.abs(lineY - diffY) < scaleHalf
  }
  get xAddition () {
    return this.x2 - this.x1
  }
  get yAddition () {
    return this.y2 - this.y1
  }
  get xRatio () {
    return this.xAddition / this.yAddition
  }
  get yRatio () {
    return this.yAddition / this.xAddition
  }
  get minX () {
    return Math.min(this.x1, this.x2)
  }
  get maxX () {
    return Math.max(this.x1, this.x2)
  }
  get minY () {
    return Math.min(this.y1, this.y2)
  }
  get maxY () {
    return Math.max(this.y1, this.y2)
  }
}
