const SCRIPTS = {
  talk: {
    moonshine: {
      m1: {
        ja: '双頭の番犬#{0}。お前たちには到底敵わない相手だ。',
        en: 'You can\'t beat Orthrus the double heads.'
      },
      m2: {
        ja: 'さあ、分かったら引き返せ。',
        en: 'You should go back.'
      }
    }
  }
}
const LANGUAGE = 'ja'
export default (key, variables = []) => {
  const obj = key.split('.').reduce((obj, k) => obj && obj[k], SCRIPTS)
  if (!obj) return 'Missing'
  const text = obj[LANGUAGE]
  const replacedText = variables.reduce((text, v, i) => {
    return text.replace(new RegExp(`\\#\\{${i}\\}`, 'g'), v)
  }, text)
  return replacedText
}

// t('talk.moonshine.m1', ['オルトロス'])
