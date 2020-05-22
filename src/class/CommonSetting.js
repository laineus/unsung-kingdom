export default class CommonSetting {
  constructor () {
    this.state = this.getSetting()
  }
  getSetting () {
    const settingString = localStorage.getItem('setting')
    if (!settingString) return this.getDefaultSetting()
    try {
      return JSON.parse(settingString)
    } catch (error) {
      return this.getDefaultSetting()
    }
  }
  save () {
    const json = JSON.stringify(this.state)
    localStorage.setItem('setting', json)
  }
  getDefaultSetting () {
    return {
      bgm: 100,
      se: 100,
      controller: 0
    }
  }
}
