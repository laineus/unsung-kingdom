export default class Box extends Phaser.GameObjects.Polygon {
  constructor (scene, x, y, width, height, color) {
    // Parallelogram
    const diff = height / 5
    const leftTop = [diff, 0]
    const leftBottom = [0, height]
    const rightTop = [width, 0]
    const rightBottom = [width - diff, height]
    super(scene, x, y, [leftTop, rightTop, rightBottom, leftBottom], color)
  }
}
