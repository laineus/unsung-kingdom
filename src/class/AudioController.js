import setting from '../data/setting'
export default class {
  constructor (scene) {
    this.scene = scene
    this.setting = setting
    this.currentBgm = null
    this.sceneVolume = 1
  }
  get seVolume () {
    return this.setting.state.se / 100
  }
  se (name) {
    this.scene.sound.play(`se/${name}`, { volume: this.seVolume })
  }
  get bgmVolume () {
    return this.setting.state.bgm / 100
  }
  updateBgmVolume () {
    this.scene.sound.sounds.filter(sound => sound.key.startsWith('bgm')).forEach(bgm => {
      bgm.volume = this.bgmVolume * this.sceneVolume
    })
  }
  setSceneVolume (volume) {
    this.sceneVolume = volume
    this.updateBgmVolume()
  }
  setBgm (name) {
    if (!name) {
      this.currentBgm = null
      this.scene.sound.stopAll()
      return
    }
    const key = `bgm/${name}`
    if (this.currentBgm && this.currentBgm.key === key) return
    if (this.currentBgm) this.currentBgm.stop()
    this.currentBgm = this.scene.sound.add(key, { loop: true, volume: this.bgmVolume })
    this.currentBgm.play()
  }
  interruptBgm (name) {
    const key = `bgm/${name}`
    if (this.currentBgm) {
      if (this.currentBgm.key === key) return () => null
      this.currentBgm.pause()
    }
    const bgm = this.scene.sound.add(key, { loop: true, volume: this.bgmVolume, duration: 200 })
    bgm.play()
    const resolve = () => {
      if (this.currentBgm) {
        this.currentBgm.resume()
        this.currentBgm.setVolume(0)
        this.scene.add.tween({ targets: this.currentBgm, volume: this.bgmVolume, duration: 2000 })
      }
      this.scene.add.tween({ targets: bgm, volume: 0, duration: 500, onComplete: () => {
        if (bgm.isPlaying) bgm.stop()
      } })
    }
    return resolve
  }
}
