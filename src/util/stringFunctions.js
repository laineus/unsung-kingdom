export const splitString = (str, length) => {
  if (!str || !length || length < 0) return []
  const regexPattern = new RegExp(`(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]){1,${length}}`, 'g')
  return str.match(regexPattern) || []
}

export const lineBreak = (string, limit) => {
  const resultArray = ['']
  string.split('').reduce((currentLength, letter) => {
    const code = letter.charCodeAt()
    const addition = (code >= 0x00 && code < 0x81) || (code === 0xf8f0) || (code >= 0xff61 && code < 0xffa0) || (code >= 0xf8f1 && code < 0xf8f4) ? 1 : 2
    if ((currentLength + addition) > limit && ![12289, 12290].includes(code)) {
      currentLength = addition
      resultArray.push(letter)
    } else {
      currentLength += addition
      resultArray[resultArray.length - 1] += letter
    }
    return currentLength
  }, 0)
  return resultArray.join('\n')
}
