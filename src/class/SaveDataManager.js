import moment from 'moment'
import defaultState from '../data/defaultState'
import { encrypt, decrypt } from '../util/encryption'
const STORAGE_KEY = 'data'
// const SHIFT = 11
const SHIFT = 0
export default class SaveDataManager {
  constructor () {
    this.lastNumber = null
    this.init()
  }
  init () {
    this.lastSnapshot = null
    this.setState(defaultState())
  }
  loadSetting () {
    window.appStorage.getItem(`${STORAGE_KEY}_last_saved_number`).then(savedNumber => {
      if (savedNumber) this.lastNumber = Number(savedNumber)
    })
  }
  setState (state) {
    this.state = state
  }
  async getList () {
    const promises = (9).toArray().map(this.getRow.bind(this))
    return Promise.all(promises)
  }
  async getRow (number) {
    const state = await this.getSavedState(number)
    const snapshot = await this.getSnapshot(number)
    return {
      number,
      name: number === 0 ? 'Auto Save' : `Data ${number}`,
      state,
      snapshot,
      exists: Boolean(state)
    }
  }
  async getSavedState (number) {
    const string = await window.appStorage.getItem(`${STORAGE_KEY}_${number}`)
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
  async getSnapshot (number) {
    return window.appStorage.getItem(`${STORAGE_KEY}_${number}_ss`)
  }
  async save (number) {
    const promises = []
    this.state.saved = moment().unix()
    const str = encrypt(JSON.stringify(this.state), SHIFT)
    promises.push(window.appStorage.setItem(`${STORAGE_KEY}_${number}`, str))
    if (this.lastSnapshot) promises.push(window.appStorage.setItem(`${STORAGE_KEY}_${number}_ss`, this.lastSnapshot))
    if (number > 0) this.lastNumber = number
    promises.push(window.appStorage.setItem(`${STORAGE_KEY}_last_saved_number`, String(number)))
    return Promise.all(promises)
  }
  async load (number) {
    const savedData = await this.getSavedState(number)
    if (!savedData) return false
    this.setState(savedData)
    this.lastNumber = number
    return true
  }
  delete (number) {
    window.appStorage.removeItem(`${STORAGE_KEY}_${number}`)
    window.appStorage.removeItem(`${STORAGE_KEY}_${number}_ss`)
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
    return data
  }
}
