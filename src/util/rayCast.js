export default (startX, startY, radian, distanceLimit, density, callback) => {
  const cos = Math.cos(radian)
  const sin = Math.sin(radian)
  const test = distance => {
    const x = startX + (cos * distance)
    const y = startY + (sin * distance)
    return distance >= distanceLimit || callback(x, y) ? { x, y } : test(distance + density)
  }
  return test(density)
}
