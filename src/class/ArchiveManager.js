export default class ArchiveManager {
  initGtag (gtag) {
    this.gtag = gtag
  }
  initSteam (greenworks) {
    this.steam = greenworks
  }
  activate (name) {
    if (this.steam) {
      this.steam.activateAchievement(name, () => null)
    }
    if (this.gtag) {
      this.gtag('event', 'archive', {
        event_category: name
      })
    }
  }
}
