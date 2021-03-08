export default class CommonSetting {
  constructor () {
    this.state = this.getDefaultSetting()
    this.initializedLang = this.state.lang
    this.loadSetting()
  }
  loadSetting () {
    const settingString = localStorage.getItem('setting')
    if (!settingString) return
    try {
      const setting = JSON.parse(settingString)
      this.state = setting
      this.initializedLang = setting.lang
    } catch (error) {
    }
  }
  save () {
    const json = JSON.stringify(this.state)
    localStorage.setItem('setting', json)
  }
  getDefaultSetting () {
    const getDefaultLang = () => {
      const nav = window.navigator
      if (nav.languages) return nav.languages[0]
      return nav.language || nav.userLanguage || nav.browserLanguage
    }
    const lang = getDefaultLang().startsWith('ja') ? 'ja' : 'en'
    return {
      bgm: 100,
      se: 100,
      controller: 0,
      lang
    }
  }
}
