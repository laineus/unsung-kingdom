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
  soldier1.setDisplayName('衛兵')
  soldier2.setDisplayName('衛兵')
  mary.setDisplayName('メアリー')
  loretta.setDisplayName('ロレッタ')
  dario.setDisplayName('ダリオ')
  drystan.setDisplayName('ドリスタン')
  ray.setDisplayName('レイ')
  // events
  const soldiers = async chara => {
    await scene.talk([
      { chara: 'ann', text: '' }
    ])
  }
  soldier1.setTapEvent(soldiers)
  soldier2.setTapEvent(soldiers)
  mary.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara: 'ann', text: '' }
    ])
    chara.nextMessages = [
    ]
  })
  loretta.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara: 'ann', text: '' }
    ])
    chara.nextMessages = [
    ]
  })
  dario.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara: 'ann', text: '' }
    ])
    chara.nextMessages = [
    ]
  })
  drystan.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
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
    chara.nextMessages = [
      { chara, text: 'お前たちも、今回ばかりは諦めることだ。' }
    ]
  })
  ray.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
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
    chara.nextMessages = [
      { chara: 'ann', text: '元気そうでよかった。' },
      { chara, text: 'ふん。' }
    ]
  })
}
