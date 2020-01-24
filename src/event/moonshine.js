import generateBattler from '../util/generateBattler'
export const dionysus = (scene, dionysus, area, gate) => {
  if (!scene.storage.state.event.m2_1.completed || scene.storage.state.event.m2_4.jack) {
    dionysus.destroy()
    return
  }
  const state = scene.storage.state.event.m2_3
  const chara = dionysus.setDisplayName('ディオニューソス')
  dionysus.setSpeed(180)
  const origin = { x: dionysus.x, y: dionysus.y }
  gate.setActive(state.started)
  area.setEvent(async () => {
    await scene.talk([
      { chara, text: 'おい、本気で行く気かよ？' },
      { chara, text: 'やめとけって。' },
      { chara, text: '死んじまうぞ？' },
      { chara: 'ann', text: 'そう言われても。' },
      { chara, text: '若い女の死体なんか見たくねえぞ。' },
      { chara: 'ann', text: 'じゃあどうすればいいの？' },
      { chara, text: 'うーん…。' },
      { chara, text: 'よし、ちょっと危険だが案がある。' },
      { chara, text: '協力しようじゃないか。' },
      { chara: 'ann', text: '案？' },
      { chara, text: 'ああ。' },
      { chara, text: '俺がオルトロスの野郎を「倒しやすく」してやる。' },
      { chara: 'ann', text: 'どうやって？' },
      { chara, text: 'まあそれは任せとけ。' },
      { chara, text: 'だが必ず倒せよ。俺も身を削るんだからな。' },
      { chara, text: 'よし、じゃあちょっと待ってろ。' }
    ])
    await dionysus.setTargetPosition((8).toPixelCenter, (0).toPixelCenter)
    dionysus.setVisible(false)
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'jaquelyn', text: '行っちゃったわ。' },
      { chara: 'ann', text: '酒樽担いで行ったけど、どうするつもりだろう？' }
    ])
    await scene.ui.transition('slow')
    await scene.ui.sleep(500)
    dionysus.setR('down').setVisible(true)
    await scene.ui.sleep(500)
    await dionysus.setTargetPosition(origin.x, origin.y)
    await scene.talk([
      { chara, text: 'よしよし！やってきたぞ！' },
      { chara, text: 'いい感じだ！' },
      { chara: 'ann', text: '何をしてきたの？' },
      { chara, text: 'ヤツに酒を飲ませたのさ。' },
      { chara, text: '1バレルきっちり飲んでヘロヘロしてやがるぜ。' },
      { chara, text: '今日の分の酒は失ったが、アイツがくたばるなら長い目で見て得ってもんだ。' },
      { chara, text: 'さあ、行ってこい。' }
    ])
    state.started = true
    area.setActive(false)
    gate.setActive(true)
    scene.ui.missionUpdate('m2_3')
  }).setActive(state.talked && !state.started)
  dionysus.setTapEvent(async () => {
    if (state.completed) {
      await scene.talk([
        { chara, text: 'じゃあな、気をつけるんだぞ。' }
      ])
    } else if (state.solved) {
      await scene.talk([
        { chara, text: '無事か！' },
        { chara, text: '倒したんだな？' },
        { chara, text: 'やるじゃないか！' },
        { chara, text: 'これでもうアイツに怯えなくて済むんだな。' },
        { chara, text: 'よっしゃ、あんたらにこれをやるよ。' }
      ])
      scene.ui.increaseWeapon(7)
      await scene.talk([
        { chara, text: '俺が持ってるより役に立つだろう。' },
        { chara: 'ann', text: 'ありがとう！' },
        { chara, text: 'さ、じゃあまたな譲ちゃんたち。' }
      ])
      state.completed = true
      scene.ui.missionUpdate('m2_3', true)
    } else if (state.started) {
      await scene.talk([
        { chara, text: 'オルトロスは泥酔してヘロヘロだぜ。' },
        { chara, text: 'さあ、今のうちに倒してこい。' }
      ])
    } else if (state.talked) {
      await scene.talk([
        { chara, text: '双頭の番犬オルトロス。お前たちには到底敵わない相手だ。' },
        { chara, text: 'さあ、分かったら引き返せ。' }
      ])
    } else {
      await scene.talk([
        { chara, text: 'うわ！誰だお前たち？' },
        { chara, text: '何でここにいる？' },
        { chara: 'ann', text: 'そういうあなたこそ誰？' },
        { chara: 'ann', text: '密造酒を運び込む怪しいやつがいるって聞いたけど、あなたたちね？' },
        { chara, text: 'ち、違う。' },
        { chara: 'ann', text: 'じゃあその樽には何が入っているの？' },
        { chara, text: '…。' },
        { chara, text: 'あーあーそうだよ。これは酒だ。' },
        { chara: 'ann', text: 'やっぱり。' },
        { chara, text: '俺を城の人間に付き出そうってのか？' },
        { chara, text: '望みはなんだってんだ？' },
        { chara: 'ann', text: 'そういうわけじゃないんだけど…、' },
        { chara: 'ann', text: '詳しい話を教えてもらえない？' },
        { chara: 'ann', text: 'この地下通路のことでも、城のことでも。' },
        { chara, text: 'なんだ、城の関係者かと思って焦ったじゃねえかよ。' },
        { chara, text: '知っていると思うが、この地下通路は王城に繋がっている。' },
        { chara, text: '最奥まで進むと扉があって、その先は城の貯蔵庫だ。' },
        { chara: 'ann', text: 'お酒はお城に届けるの？' },
        { chara, text: 'ああ。密造酒は城の奴らと取引している。' },
        { chara, text: '毎日1バレルを地下通路の最奥まで運んで、' },
        { chara, text: '20バレル貯まった日の夜に、城内の人間が最後の扉を開放し、酒を搬入する。' },
        { chara: 'francisca', text: '城内に繋がる最後の扉は城の内側からしか開かないということ？' },
        { chara, text: 'そうだ。' },
        { chara, text: 'なんだ、城に侵入しようってのか？' },
        { chara, text: '扉の心配なんかしなくても、まずこの次の部屋を抜けられないと思うぜ。' },
        { chara: 'ann', text: 'どうして？' },
        { chara, text: 'この先はオルトロスが道を塞いでいる。' },
        { chara, text: '食い殺されて終わりだな。' },
        { chara: 'ann', text: 'オルトロス？' },
        { chara, text: 'ああ。双頭の番犬オルトロス。お前たちには到底敵わない相手だ。' },
        { chara, text: '俺はいつも奴が眠るのを待ってからこっそり通り抜けるんだ。' },
        { chara, text: 'さあ、分かったら引き返せ。' }
      ])
      state.talked = true
      area.setActive(true)
    }
  })
}

export const orthrus = (scene, boss, area) => {
  const state = scene.storage.state.event.m2_3
  if (state.solved) {
    area.destroy()
    boss.destroy()
    return
  }
  area.setEvent(async () => {
    if (state.started) {
      await scene.talk([
        { chara: 'ann', text: 'こいつがオルトロスね。' },
        { chara: 'ann', text: 'さあみんな、行くよ！' }
      ])
      await scene.ui.sleep(500)
      const result = await scene.ui.battle([generateBattler('bear', 1, { hp: 1 })], { boss: true })
      if (!result) return
      area.destroy()
      boss.destroy()
      await scene.ui.sleep(500)
      await scene.talk([
        { chara: 'ann', text: 'なんとか倒したね。' },
        { chara: 'jaquelyn', text: '密売人に報告しに行きましょう。' }
      ])
      state.solved = true
    } else {
      await scene.talk([
        { chara: 'ann', text: 'わ、このモンスター、凄く強そう！' },
        { chara: 'jaquelyn', text: 'そうね、とても敵わなそう…。' },
        { chara: 'francisca', text: '一旦出直して倒す方法を検討しよう。' }
      ])
      await scene.ui.transition('fast')
      scene.player.setPosition(scene.player.x, (22).toPixelCenter).setR('down')
    }
  })
}
