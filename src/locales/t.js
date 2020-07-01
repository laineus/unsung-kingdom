import locales from './index'
import setting from '../data/setting'
export default (key, values) => {
  const locale = locales[setting.state.lang]
  const text = key.split('.').reduce((obj, k) => obj && obj[k], locale)
  if (text === undefined) {
    console.error(`Translation missing: "${key}" of "${setting.state.lang}"`)
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
