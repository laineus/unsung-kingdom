import moment from 'moment'
import defaultState from '../data/defaultState'
import { encrypt, decrypt } from '../util/encryption'
const STORAGE_KEY = 'data'
// const SHIFT = 11
const SHIFT = 0
export default class StorageManager {
  constructor () {
    const savedNumber = localStorage.getItem(`${STORAGE_KEY}_last_saved_number`)
    this.lastNumber = savedNumber ? Number(savedNumber) : null
    this.lastSnapshot = null
    this.setState(defaultState())
  }
  setState (state) {
    this.state = state
  }
  getList () {
    return (9).toArray().map(this.getRow.bind(this))
  }
  getRow (number) {
    const state = this.getSavedState(number)
    const snapshot = this.getSnapshot(number)
    return {
      number,
      name: number === 0 ? 'Auto Save' : `Data ${number}`,
      state,
      snapshot,
      exists: Boolean(state)
    }
  }
  getSavedState (number) {
    const string = localStorage.getItem(`${STORAGE_KEY}_${number}`)
    if (!string) return null
    const json = decrypt(string, -SHIFT)
    try {
      const state = JSON.parse(json)
      this.fixState(state)
      return state
    } catch (e) {
      this.delete(number)
      alert('Save data is broken')
      return false
    }
  }
  getSnapshot (number) {
    return localStorage.getItem(`${STORAGE_KEY}_${number}_ss`)
  }
  save (number) {
    this.state.saved = moment().unix()
    const str = encrypt(JSON.stringify(this.state), SHIFT)
    localStorage.setItem(`${STORAGE_KEY}_${number}`, str)
    if (this.lastSnapshot) localStorage.setItem(`${STORAGE_KEY}_${number}_ss`, this.lastSnapshot)
    if (number > 0) this.lastNumber = number
    localStorage.setItem(`${STORAGE_KEY}_last_saved_number`, number)
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
    localStorage.removeItem(`${STORAGE_KEY}_${number}_ss`)
    return true
  }
  fixState (data) {
    const row = (origin, data) => {
      const originKeys = Object.keys(origin)
      const dataKeys = Object.keys(data)
      const shouldBeAdded = originKeys.filter(k => !dataKeys.includes(k))
      const shouldBeDeleted = dataKeys.filter(k => !originKeys.includes(k))
      const shouldContinueToFix = dataKeys.filter(k => originKeys.includes(k) && data[k] && Object.isObject(data[k]))
      if (shouldBeAdded.length) console.log('add: ', shouldBeAdded.join(', '))
      if (shouldBeDeleted.length) console.log('delete: ', shouldBeDeleted.join(', '))
      shouldBeAdded.forEach(k => data[k] = JSON.parse(JSON.stringify(origin[k])))
      shouldBeDeleted.forEach(k => delete data[k])
      shouldContinueToFix.forEach(k => row(origin[k], data[k]))
    }
    row(defaultState(), data)
    // TODO: delete
    data.battlers.filter(v => ('maxHp' in v)).forEach(v => {
      v.max_hp = v.maxHp
      delete v.maxHp
    })
  }
}
