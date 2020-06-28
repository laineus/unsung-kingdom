import locales from './index'
import setting from '../data/setting'
const translate = (key, values, lang) => {
  const locale = locales[lang]
  const text = key.split('.').reduce((obj, k) => obj && obj[k], locale)
  if (text === undefined) {
    console.error(`Translation missing: "${key}" of "${lang}"`)
    return 'Missing'
  }
  if (!values) return text
  if (values instanceof String || typeof values === 'number') {
    return text.replace(new RegExp('\\#\\{\\w+\\}', 'g'), values)
  } else {
    return Object.keys(values).reduce((text, key) => {
      return text.replace(new RegExp(`\\#\\{${key}\\}`, 'g'), values[key])
    }, text)
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
    return this.strings[setting.state.lang] !== undefined ? this.strings[setting.state.lang] : 'Undefined Language'
  }
  toString () {
    return this.valueOf()
  }
}
