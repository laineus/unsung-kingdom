import generateBattler from '../util/generateBattler'
import Talker from '../class/Talker'
export const jack = (scene, jack, area) => {
  const state = scene.storage.state.event.m2_4
  if (!scene.storage.state.event.m2_1.completed || state.jack) {
    jack.destroy()
    area.destroy()
    return
  }
  const chara = jack.setDisplayName('ジャック')
  area.setEvent(async () => {
    await jack.setSpeed(140).setTargetPosition(jack.x, jack.y + (9).toPixel)
    await scene.talk([
      { chara: 'ann', text: 'あ、お前は！' },
      { chara, text: 'お前たち、あの時の…。' },
      { chara, text: '何故ここにいる？' },
      { chara: 'ann', text: 'こっちの台詞なんだけど！' },
      { chara: 'ann', text: '今度は何をしているの？' },
      { chara, text: '答える筋合いはない。' },
      { chara, text: '今お前たちの相手をしている暇はないんだ。' },
      { chara, text: 'どけ。' },
      { chara: 'ann', text: 'あ、待て！' }
    ])
    state.jack = true
    await scene.ui.transition('normal')
    jack.destroy()
    area.destroy()
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: 'ann', text: 'どうして王殺しのジャックがここに？' },
      { chara: 'jaquelyn', text: 'やっぱりあいつが騎士のヘクター…？' },
      { chara: 'ann', text: 'うーん、' },
      { chara: 'ann', text: '分からないけど、ひとまず先を急ごう。' }
    ])
  })
}

export const hector = (scene, hector, mary, loretta) => {
  mary.setDisplayName('メアリー').setVisible(false)
  loretta.setDisplayName('ロレッタ').setVisible(false)
  const charas = [hector, mary, loretta]
  const state = scene.storage.state.event.m2_4
  if (!scene.storage.state.event.m2_1.completed || state.started) {
    charas.forEach(c => c.destroy())
    return
  }
  hector.setDisplayName('ヘクター').setTapEvent(async chara => {
    await scene.ui.transition('fast')
    scene.setMembersPosition((16).toPixelCenter, (11).toPixel, 'up')
    await scene.ui.sleep(300)
    if (!state.talked) {
      await scene.talk([
        { chara, text: '何者だ！' },
        { chara: 'ann', text: 'ええと…、' },
        { chara, text: 'さてはお前たちだな、私の鍵を持ち出したのは。' },
        { chara: 'ann', text: 'これは、借りたものです。' },
        { chara: 'ann', text: 'あなたは、カサンドラのお兄さんですか？' },
        { chara, text: 'なるほど。妹が勝手をしたようだね。' },
        { chara, text: 'いかにも、私がカサンドラの兄だ。' },
        { chara, text: '何か用があるのか？' },
        { chara: 'ann', text: '彼女から話を聞きました。' },
        { chara: 'ann', text: 'カサンドラを牢獄から出すために、アラグニエを探しているんですよね？' },
        { chara, text: 'ああ、探していた時期もあったな。' },
        { chara, text: 'でもずいぶん前に探すのは諦めたよ。' },
        { chara: 'ann', text: 'では何故ここに居るんですか？' },
        { chara, text: 'それは…、' },
        { chara, text: '私は…、' },
        { chara, text: '私はよからぬことを考えている。' },
        { chara, text: '私は、王を恨んでいる。' },
        { chara, text: '王に復讐したい。' },
        { chara: 'ann', text: 'そんなこと…。' },
        { chara, text: 'だが最初はそうではなかった！' },
        { chara, text: '一度は騎士として王に忠誠を誓った身。' },
        { chara, text: 'あの事故で王が私を除名した日、私は王を恨む自由を得たが、' },
        { chara, text: 'それでも私はただ、アラグニエを倒して妹を解放することだけを考えていた。' },
        { chara, text: 'しかし数年間この地下通路を探したが、ついに見つけることはできなかった。' },
        { chara, text: 'そしてアラグニエ探しを諦めて腐っていた私のもとに、ある男が訪れてきた。' },
        { chara, text: 'そうだ、さっきの黒いローブの男だ。お前も会ったはずだ。' },
        { chara: 'ann', text: 'あいつね！' },
        { chara: 'ann', text: 'あいつと何を話したの？' },
        { chara, text: 'あいつは蛇だ。' },
        { chara, text: 'あいつが私の中にある王への小さな怒りを煽り立てた。' },
        { chara, text: '奴が酒の密売人のことを私に吹き込んだのだ。' },
        { chara, text: 'ここに20バレルの酒が並んだ日の夜、城への扉が開く、と。' },
        { chara, text: 'その言葉に導かれ、私は今ここにいる。' },
        { chara, text: '私の気は既に狂ってしまったのだ。' },
        { chara: 'ann', text: 'あいつ…、人の弱みを利用するなんて。' },
        { chara: 'ann', text: 'ねえ、もしアラグニエを倒してカサンドラを出すことができたら、あなたは復讐を辞める？' },
        { chara, text: '…分からない。' },
        { chara, text: 'かもしれないな。' },
        { chara: 'ann', text: 'それなら私たちが探すのを手伝います。' },
        { chara, text: '無理だ。アラグニエは見つからないよ。' },
        { chara, text: 'もういいんだ。向こうへ行ってくれ。' }
      ])
      state.talked = true
    } else {
      await scene.talk([
        { chara: 'ann', text: '私たちが探すのを手伝います。' },
        { chara, text: '無理だ。アラグニエは見つからないよ。' },
        { chara, text: 'もういいんだ。向こうへ行ってくれ。' }
      ])
    }
    if (scene.storage.state.event.m2_2.completed) {
      mary.setSpeed(180).setVisible(true)
      loretta.setSpeed(180).setVisible(true)
      await scene.talk([
        { chara: mary, text: '見つかるわ！' }
      ])
      await Promise.all([
        mary.setTargetPosition(mary.x, mary.y - (8).toPixel),
        loretta.setTargetPosition(loretta.x, loretta.y - (8).toPixel)
      ])
      await scene.talk([
        { chara: mary, text: 'ヘクター、久しぶりね。' },
        { chara, text: 'メアリー王女！' },
        { chara, text: 'レディロレッタまで！' },
        { chara: loretta, text: 'エドガー王を殺そうだなんていい度胸だわ。' },
        { chara: mary, text: 'ヘクター、どうかお父様を恨まないで。' },
        { chara: mary, text: 'カサンドラの投獄も、あなたの解雇も、全て私のせいよ。' },
        { chara: mary, text: '私を恨みなさい。' },
        { chara, text: '…。' },
        { chara: mary, text: 'でも一度だけチャンスをちょうだい。' },
        { chara, text: 'チャンス…？' },
        { chara: mary, text: 'そう、これを見て。' },
        { chara, text: 'それは、ランタン？' },
        { chara: mary, text: 'これは魔石のランタン。' },
        { chara: mary, text: 'この光がアラグニエの痕跡を照らし出すわ。' },
        { chara, text: 'そんなことが…、' },
        { chara: loretta, text: '私とメアリーが何年も勉強して作ったの。' },
        { chara: loretta, text: 'そこのあなたたちも、魔石を探すのを手伝ってくれて助かったわ。' },
        { chara: 'ann', text: 'それを作るために必要だったのね。' },
        { chara, text: '妹が…、出られる？' },
        { chara: loretta, text: 'そうよ！' },
        { chara: loretta, text: '復讐だなんて女々しいことを考えるのは辞めなさい。' },
        { chara: mary, text: 'さあ、カサンドラの元へ行きましょう。' },
        { chara: mary, text: 'そこのあなたたち、一緒について来て。' },
        { chara: 'ann', text: 'え？' },
        { chara: loretta, text: '何よ、勝手に侵入している身分で断るっていうの？' },
        { chara: loretta, text: '戦力がこの落ちぶれたナイトだけでは不安だわ。' },
        { chara: 'ann', text: 'なるほど、アラグニエを倒すんだね、任せて！' },
        { chara, text: '待ってくれ、' },
        { chara: mary, text: '待ちません。' },
        { chara, text: '…。' },
        { chara, text: '…そうだな。' },
        { chara, text: '確かに、ためらう理由など一つもない。' },
        { chara, text: '…妹を、助けに行こう。' }
      ], { angle: false })
      charas.forEach(c => c.setSpeed(100).setTargetPosition(scene.player.x, scene.player.y))
      await scene.ui.transition('normal')
      charas.forEach(c => c.destroy())
      state.started = true
      scene.ui.missionUpdate('m2_4')
    }
  })
}

export const lamp = (scene, cassandra, hector, mary, loretta, jail, wall, yarn) => {
  cassandra.setDisplayName('カサンドラ')
  hector.setDisplayName('ヘクター')
  mary.setDisplayName('メアリー')
  loretta.setDisplayName('ロレッタ')
  const state = scene.storage.state.event.m2_4
  wall.setTapEvent(async () => {
    const i = await scene.select(['調べる', 'やめておく'])
    if (i === 1) return
    scene.mapChange('underpass10', (15).toPixelCenter, (52).toPixelCenter)
  }).setVisible(state.search)
  yarn.setVisible(false)
  const setCharaVisible = bool => [hector, mary, loretta].forEach(v => v.setVisible(bool))
  setCharaVisible(false)
  if (!state.started) return
  if (state.solved) {
    jail.destroy()
  }
  if (state.completed) {
    cassandra.destroy()
    return
  }
  if (state.search && !state.solved) setLamp(scene, scene.player, yarn)
  cassandra.setTapEvent(async () => {
    if (state.solved) {
      await scene.ui.transition('normal')
      scene.setMembersPosition((45).toPixelCenter, (16).toPixel, 'up')
      setCharaVisible(true)
      await scene.camera.look(cassandra.x, cassandra.y + 70, 1000)
      await scene.talk([
        { chara: loretta, text: '本当に、開いたね。' },
        { chara: mary, text: 'よかった…！' },
        { chara: mary, text: 'カサンドラ、今から貴女は自由です。' },
        { chara: cassandra, text: '…。' },
        { chara: cassandra, text: 'やはり…、私はここからは出られません。' },
        { chara: mary, text: 'どうして！？' },
        { chara: cassandra, text: 'その目、' },
        { chara: cassandra, text: 'その目を見るたび、私は私自身の心を斬り刻むのです。' },
        { chara: cassandra, text: 'こうして牢の内から、罰を受けながらでなければ、' },
        { chara: cassandra, text: 'どのようにしてそのお顔を見ることができましょう。' },
        { chara: mary, text: 'カサンドラ、私の目を憐れむのは辞めて。' },
        { chara: loretta, text: 'そうよ、うじうじ言ってないで早く出て行きなさい。' },
        { chara: loretta, text: '分からない？' },
        { chara: loretta, text: 'メアリーが牢に封じられているあなたを見る気持ちだってそれと同じなのよ。' },
        { chara: cassandra, text: 'レディロレッタ…。' },
        { chara: hector, text: 'カサンドラ、出てきてくれ。' },
        { chara: hector, text: '遠い地に移り住み、お前の人生をやり直そう。' },
        { chara: cassandra, text: '…分かりました。' },
        { chara: cassandra, text: 'なんと感謝を述べてよいのやら。' },
        { chara: mary, text: 'カサンドラ、あなたは私の過ちによって7年ものときをこの牢獄で過ごしたわ。' },
        { chara: mary, text: 'これは私のただの罪滅ぼしであり、礼に及ぶところではありません。' },
        { chara: mary, text: 'さあ、振り返らず、出て行ってちょうだい。' },
        { chara: cassandra, text: 'はい。' }
      ], { angle: false })
      await scene.ui.transition('slow')
      scene.camera.revert()
      cassandra.setVisible(false)
      hector.setVisible(false)
      mary.setR('right')
      loretta.setR('left')
      scene.player.setR('right')
      await scene.ui.sleep(1000)
      await scene.talk([
        { chara: loretta, text: '行っちゃったね。' },
        { chara: mary, text: 'うん…。' },
        { chara: mary, text: 'カサンドラ…、' },
        { chara: mary, text: '私の尊敬する、お姉様。' },
        { chara: loretta, text: '元気出して、メアリー。' }
      ], { angle: false })
      await scene.ui.transition('slow')
      setCharaVisible(false)
      state.completed = true
      scene.ui.missionUpdate('m2_4', true)
      await scene.talk([
        { chara: 'ann', text: 'これでヘクターは王への復讐を辞めるよね。' },
        { chara: 'jaquelyn', text: 'そうね。頑張ったわ、アン。' },
        { chara: 'francisca', text: 'さあ、さっさと戻って王国史を確認しよう。' }
      ])
      await scene.ui.sleep(1000)
      scene.storage.state.chapter = 3
      await scene.mapChange('room1', (19).toPixelCenter, (11).toPixel, { speed: 'slow' })
    } else if (state.search) {
      await scene.talk([
        { chara: cassandra, text: '…。' }
      ])
    } else {
      await scene.ui.transition('normal')
      scene.setMembersPosition((45).toPixelCenter, (16).toPixel, 'up')
      setCharaVisible(true)
      await scene.camera.look(cassandra.x, cassandra.y + 70, 1000)
      await scene.talk([
        { chara: hector, text: 'カサンドラ。' },
        { chara: cassandra, text: 'ヘクター、誰を連れてきたの？' },
        { chara: mary, text: 'カサンドラ…、久しぶり。' },
        { chara: cassandra, text: 'あ…！' },
        { chara: cassandra, text: 'なんで…、…ここに？' },
        { chara: mary, text: 'あなたにお詫びがしたくて、' },
        { chara: cassandra, text: 'え…？' },
        { chara: mary, text: 'あなたを、ここから出します。' },
        { chara: cassandra, text: '出るだなんて、叶いません。' },
        { chara: cassandra, text: 'それに詫びなどと、' },
        { chara: cassandra, text: '詫びねばならぬのは私のほうです。' },
        { chara: hector, text: '聞け、カサンドラ。' },
        { chara: hector, text: '王女はアラグニエを探すための道具を作ってくれた。' },
        { chara: cassandra, text: 'え…？' },
        { chara: cassandra, text: 'ほ、本当なの？' },
        { chara: hector, text: 'ああ。お前のためにだ。' },
        { chara: cassandra, text: '私のため…に？' },
        { chara: hector, text: '王女のお気持ちに背く理由はない。' },
        { chara: cassandra, text: '…。' },
        { chara: loretta, text: 'さあ、魔石に光を灯しましょう。' }
      ], { angle: false })
      await scene.ui.transition('normal')
      setCharaVisible(false)
      state.search = true
      wall.setVisible(true)
      setLamp(scene, scene.player, yarn)
      scene.player.setR('right')
      await scene.talk([
        { chara: 'ann', text: 'すごい！' },
        { chara: 'ann', text: 'アラグニエの糸が見える！' },
        { chara: 'ann', text: 'これでアラグニエの居場所を探せばいいのね。' }
      ])
    }
  })
}

export const aragnie = (scene, area, boss, hector, hectorInjured, scream) => {
  const state = scene.storage.state.event.m2_4
  // yarn.setVisible(false)
  if (state.found) {
    hector.destroy()
  }
  if (state.boss) {
    scream.destroy()
  }
  if (!state.search || state.solved) {
    area.destroy()
    boss.destroy()
    hectorInjured.destroy()
    return
  }
  hector.setDisplayName('ヘクター')
  hectorInjured.setFaceKey('hector').setDisplayName('ヘクター')
  if (!state.found) {
    (async () => {
      scene.ui.setEventMode(true)
      scene.player.setR('up')
      hector.tweet('！')
      await scene.ui.sleep(1000)
      await scene.talk([
        { chara: hector, text: 'こんな場所があったなんて…！' },
        { chara: hector, text: 'アラグニエめ、ここに隠れていたんだな！' }
      ], { angle: false })
      await hector.setSpeed(300).setTargetPosition((10).toPixel, (33).toPixel)
      hector.destroy()
      scene.player.tweet('行っちゃった…')
      scene.ui.setEventMode(false)
      state.found = true
    })()
  }
  if (!state.boss) {
    scream.setEvent(async () => {
      await scene.talk([
        { chara: hectorInjured, text: 'ぐわーー！！' }
      ])
      state.boss = true
      scream.destroy()
    })
  }
  hectorInjured.setFaceKey('hector').setDisplayName('ヘクター').setTapEvent(async () => {
    await scene.talk([
      { chara: hectorInjured, text: 'っく、くるしい…。' },
      { chara: 'francisca', text: '弱くない…？' }
    ])
  })
  const talkerLoretta = new Talker('loretta', 'ロレッタ', scene.player)
  const talkerMary = new Talker('mary', 'メアリー', scene.player)
  const talkerHector = new Talker('hector', 'ヘクター', scene.player)
  area.setEvent(async () => {
    await scene.talk([
      { chara: talkerMary, text: '居た！アラグニエよ！' },
      { chara: talkerMary, text: 'すごく強そうだわ…。' },
      { chara: talkerLoretta, text: 'さあ、早く倒すのよ！' },
      { chara: 'ann', text: 'え、ちょっと！まだ心の準備が！' }
    ])
    await scene.ui.sleep(500)
    const result = await scene.ui.battle([generateBattler('aragnie', 21, { hp: 1200 })], { boss: true, bgm: 'battle3' })
    if (!result) return
    hectorInjured.destroy()
    boss.die()
    // clearLamp(scene.player, yarn)
    await scene.talk([
      { chara: 'ann', text: 'た、倒せた…。' },
      { chara: talkerLoretta, text: 'よくやったわ！' },
      { chara: talkerHector, text: '…面目ない。' },
      { chara: talkerHector, text: '尊敬に値する戦いぶりだったよ。' },
      { chara: talkerMary, text: 'カサンドラの元に戻ろう！' }
    ])
    area.destroy()
    state.solved = true
  }).setVisible(state.search && !state.solved)
}

const setLamp = (scene, player, yarn) => {
  const mask = scene.make.graphics().fillCircle(0, 0, 100).createGeometryMask()
  yarn.setVisible(true).setMask(mask)
  scene.add.tween({ targets: yarn, duration: 1000, alpha: 0.6, yoyo: true, loop: -1 })
  const lamp = scene.add.sprite(0, -15, 'magic_lamp').setScale(1.1).setAlpha(0.7).setRotation(-Math.PI).setTint('#ff0000'.toColorInt)
  lamp.setMask(mask)
  lamp.setBlendMode(Phaser.BlendModes.ADD)
  lamp.color = 70
  lamp.colorBool = true
  lamp.preUpdate = () => {
    mask.geometryMask.x = player.x
    mask.geometryMask.y = player.y - 15
    // color anim
    lamp.color += lamp.colorBool ? 1 : -1
    if (lamp.color <= 70 || lamp.color >= 185) lamp.colorBool = !lamp.colorBool
    const g = lamp.color.toString(16).padStart(2, 0)
    const b = (255 - lamp.color).toString(16).padStart(2, 0)
    lamp.setTint(`#FF${g}${b}`.toColorInt)
  }
  player.add(lamp)
  player.lamp = lamp
}
