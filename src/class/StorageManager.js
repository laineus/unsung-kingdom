import defaultState from '../data/defaultState'
import { encrypt, decrypt } from '../util/encryption'
const STORAGE_KEY = 'data'
const SHIFT = 11
export default class StorageManager {
  constructor () {
    const loadResult = this.load()
    if (!loadResult) this.setState(defaultState())
  }
  setState (state) {
    this.state = state
  }
  getSavedState () {
    const string = localStorage.getItem(STORAGE_KEY)
    if (!string) return null
    const json = decrypt(string, -SHIFT)
    try {
      return JSON.parse(json)
    } catch (e) {
      this.delete()
      alert('Save data is broken')
      return false
    }
  }
  save () {
    const str = encrypt(JSON.stringify(this.state), SHIFT)
    localStorage.setItem(STORAGE_KEY, str)
    return true
  }
  load () {
    const savedData = this.getSavedState()
    if (!savedData) return false
    this.setState(savedData)
    return true
  }
  delete () {
    localStorage.removeItem(STORAGE_KEY)
    return true
  }
}
