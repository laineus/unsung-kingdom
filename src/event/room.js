import chapters from '../data/chapters'

const setDefaultWeapon = state => {
  state.weapons = [{ id: 1, weapon_id: 1 }, { id: 2, weapon_id: 2 }, { id: 3, weapon_id: 1 }]
  state.battlers.forEach((v, i) => (v.weapon = i + 1))
}

export const execChapterBeginEvents = (scene, book) => {
  const chapter = scene.storage.state.chapter
  const state = scene.storage.state.event.chapter_begin
  if (state[chapter]) return setBookEvent(scene, book, chapter)
  scene.francisca.setPosition(655, 440).setR('up').setTarget(null)
  scene.jaquelyn.setPosition(591, 440).setR('up').setTarget(null)
  scene.ui.autoEvent(async () => {
    await events[chapter](scene)
    scene.ui.setChapterCreditFlag(true)
    state[chapter] = true
    setBookEvent(scene, book, chapter)
  })
}

const setBookEvent = (scene, book, chapter) => {
  book.setTapEvent(async () => {
    const scripts = [
      [
        { chara: 'ann', text: t('roomBook.0.0') },
        { chara: 'ann', text: t('roomBook.0.1') }
      ],
      [
        { chara: 'ann', text: t('roomBook.1.0') },
        { chara: 'ann', text: t('roomBook.1.1') }
      ],
      [
        { chara: 'ann', text: t('roomBook.2.0') },
        { chara: 'ann', text: t('roomBook.2.1') }
      ],
      [
        { chara: 'ann', text: t('roomBook.3.0') },
        { chara: 'ann', text: t('roomBook.3.1') }
      ],
      [
        { chara: 'ann', text: t('roomBook.4.0') },
        { chara: 'ann', text: t('roomBook.4.1') },
        { chara: 'ann', text: t('roomBook.4.2') }
      ],
      [
        { chara: 'ann', text: t('roomBook.5.0') },
        { chara: 'ann', text: t('roomBook.5.1') },
        { chara: 'ann', text: t('roomBook.5.2')}
      ]
    ]
    await scene.talk(scripts[chapter])
  })
}

const events = [
  async (scene) => {
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: 'ann', text: t('roomEv.0.0.0') },
      { chara: 'jaquelyn', text: t('roomEv.0.0.1') },
      { chara: 'francisca', text: t('roomEv.0.0.2') },
      { chara: 'francisca', text: t('roomEv.0.0.3') },
      { chara: 'ann', text: t('roomEv.0.0.4') }
    ])
    const i = await scene.select([t('roomEv.0.1.0'), t('roomEv.0.1.1')])
    await scene.talk([
      ...(i === 0 ? [
        { chara: 'ann', text: t('roomEv.0.2.0') },
        { chara: 'jaquelyn', text: t('roomEv.0.2.1')}
      ] : [
        { chara: 'francisca', text: t('roomEv.0.3.0') },
        { chara: 'jaquelyn', text: t('roomEv.0.3.1') },
        { chara: 'jaquelyn', text: t('roomEv.0.3.2') },
        { chara: 'ann', text: t('roomEv.0.3.3') },
        { chara: 'ann', text: t('roomEv.0.3.4') }
      ]),
      { chara: 'ann', text: t('roomEv.0.4.0') },
      { chara: 'jaquelyn', text: t('roomEv.0.4.1') },
      { chara: 'francisca', text: t('roomEv.0.4.2') },
      { chara: 'francisca', text: t('roomEv.0.4.3') },
      { chara: 'ann', text: t('roomEv.0.4.4') },
      { chara: 'francisca', text: t('roomEv.0.4.5') },
      { chara: 'francisca', text: t('roomEv.0.4.6') },
      { chara: 'jaquelyn', text: t('roomEv.0.4.7') },
      { chara: 'jaquelyn', text: t('roomEv.0.4.8') },
      { chara: 'ann', text: t('roomEv.0.4.9') },
      { chara: 'jaquelyn', text: t('roomEv.0.4.10') },
      { chara: 'jaquelyn', text: t('roomEv.0.4.11') },
      { chara: 'ann', text: t('roomEv.0.4.12') },
      { chara: 'francisca', text: t('roomEv.0.4.13') },
      { chara: 'ann', text: t('roomEv.0.4.14') },
      { chara: 'francisca', text: t('roomEv.0.4.15') },
      { chara: 'ann', text: t('roomEv.0.4.16') },
      { chara: 'francisca', text: t('roomEv.0.4.17') },
      { chara: 'francisca', text: t('roomEv.0.4.18') },
      { chara: 'jaquelyn', text: t('roomEv.0.4.19') },
      { chara: 'francisca', text: t('roomEv.0.4.20') },
      { chara: 'francisca', text: t('roomEv.0.4.21') },
      { chara: 'ann', text: t('roomEv.0.4.22') },
      { chara: 'jaquelyn', text: t('roomEv.0.4.23') },
      { chara: 'jaquelyn', text: t('roomEv.0.4.24') }
    ])
    await scene.ui.transition('normal')
    setDefaultWeapon(scene.storage.state)
    if (window.gtag) {
      window.gtag('event', 'point', {
        event_category: 'start_cp0'
      })
    }
  },
  async (scene) => {
    scene.player.setR('down')
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: 'ann', text: t('roomEv.1.0.0') },
      { chara: 'jaquelyn', text: t('roomEv.1.0.1') },
      { chara: 'francisca', text: t('roomEv.1.0.2') },
      { chara: 'jaquelyn', text: t('roomEv.1.0.3') },
      { chara: 'ann', text: t('roomEv.1.0.4') },
      { chara: 'ann', text: t('roomEv.1.0.5') }
    ])
    await scene.ui.sleep(2000)
    await scene.talk([
      { chara: 'ann', text: t('roomEv.1.1.0') },
      { chara: 'ann', text: t('roomEv.1.1.1') },
      { chara: 'jaquelyn', text: t('roomEv.1.1.2') },
      { chara: 'francisca', text: t('roomEv.1.1.3') },
      { chara: 'jaquelyn', text: t('roomEv.1.1.4') },
      { chara: 'ann', text: t('roomEv.1.1.5') },
      { chara: 'francisca', text: t('roomEv.1.1.6') },
      { chara: 'francisca', text: t('roomEv.1.1.7') },
      { chara: 'jaquelyn', text: t('roomEv.1.1.8') },
      { chara: 'ann', text: t('roomEv.1.1.9') },
      { chara: 'francisca', text: t('roomEv.1.1.10') },
      { chara: 'francisca', text: t('roomEv.1.1.11') },
      { chara: 'jaquelyn', text: t('roomEv.1.1.12') },
      { chara: 'ann', text: t('roomEv.1.1.13') },
      { chara: 'jaquelyn', text: t('roomEv.1.1.14') },
      { chara: 'ann', text: t('roomEv.1.1.15') },
      { chara: 'ann', text: t('roomEv.1.1.16') },
      { chara: 'ann', text: t('roomEv.1.1.17') },
      { chara: 'francisca', text: t('roomEv.1.1.18') },
      { chara: 'ann', text: t('roomEv.1.1.19') },
      { chara: 'ann', text: t('roomEv.1.1.20') },
      { chara: 'ann', text: t('roomEv.1.1.21') },
      { chara: 'francisca', text: t('roomEv.1.1.22') },
      { chara: 'ann', text: t('roomEv.1.1.23') },
      { chara: 'jaquelyn', text: t('roomEv.1.1.24') },
      { chara: 'ann', text: t('roomEv.1.1.25') },
      { chara: 'ann', text: t('roomEv.1.1.26') },
      { chara: 'jaquelyn', text: t('roomEv.1.1.27') }
    ])
    await scene.ui.chapterStart(`${chapters[1].name} ${chapters[1].title}`)
    setDefaultWeapon(scene.storage.state)
  },
  async (scene) => {
    scene.player.setR('down')
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: 'ann', text: t('roomEv.2.0.0') },
      { chara: 'jaquelyn', text: t('roomEv.2.0.1') },
      { chara: 'ann', text: t('roomEv.2.0.2') },
      { chara: 'ann', text: t('roomEv.2.0.3') },
      { chara: 'ann', text: t('roomEv.2.0.4') },
      { chara: 'ann', text: t('roomEv.2.0.5') },
      { chara: 'francisca', text: t('roomEv.2.0.6') },
      { chara: 'jaquelyn', text: t('roomEv.2.0.7') },
      { chara: 'jaquelyn', text: t('roomEv.2.0.8') },
      { chara: 'ann', text: t('roomEv.2.0.9') },
      { chara: 'ann', text: t('roomEv.2.0.10') },
      { chara: 'ann', text: t('roomEv.2.0.11') },
      { chara: 'ann', text: t('roomEv.2.0.12') },
      { chara: 'ann', text: t('roomEv.2.0.13') },
      { chara: 'francisca', text: t('roomEv.2.0.14') },
      { chara: 'ann', text: t('roomEv.2.0.15') },
      { chara: 'ann', text: t('roomEv.2.0.16') },
      { chara: 'ann', text: t('roomEv.2.0.17') },
      { chara: 'francisca', text: t('roomEv.2.0.18') },
      { chara: 'jaquelyn', text: t('roomEv.2.0.19') },
      { chara: 'ann', text: t('roomEv.2.0.20') },
      { chara: 'ann', text: t('roomEv.2.0.21') },
      { chara: 'jaquelyn', text: t('roomEv.2.0.22') },
      { chara: 'ann', text: t('roomEv.2.0.23') },
      { chara: 'ann', text: t('roomEv.2.0.24') },
      { chara: 'ann', text: t('roomEv.2.0.25') },
      { chara: 'ann', text: t('roomEv.2.0.26') },
      { chara: 'jaquelyn', text: t('roomEv.2.0.27') },
      { chara: 'francisca', text: t('roomEv.2.0.28') },
      { chara: 'jaquelyn', text: t('roomEv.2.0.29') },
      { chara: 'ann', text: t('roomEv.2.0.30') },
      { chara: 'francisca', text: t('roomEv.2.0.31') },
      { chara: 'jaquelyn', text: t('roomEv.2.0.32') },
      { chara: 'ann', text: t('roomEv.2.0.33') },
      { chara: 'ann', text: t('roomEv.2.0.34') },
      { chara: 'ann', text: t('roomEv.2.0.35') },
      { chara: 'francisca', text: t('roomEv.2.0.36') },
      { chara: 'francisca', text: t('roomEv.2.0.37') },
      { chara: 'ann', text: t('roomEv.2.0.38') },
      { chara: 'ann', text: t('roomEv.2.0.39') }
    ])
    await scene.ui.chapterStart(`${chapters[2].name} ${chapters[2].title}`)
  },
  async (scene) => {
    scene.player.setR('down')
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: 'francisca', text: t('roomEv.3.0.0') },
      { chara: 'francisca', text: t('roomEv.3.0.1') },
      { chara: 'ann', text: t('roomEv.3.0.2') },
      { chara: 'jaquelyn', text: t('roomEv.3.0.3') },
      { chara: 'ann', text: t('roomEv.3.0.4') },
      { chara: 'ann', text: t('roomEv.3.0.5') },
      { chara: 'ann', text: t('roomEv.3.0.6') },
      { chara: 'ann', text: t('roomEv.3.0.7') },
      { chara: 'francisca', text: t('roomEv.3.0.8') },
      { chara: 'jaquelyn', text: t('roomEv.3.0.9') },
      { chara: 'jaquelyn', text: t('roomEv.3.0.10') },
      { chara: 'ann', text: t('roomEv.3.0.11') },
      { chara: 'francisca', text: t('roomEv.3.0.12') },
      { chara: 'jaquelyn', text: t('roomEv.3.0.13') },
      { chara: 'ann', text: t('roomEv.3.0.14') },
      { chara: 'ann', text: t('roomEv.3.0.15') },
      { chara: 'ann', text: t('roomEv.3.0.16') },
      { chara: 'ann', text: t('roomEv.3.0.17') },
      { chara: 'jaquelyn', text: t('roomEv.3.0.18') },
      { chara: 'francisca', text: t('roomEv.3.0.19') },
      { chara: 'ann', text: t('roomEv.3.0.20') },
      { chara: 'ann', text: t('roomEv.3.0.21') },
      { chara: 'jaquelyn', text: t('roomEv.3.0.22') },
      { chara: 'jaquelyn', text: t('roomEv.3.0.23') },
      { chara: 'ann', text: t('roomEv.3.0.24') },
      { chara: 'ann', text: t('roomEv.3.0.25') },
      { chara: 'francisca', text: t('roomEv.3.0.26') },
      { chara: 'ann', text: t('roomEv.3.0.27') },
      { chara: 'ann', text: t('roomEv.3.0.28') },
      { chara: 'ann', text: t('roomEv.3.0.29') }
    ])
    await scene.ui.chapterStart(`${chapters[3].name} ${chapters[3].title}`)
  },
  async (scene) => {
    scene.player.setR('down')
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: 'jaquelyn', text: t('roomEv.4.0.0') },
      { chara: 'ann', text: t('roomEv.4.0.1') },
      { chara: 'francisca', text: t('roomEv.4.0.2') },
      { chara: 'francisca', text: t('roomEv.4.0.3') },
      { chara: 'ann', text: t('roomEv.4.0.4') },
      { chara: 'francisca', text: t('roomEv.4.0.5') },
      { chara: 'ann', text: t('roomEv.4.0.6') },
      { chara: 'jaquelyn', text: t('roomEv.4.0.7') },
      { chara: 'ann', text: t('roomEv.4.0.8') },
      { chara: 'ann', text: t('roomEv.4.0.9') },
      { chara: 'ann', text: t('roomEv.4.0.10') },
      { chara: 'ann', text: t('roomEv.4.0.11') },
      { chara: 'ann', text: t('roomEv.4.0.12') },
      { chara: 'jaquelyn', text: t('roomEv.4.0.13') },
      { chara: 'jaquelyn', text: t('roomEv.4.0.14') },
      { chara: 'ann', text: t('roomEv.4.0.15') },
      { chara: 'ann', text: t('roomEv.4.0.16') },
      { chara: 'francisca', text: t('roomEv.4.0.17') },
      { chara: 'francisca', text: t('roomEv.4.0.18') },
      { chara: 'francisca', text: t('roomEv.4.0.19') },
      { chara: 'ann', text: t('roomEv.4.0.20') },
      { chara: 'ann', text: t('roomEv.4.0.21') },
      { chara: 'ann', text: t('roomEv.4.0.22') }
    ])
    await scene.ui.chapterStart(`${chapters[4].name} ${chapters[4].title}`)
  },
  async (scene) => {
    scene.player.setR('down')
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: 'ann', text: t('roomEv.5.0.0') },
      { chara: 'francisca', text: t('roomEv.5.0.1') },
      { chara: 'jaquelyn', text: t('roomEv.5.0.2') },
      { chara: 'ann', text: t('roomEv.5.0.3') },
      { chara: 'francisca', text: t('roomEv.5.0.4') },
      { chara: 'jaquelyn', text: t('roomEv.5.0.5') },
      { chara: 'ann', text: t('roomEv.5.0.6') },
      { chara: 'ann', text: t('roomEv.5.0.7') },
      { chara: 'ann', text: t('roomEv.5.0.8') },
      { chara: 'ann', text: t('roomEv.5.0.9') },
      { chara: 'ann', text: t('roomEv.5.0.10') },
      { chara: 'ann', text: t('roomEv.5.0.1') },
      { chara: 'ann', text: t('roomEv.5.0.12') },
      { chara: 'ann', text: t('roomEv.5.0.13') },
      { chara: 'francisca', text: t('roomEv.5.0.14') },
      { chara: 'jaquelyn', text: t('roomEv.5.0.15') },
      { chara: 'francisca', text: t('roomEv.5.0.16') },
      { chara: 'ann', text: t('roomEv.5.0.17') },
      { chara: 'ann', text: t('roomEv.5.0.18') },
      { chara: 'jaquelyn', text: t('roomEv.5.0.19') },
      { chara: 'jaquelyn', text: t('roomEv.5.0.20') },
      { chara: 'ann', text: t('roomEv.5.0.21') },
      { chara: 'ann', text: t('roomEv.5.0.22') },
      { chara: 'ann', text: t('roomEv.5.0.23') },
      { chara: 'francisca', text: t('roomEv.5.0.24') },
      { chara: 'ann', text: t('roomEv.5.0.25') },
      { chara: 'jaquelyn', text: t('roomEv.5.0.26') },
      { chara: 'ann', text: t('roomEv.5.0.27') },
      { chara: 'ann', text: t('roomEv.5.0.28') },
      { chara: 'francisca', text: t('roomEv.5.0.29') },
      { chara: 'jaquelyn', text: t('roomEv.5.0.30') },
      { chara: 'ann', text: t('roomEv.5.0.31') },
      { chara: 'jaquelyn', text: t('roomEv.5.0.32') },
      { chara: 'jaquelyn', text: t('roomEv.5.0.33') },
      { chara: 'ann', text: t('roomEv.5.0.34') },
      { chara: 'ann', text: t('roomEv.5.0.35') },
      { chara: 'francisca', text: t('roomEv.5.0.36') },
      { chara: 'jaquelyn', text: t('roomEv.5.0.37') },
      { chara: 'ann', text: t('roomEv.5.0.38') }
    ])
    await scene.ui.chapterStart(`${chapters[5].name} ${chapters[5].title}`)
  }
]
