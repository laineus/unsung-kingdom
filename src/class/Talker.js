export default class {
  constructor (key, name, chara) {
    this.faceKey = key
    this.displayName = name
    this.chara = chara
  }
  get x () {
    return this.chara.x
  }
  get y () {
    return this.chara.y
  }
}
