import defaultState from '../data/defaultState'
const STORAGE_KEY = 'data'
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
    return string ? JSON.parse(string) : null
  }
  save () {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state))
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
