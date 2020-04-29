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
