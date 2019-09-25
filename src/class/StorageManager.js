import moment from 'moment'
import defaultState from '../data/defaultState'
import { encrypt, decrypt } from '../util/encryption'
const STORAGE_KEY = 'data'
const SHIFT = 11
export default class StorageManager {
  constructor () {
    this.lastNumber = null
    this.setState(defaultState())
  }
  setState (state) {
    this.state = state
  }
  getList () {
    return (6).toArray.map(this.getRow.bind(this))
  }
  getRow (number) {
    const state = this.getSavedState(number)
    return { number, name: number === 0 ? 'Auto Save' : `Data ${number}`, state, exists: Boolean(state) }
  }
  getSavedState (number) {
    const string = localStorage.getItem(`${STORAGE_KEY}_${number}`)
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
  save (number) {
    this.state.saved = moment().unix()
    const str = encrypt(JSON.stringify(this.state), SHIFT)
    localStorage.setItem(`${STORAGE_KEY}_${number}`, str)
    if (number > 0) this.lastNumber = number
    return true
  }
  load (number) {
    const savedData = this.getSavedState(number)
    if (!savedData) return false
    this.setState(savedData)
    this.lastNumber = number
    return true
  }
  delete (number) {
    localStorage.removeItem(`${STORAGE_KEY}_${number}`)
    return true
  }
}
