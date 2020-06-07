export default class ArchiveManager {
  constructor () {}
  initSteam (greenworks) {
    this.steam = greenworks
  }
  activate (name) {
    if (this.steam) {
      this.steam.activateAchievement(name, () => null)
    }
  }
}
