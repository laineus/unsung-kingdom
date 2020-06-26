import locales from './index'
import setting from '../data/setting'
const translate = (key, values, lang) => {
  const locale = locales[lang]
  const text = key.split('.').reduce((obj, k) => obj && obj[k], locale)
  if (text === undefined) return 'Missing'
  if (!values) return text
  if (values instanceof String) {
    return Object.keys(values).reduce((text, key) => {
      return text.replace(new RegExp(`\\#\\{${key}\\}`, 'g'), values[key])
    }, text)
  } else {
    return text.replace(new RegExp(`\\#\\{\\w+\\}`, 'g'), values)
  }
}
const translateAll = (key, values) => {
  return Object.keys(locales).reduce((obj, lang) => {
    obj[lang] = translate(key, values, lang)
    return obj
  }, {})
}
export default class MultiLocaleString extends String {
  constructor (key, values) {
    super()
    this.strings = translateAll(key, values)
  }
  valueOf () {
    return this.strings[setting.state.lang] !== undefined ? this.strings[setting.state.lang] : 'Undefined Laguage'
  }
  toString () {
    return this.valueOf()
  }
}
