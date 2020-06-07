export default class ArchiveManager {
  constructor () {}
  initSteam (steam) {
    this.steam = steam
  }
  activate (name) {
    if (this.steam) {
      this.steam.activateAchievement(name, () => null)
    }
  }
}
