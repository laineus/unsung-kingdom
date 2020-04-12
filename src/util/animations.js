export const slideIn = (scene, list, { x = -200, y = 0, delay = 0 } = {}) => {
  return new Promise(resolve => {
    const listArray = Array.isArray(list) ? list : [list]
    listArray.forEach((v, i) => {
      v.x += x
      v.y += y
      v.alpha = 0
      scene.add.tween({
        targets: v,
        duration: 250,
        ease: 'Power2',
        delay: (i * 30) + delay,
        x: v.x - x,
        y: v.y - y,
        alpha: 1,
        onComplete () {
          if (i === listArray.length - 1) resolve()
        }
      })
    })
  })
}

export const slideOut = (scene, list, { x = 200, y = 0, destroy = true, delay = 0 } = {}) => {
  const listArray = Array.isArray(list) ? list : [list]
  return new Promise(resolve => {
    listArray.forEach((v, i) => {
      scene.add.tween({
        targets: v,
        duration: 250,
        ease: 'Power2',
        delay: ((listArray.length - 1 - i) * 30) + delay,
        x: v.x + x,
        y: v.y + y,
        alpha: 0,
        onComplete () {
          v.x -= x
          v.y -= y
          if (destroy) v.destroy()
          if (i === listArray.length - 1) resolve()
        }
      })
    })
  })
}

export const fadeIn = (scene, list, { duration = 250, alpha = 1, delay = 0 } = {}) => {
  const listArray = Array.isArray(list) ? list : [list]
  return new Promise(resolve => {
    listArray.forEach(v => v.alpha = 0)
    scene.add.tween({
      targets: listArray,
      duration,
      ease: 'Power2',
      delay,
      alpha,
      onComplete () {
        resolve()
      }
    })
  })
}

export const fadeOut = (scene, list, { destroy = true, duration = 250, delay = 0 } = {}) => {
  const listArray = Array.isArray(list) ? list : [list]
  return new Promise(resolve => {
    scene.add.tween({
      targets: listArray,
      duration,
      ease: 'Power2',
      delay,
      alpha: 0,
      onComplete () {
        if (destroy) listArray.forEach(v => v.destroy.bind(v))
        resolve()
      }
    })
  })
}
