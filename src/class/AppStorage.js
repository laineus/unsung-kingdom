export default class AppStorage {
  constructor () {
    this.initLocalStorage()
  }
  initLocalStorage () {
    this.localStorage = {
      getItem: async (name) => {
        return localStorage.getItem(name)
      },
      setItem: async (name, body) => {
        return localStorage.setItem(name, body)
      },
      removeItem: async (name) => {
        return localStorage.removeItem(name)
      }
    }
  }
  initSteam (greenworks) {
    this.steam = greenworks
    this.steamStorage = {
      getItem: (name) => {
        return new Promise((resolve, reject) => greenworks.readTextFromFile(name, resolve, reject)).catch(() => {
          return this.localStorage.getItem(name)
        })
      },
      setItem: (name, body) => {
        return new Promise((resolve, reject) => greenworks.saveTextToFile(name, body, resolve, reject)).catch(() => {
          return this.localStorage.setItem(name, body)
        })
      },
      removeItem: (name) => {
        return new Promise((resolve, reject) => greenworks.deleteFile(name, resolve, reject)).catch(() => {
          return this.localStorage.removeItem(name)
        })
      }
    }
  }
  getAvailableStorage () {
    if (this.steam && this.steam.isCloudEnabledForUser() && this.steam.isCloudEnabled()) {
      return this.steamStorage
    }
    return this.localStorage
  }
  async getItem (name) {
    const storage = this.getAvailableStorage()
    return storage.getItem(name)
  }
  async setItem (name, body) {
    const storage = this.getAvailableStorage()
    return storage.setItem(name, body)
  }
  async removeItem (name) {
    const storage = this.getAvailableStorage()
    return storage.removeItem(name)
  }
}
