export default class CommonSetting {
  constructor () {
    this.state = this.getDefaultSetting()
  }
  loadSetting () {
    window.appStorage.getItem('setting').then(settingString => {
      if (!settingString) return
      try {
        const setting = JSON.parse(settingString)
        this.state = setting
      } catch (error) {
      }
    })
  }
  save () {
    const json = JSON.stringify(this.state)
    window.appStorage.setItem('setting', json)
  }
  getDefaultSetting () {
    return {
      bgm: 100,
      se: 100,
      controller: 0
    }
  }
}
