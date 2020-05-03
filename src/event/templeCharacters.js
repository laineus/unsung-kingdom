export default (scene, characters) => {
  const {
    soldier1,
    soldier2,
    mary,
    loretta,
    dario,
    drystan,
    ray
  } = characters
  const state = scene.storage.state.event.m4
  soldier1.setDisplayName('衛兵')
  soldier2.setDisplayName('衛兵')
  mary.setDisplayName('メアリー')
  loretta.setDisplayName('ロレッタ')
  dario.setDisplayName('ダリオ')
  drystan.setDisplayName('ドリスタン')
  ray.setDisplayName('レイ')
  // events
  soldier1.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: '本当に陛下の助言どおりであった。' },
      { chara, text: 'プリンセスはまんまと城内の監視をすり抜けて、' },
      { chara, text: '陛下を追ってついにここまで来られたのだ。' },
      { chara, text: 'だが地下にだけは絶対に通すわけにはいかない…。' }
    ])
  })
  soldier2.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: '何度言われましても、お通しすることはできません。' },
      { chara: mary, text: '私の命令に背くだなんて！お父様に言いつけるわ。' },
      { chara, text: 'これはまさにその陛下のご命令なのです。' },
      { chara, text: 'どうかご容赦ください。' }
    ], { angle: false })
  })
  mary.setTapEvent(async chara => {
    if (state.talked_mary) {
      await scene.talk([
        { chara, text: 'あなた達からもなんとか言ってちょうだい。' },
        { chara: 'ann', text: 'うーん、どうにもならないと思うけど…。' }
      ])
    } else {
      await scene.talk([
        { chara, text: '？' },
        { chara, text: 'あなた達、見覚えがあるわ。' },
        { chara: 'ann', text: '忘れたの！？' },
        { chara: 'ann', text: 'ほら、地下通路で会ったお姉さんだよ！' },
        { chara, text: 'ああ、思い出したわ。' },
        { chara: 'ann', text: 'こんなところで何してるの？' },
        { chara: 'ann', text: '危ないよ。' },
        { chara, text: 'お父様や叔父様がドラゴンと戦うっていうのよ。' },
        { chara, text: '黙って待っていられるわけないじゃない！' },
        { chara, text: 'でも、このナイト達が先へ行かせてくれないの。' },
        { chara, text: 'あなた達からもなんとか言ってちょうだい。' },
        { chara: 'ann', text: 'うーん、どうにもならないと思うけど…。' }
      ])
      state.talked_mary = true
    }
  })
  loretta.setTapEvent(async chara => {
    if (state.talked_loretta) {
      await scene.talk([
        { chara, text: 'もし陛下に何かあったら…、メアリーは…、' },
        { chara, text: '私が支えなくちゃ…。' }
      ])
    } else {
      await scene.talk([
        { chara, text: 'あ、あなた達は、地下で会った怪しいお姉さん。' },
        { chara: 'ann', text: 'へへ、また会ったね。' },
        { chara: 'ann', text: 'こんなところで何しているの？' },
        { chara, text: '陛下がドラゴンと戦うのよ。知らないの？' },
        { chara, text: 'だからメアリーと一緒に駆けつけたの。' },
        { chara: 'ann', text: 'そうか、心配なんだよね…。' },
        { chara, text: 'もし陛下に何かあったら…、メアリーは…、' },
        { chara, text: '私が支えなくちゃ…。' },
        { chara: 'ann', text: '…きっと大丈夫だよ。' }
      ])
      state.talked_loretta = true
    }
  })
  dario.setTapEvent(async chara => {
    if (state.talked_dario) {
      const t = await scene.talk([
        { chara, text: '回復するかい？' },
        null
      ])
      const i = await scene.ui.select(['お願い', '大丈夫'])
      if (i === 1) return
      t.destroy()
      scene.storage.state.battlers.forEach(v => v.hp = v.max_hp)
      scene.ui.announce('HPが全回復した')
      await scene.talk([
        { chara: 'ann', text: 'ありがとう！' }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: 'あ！あなたは、墓地に居た魔法使いね。' },
        { chara, text: '君たちは…、' },
        { chara, text: 'よかった。' },
        { chara, text: '僕は君たちにお礼を言う必要があった。' },
        { chara, text: '王妃の亡霊のこと…、本当にありがとう。' },
        { chara, text: 'そして、危険な目にあわせてしまって申し訳なかった。' },
        { chara: 'ann', text: 'いいよ、そんなの。' },
        { chara: 'ann', text: 'ところで、どうしてここに？' },
        { chara, text: '森の賢人がドラゴン討伐の支援に呼ばれたと聞いてね。' },
        { chara, text: '心配で僕もついて来たんだ。' },
        { chara, text: '君たちも、もし回復が必要だったら遠慮なく言ってくれ。' },
        { chara: 'ann', text: 'ありがとう！' }
      ])
      state.talked_dario = true
    }
  })
  drystan.setTapEvent(async chara => {
    if (state.talked_drystan) {
      await scene.talk([
        { chara, text: 'お前たちも、今回ばかりは諦めることだ。' }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: 'あなたは、ワルコフォレンスの森の賢人！' },
        { chara: 'ann', text: 'この間は薬を作ってくれてありがとう。' },
        { chara, text: '誰かと思えばあのときの者達か。' },
        { chara, text: 'また王族の揉め事に首を突っ込みに来たのか？' },
        { chara: 'ann', text: 'あなたこそ、どうしてここに？' },
        { chara, text: '好きで来ているわけではない。' },
        { chara, text: '負傷した兵の治癒を頼まれたのだ。' },
        { chara: 'ann', text: 'そうだったんだ。' },
        { chara, text: '竜に手を出すなど、無謀な真似をしてくれた。' },
        { chara, text: '負けは目に見えている。' },
        { chara: 'ann', text: 'ドラゴンはそんなに強いの？' },
        { chara, text: '奴らは人間の知り得ない特殊な力を持っている。' },
        { chara, text: '対抗するためには力ではなく知恵が欠かせない。' },
        { chara, text: '遠い昔、この神殿を作った時代の人間は、' },
        { chara, text: 'その知恵を持っていた。' },
        { chara, text: 'だが今の我々はそれを失ってしまったのだ。' },
        { chara: 'ann', text: '知恵、か…。' },
        { chara, text: 'お前たちも、今回ばかりは諦めることだ。' },
        { chara, text: '熊退治のようにはいかんぞ。' }
      ])
      state.talked_drystan = true
    }
  })
  ray.setTapEvent(async chara => {
    if (state.talked_ray) {
      await scene.talk([
        { chara: 'ann', text: '元気そうでよかった。' },
        { chara, text: 'ふん。' }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: 'あれ、キミは墓荒らしの男の子！' },
        { chara, text: 'ん？' },
        { chara, text: 'なんだ、この前のねーちゃん達じゃねーか。' },
        { chara: 'ann', text: 'こんなところで何してるの？' },
        { chara, text: '別に。' },
        { chara, text: 'ドラゴンを見に来たんだよ。' },
        { chara: 'ann', text: 'ドラゴン？' },
        { chara: 'ann', text: '危ないからやめときなさい！' },
        { chara, text: 'なんだよ、関係ねーだろ。' },
        { chara: 'ann', text: '生意気ね。' },
        { chara: 'ann', text: 'まあでも、元気そうでよかった。' },
        { chara, text: 'ふん。' }
      ])
      state.talked_ray = true
    }
  })
}
