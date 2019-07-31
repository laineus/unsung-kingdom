export const listAnimation = (scene, list) => {
  list.forEach((v, i) => {
    v.x -= 200
    v.alpha = 0
    scene.add.tween({ targets: v, duration: 250, ease: 'Power2', delay: i * 30, x: v.x + 200, alpha: 1 })
  })
}
