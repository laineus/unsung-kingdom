window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('switchToFullscreen').addEventListener('click', e => {
    e.preventDefault()
    document.body.classList.add('fullscreen')
  })
})
