import generateBattler from '../util/generateBattler'
const scriptsForSoldiers = [
  [
    'ドラゴンは…、我々が想定していたよりもずっと強力だった…。'
  ],
  [
    '十年前、王はどうやってアイツに勝ったというのだ…。'
  ],
  [
    '王を助けに行きたいが…、体が動いてくれない…。'
  ]
]
export const ethelbald = (scene, ethel, soldiers) => {
  const state = scene.storage.state.event.m4_5
  soldiers.forEach((v, i) => {
    if (state.completed) return v.destroy()
    v.setDisplayName('負傷した兵士').setTapEvent(async chara => {
      await scene.talk(scriptsForSoldiers[i].map(text => ({ chara, text })))
    })
  })
  if (state.completed) {
    return ethel.destroy()
  }
  ethel.setDisplayName('王弟エゼルバルド').setTapEvent(async chara => {
    if (state.started) {
      await scene.talk([
        { chara: 'ann', text: 'あの、どこかで会ったことないです…？' },
        { chara, text: '無駄話をしている場合ではないはずだ。' }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: '大丈夫ですか！？' },
        { chara, text: 'お前たちは…。' },
        { chara: 'ann', text: 'ドラゴンにやられたんですね？' },
        { chara, text: 'そうだ…。' },
        { chara, text: '兄を…、' },
        { chara, text: 'エドガーを助けに来たのか？' },
        { chara: 'ann', text: 'はい。' },
        { chara: 'ann', text: 'あなたは、王弟？' },
        { chara, text: '俺のことはいい。' },
        { chara, text: 'エドガーと、ドラゴンはこの先だ、' },
        { chara: 'ann', text: 'でも、ひどい傷、' },
        { chara, text: '構うな。' },
        { chara, text: '彼は今、独りで戦っている。' },
        { chara, text: '兄を…、' },
        { chara, text: '兄を頼む…。' }
      ])
      scene.ui.missionUpdate('m4_5')
      state.started = true
    }
  })
}

export const gateConfirm = (scene, gate) => {
  const state = scene.storage.state.event.m4_5
  if (state.area1) return
  gate.setBlocked(async go => {
    await scene.talk([
      { chara: 'francisca', text: 'この先が最深部みたいだけど。' }
    ])
    const i = await scene.select(['先に進む', 'やめておく'])
    if (i === 1) return
    go()
  })
}

export const dragon = (scene, sonberk, king, area1, area2, area3) => {
  const state = scene.storage.state.event.m4_5
  if (state.area1) {
    area1.destroy()
  }
  if (state.area2) {
    king.y += (3).toPixel
    area2.destroy()
  }
  if (state.completed) {
    return [sonberk, king, area3].forEach(v => v.destroy())
  }
  king.setDisplayName('エドガー王')
  sonberk.setDisplayName('ソンベルク')
  area1.setEvent(async () => {
    scene.player.tweet('！')
    await scene.ui.sleep(800)
    await scene.camera.look((16).toPixelCenter, (9).toPixelCenter, 800)
    await scene.talk([
      { chara: sonberk, text: 'エドガーよ、貴様自ら現れるとは、良い度胸だ。' },
      { chara: sonberk, text: 'この俺を十年も封じておきながら、ただで帰れるとは思っていまいな。' },
      { chara: sonberk, text: 'それとも、十年前のように俺を倒せるとでも思っているのか？' },
      { chara: king, text: 'そこまで慢心してはおらん。' },
      { chara: king, text: 'ソンベルクよ、一つ聞かせてくれ。' },
      { chara: king, text: '今ここで私の首を差し出せば、お前の怒りは鎮まるか？' },
      { chara: sonberk, text: 'この期に及んで貴様の王国を心配しているな？' },
      { chara: sonberk, text: '安心しろ。' },
      { chara: sonberk, text: '貴様が今ここにいること、' },
      { chara: sonberk, text: '弟のエゼルバルドは約束を果たしたも同然。' },
      { chara: sonberk, text: '約束通り貴様の首で王国のことは見逃してやろう。' },
      { chara: king, text: 'そうか。' },
      { chara: king, text: '弟とどのような交渉をしたのかは存ぜぬが、それこそ私の望むところだ。' },
      { chara: king, text: 'さあ、気の済むまで私を焼くがよい。' }
    ], { angle: false })
    await scene.camera.revert(600)
    state.area1 = true
    area1.destroy()
  })
  area2.setEvent(async () => {
    const red = scene.add.rectangle(0, 0, scene.map.width, scene.map.height, 0xCC2200)
    red.setAlpha(0).setBlendMode(Phaser.BlendModes.OVERLAY).setDepth(140000).setOrigin(0, 0)
    scene.add.tween({
      targets: red,
      duration: 700,
      ease: 'Power2',
      alpha: 1,
      yoyo: true,
      onComplete () {
        red.destroy()
      }
    })
    await new Promise(resolve => scene.camera.shake(1000, 0.03, undefined, resolve))
    await scene.talk([
      { chara: king, text: 'ぐわっ！' },
      { chara: 'ann', text: '！' },
      { chara: 'ann', text: '急がないと！' }
    ], { angle: false })
    king.y += (3).toPixel
    king.initImage('king2')
    state.area2 = true
    area2.destroy()
  })
  area3.setEvent(async () => {
    const chara = sonberk
    scene.jaquelyn.setAllowWalkingWhileEvent(true).setTargetPosition((16).toPixelCenter, (16).toPixelCenter)
    scene.francisca.setAllowWalkingWhileEvent(true).setTargetPosition((18).toPixelCenter, (16).toPixelCenter)
    await scene.player.setTargetPosition((17).toPixelCenter, (15).toPixel)
    scene.player.setR('left')
    await scene.talk([
      { chara: king, text: '…。' },
      { chara: 'ann', text: '大丈夫、気を失ってるだけ…！' }
    ], { angle: false })
    await scene.camera.look((16).toPixelCenter, (9).toPixelCenter, 400)
    scene.jaquelyn.setTargetPosition((16).toPixelCenter, (13).toPixelCenter)
    scene.francisca.setTargetPosition((18).toPixelCenter, (13).toPixelCenter)
    await scene.player.setTargetPosition((17).toPixelCenter, (12).toPixelCenter)
    await scene.talk([
      { chara: 'ann', text: 'ソンベルク！覚悟しなさい！' },
      { chara, text: '誰だ？' },
      { chara, text: '騎士共の生き残りじゃないな。' },
      { chara: 'ann', text: '私たちはただの市民。' },
      { chara, text: 'ただの市民がなんの用だ。' },
      { chara, text: '王を助けに来たとでも言うのか？' },
      { chara: 'ann', text: 'その通りよ！' },
      { chara, text: 'ナメられたものだ。小娘ごときに何ができる？' },
      { chara: 'ann', text: 'あなたを倒す。' },
      { chara: 'ann', text: 'この剣でね。' },
      { chara, text: 'その剣は…、' },
      { chara, text: '知っているぞ。' },
      { chara, text: '何故お前たちが持っている？' },
      { chara, text: 'まあいい。' },
      { chara, text: '小娘ごときが剣を手にしたから何だという。' },
      { chara, text: '立ち去る気がないのなら相手になってやろう。' },
      { chara, text: '来い！' }
    ])
    await scene.player.setTargetPosition((17).toPixel, (11).toPixel)
    const result = await scene.ui.battle([generateBattler('dragon', 48, { hp: 2500 })], { boss: true, bgm: 'battle3' })
    if (!result) return
    window.archiveManager.activate('sonberk')
    scene.francisca.setAllowWalkingWhileEvent(false).stopWalk().setPosition(scene.player.x + 40, scene.player.y + 27).setR('up')
    scene.jaquelyn.setAllowWalkingWhileEvent(false).stopWalk().setPosition(scene.player.x + 20, scene.player.y + 70).setR('up')
    await scene.ui.sleep(200)
    const red = scene.add.rectangle(0, 0, scene.map.width, scene.map.height, 0xCC8844)
    red.setAlpha(0).setBlendMode(Phaser.BlendModes.OVERLAY).setDepth(140000).setOrigin(0, 0)
    scene.add.tween({
      targets: red, duration: 1200, ease: 'Power2', alpha: 1, yoyo: true,
      onComplete () {
        red.destroy()
      }
    })
    scene.camera.shake(2000, 0.03)
    await scene.ui.sleep(1800)
    await sonberk.die()
    await scene.ui.sleep(300)
    await scene.camera.look(0, (3).toPixelCenter, 400, true)
    await scene.talk([
      { chara: 'ann', text: 'やった！倒した！' },
      { chara: 'jaquelyn', text: 'やったわね、アン。' },
      { chara: 'francisca', text: 'なんとかね。' }
    ])
    scene.player.setR('down')
    scene.francisca.setR('left')
    await scene.talk([
      { chara: 'ann', text: 'よし、早く王や騎士団の皆を助けないと！' },
      { chara: 'jaquelyn', text: 'そうね。' },
      { chara: 'francisca', text: '後片付けが終わったら、私たちはさっさと姿を消そう。' },
      { chara: 'ann', text: 'オーケー！' }
    ])
    scene.ui.missionUpdate('m4_5', true)
    state.completed = true
    await scene.ui.sleep(800)
    scene.storage.state.chapter = 5
    await scene.mapChange('room1', (19).toPixelCenter, (11).toPixel, { speed: 'slow' })
  })
}
