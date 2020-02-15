export default (src, name) => {
  const link = document.createElement('a')
  link.href = src
  link.download = name
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
