export const listAnimation = (scene, list, option = { x: -200 }) => {
  const { x } = option
  if (!Array.isArray(list)) list = [list]
  list.forEach((v, i) => {
    v.x += x
    v.alpha = 0
    scene.add.tween({ targets: v, duration: 250, ease: 'Power2', delay: i * 30, x: v.x - x, alpha: 1 })
  })
}
