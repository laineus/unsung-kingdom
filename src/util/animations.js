export const slideIn = (scene, list, option = { x: -200 }) => {
  const { x } = option
  return new Promise(resolve => {
    if (!Array.isArray(list)) list = [list]
    list.forEach((v, i) => {
      v.x += x
      v.alpha = 0
      scene.add.tween({
        targets: v,
        duration: 250,
        ease: 'Power2',
        delay: i * 30,
        x: v.x - x,
        alpha: 1,
        onComplete() {
          if (i === list.length - 1) resolve()
        }
      })
    })
  })
}

export const slideOut = (scene, list, option = { x: 200, destroy: true }) => {
  return new Promise(resolve => {
    const { x, destroy } = option
    if (!Array.isArray(list)) list = [list]
    list.forEach((v, i) => {
      scene.add.tween({
        targets: v,
        duration: 250,
        ease: 'Power2',
        delay: (list.length - 1 - i) * 30,
        x: v.x + x,
        alpha: 0,
        onComplete() {
          if (destroy) v.destroy()
          if (i === list.length - 1) resolve()
        }
      })
    })
  })
}

export const fadeIn = (scene, list, option = { duration: 250 }) => {
  const { duration } = option
  return new Promise(resolve => {
    if (!Array.isArray(list)) list = [list]
    list.forEach(v => v.alpha = 0)
    scene.add.tween({
      targets: list,
      duration,
      ease: 'Power2',
      alpha: 1,
      onComplete() {
        resolve()
      }
    })
  })
}

export const fadeOut = (scene, list, option = { destroy: true, duration: 250 }) => {
  return new Promise(resolve => {
    const { destroy, duration } = option
    if (!Array.isArray(list)) list = [list]
    scene.add.tween({
      targets: list,
      duration,
      ease: 'Power2',
      alpha: 0,
      onComplete() {
        if (destroy) list.forEach(v => v.destroy.bind(v))
        resolve()
      }
    })
  })
}
