import locales from './index'
const translate = (key, variables, lang) => {
  const locale = locales[lang]
  const text = key.split('.').reduce((obj, k) => obj && obj[k], locale)
  if (text === undefined) return 'Missing'
  if (!variables) return text
  const replacedText = variables.reduce((text, v, i) => {
    return text.replace(new RegExp(`\\#\\{${i}\\}`, 'g'), v)
  }, text)
  return replacedText
}
export default class MultiLocaleString extends String {
  constructor (key, values) {
    super()
    this.strings = {}
    Object.keys(locales).forEach(lang => {
      this.strings[lang] = translate(key, values, lang)
    })
  }
  toString () {
    return this.strings[window.lang]
  }
}
