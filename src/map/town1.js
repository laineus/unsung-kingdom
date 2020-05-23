import townChapter0 from '../event/townChapter0'
import townChapter1 from '../event/townChapter1'
import townChapter2 from '../event/townChapter2'
import townChapter3 from '../event/townChapter3'
import townChapter4 from '../event/townChapter4'
import townChapter5 from '../event/townChapter5'
import storage from '../data/storage'
const events = [
  townChapter0,
  townChapter1,
  townChapter2,
  townChapter3,
  townChapter4,
  townChapter5
]
export default {
  name: 'ベリオン王国 - 王都',
  get bgm () {
    return storage.state.chapter === 4 ? 'rain' : 'town'
  },
  create (scene) {
    scene.map.getObjectById(6).setTapEvent(async () => scene.mapChange('room1', (17).toPixel, (16).toPixelCenter, { r: 'up' }))
    const amber = scene.map.getObjectById(2).setDisplayName('噂好きなアンバー婦人').setRandomWalk(true)
    const elliott = scene.map.getObjectById(7).setDisplayName('卑劣なエリオット')
    const max = scene.map.getObjectById(8).setDisplayName('賞金稼ぎのマックス').setRandomWalk(true)
    const annabelle = scene.map.getObjectById(9).setDisplayName('宿屋のアナベル')
    const matilda = scene.map.getObjectById(10).setDisplayName('内気なマチルダ')
    const soldier1 = scene.map.getObjectById(18).setDisplayName('兵士').setVisible(false)
    const soldier2 = scene.map.getObjectById(19).setDisplayName('兵士').setVisible(false)
    const maison = scene.map.getObjectById(11).setDisplayName('メイソン').destroy()
    const area1 = scene.map.getObjectById(12)
    events[scene.storage.state.chapter](scene, { amber, elliott, max, annabelle, matilda, maison, area1, soldier1, soldier2 })
    if (scene.storage.state.chapter === 4) scene.map.rain()
    this.greetings = [
      { chara: amber, message: 'いい天気ね', met: false },
      { chara: elliott, message: 'よう', met: false },
      { chara: max, message: '元気か？', met: false },
      { chara: annabelle, message: 'こんにちは', met: false }
    ]
    this.cp4Tweets = [
      { chara: amber, message: '大変なことになったわ…', met: false },
      { chara: matilda, message: '怖いな…', met: false }

    ]
    scene.map.getObjectById(20).setTapEvent(async () => {
      const cp = scene.storage.state.chapter
      const messages = [
        '市街についての案内が貼り出されている。',
        '森の凶暴なモンスター「レックスベア」の討伐報酬について貼り出されている。',
        '禁酒令の罰則に関して貼り出されている。',
        'レンフィールド家の邸宅が火事になった件について貼り出されている。',
        'ドランゴンの覚醒と討伐隊が結成されたことについて貼り出されている。',
        'エドガー王がドラゴンを倒したことについて貼り出されている。'
      ]
      await scene.talk([
        { chara: 'ann', text: messages[cp] }
      ])
    })
  },
  update (scene) {
    const greetings = scene.storage.state.chapter === 4 ? this.cp4Tweets : this.greetings
    greetings.filter(g => !g.met && g.chara.checkable).forEach(g => {
      g.met = true
      g.chara.tweet(g.message)
    })
  }
}
