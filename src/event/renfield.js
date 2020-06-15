import generateBattler from '../util/generateBattler'
export const renfield = (scene, ray, spectres) => {
  const state = scene.storage.state.event.m3_4
  ray.setDisplayName(t('chara.ray'))
  if (state.completed) {
    ray.destroy()
    spectres.forEach(s => s.destroy())
    return
  }
  ray.setTapEvent(async chara => {
    if (state.ghosts.length === 5) {
      await scene.talk([
        { chara, text: '強いんだな。' },
        { chara, text: '…ありがとな。' },
        { chara, text: '大したものは無いけど、' },
        { chara, text: 'これ、さっき拾った鍵をやるよ。' },
        { chara, text: 'どっかに使えんだろ。' },
        { chara: 'ann', text: 'ああ、うん、ありがとう。' }
      ])
      scene.ui.announce('『錆びた鍵』を手に入れた')
      await scene.talk([
        { chara: 'ann', text: 'それはいいけど…、' },
        { chara: 'ann', text: 'この後どうするの？' },
        { chara: 'ann', text: '元に戻さないと、家族に見つかったら怒られるよ？' },
        { chara, text: 'そんなもんいねえよ。' },
        { chara, text: '屋敷に火をつけて…、皆殺しにしてやった。' },
        { chara: 'ann', text: 'え、' },
        { chara, text: 'レンフィールド家の生き残りは、遠くに住む兄弟と、俺だけだ。' },
        { chara, text: '責めるなよ…。' },
        { chara, text: 'そうでもしないと、犠牲になっていた人間はもっと多かったんだ…。' },
        { chara: 'ann', text: 'そんな…。' },
        { chara, text: '…。' },
        { chara, text: 'じゃあな。' }
      ])
      state.completed = true
      scene.ui.missionUpdate('m3_4', true)
      await chara.setSpeed(140).setTargetPosition(chara.x + (7).toPixel, chara.y + (5).toPixel)
      await chara.setSpeed(140).setTargetPosition(chara.x, chara.y + (4).toPixel)
      chara.destroy()
    } else if (state.started) {
      await scene.talk([
        { chara, text: 'おい、怖いわけじゃないからな！' },
        { chara: 'ann', text: 'じゃあなんのさ？' },
        { chara, text: 'っ…。' },
        { chara, text: 'うるせえ、とにかく頼む！' }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: '墓荒らし！？' },
        { chara, text: 'わ！何だお前ら！' },
        { chara, text: '突然話しかけるな！' },
        { chara: 'ann', text: 'あなた墓荒らしね！？' },
        { chara, text: 'だったらなんだ、' },
        { chara, text: 'ほっといてくれ。' },
        { chara: 'ann', text: '放っておけるわけないないじゃない。' },
        { chara: 'ann', text: '貴族の墓なんて掘り起こして、金目の物を漁るつもりでしょ？' },
        { chara, text: 'ちげーよ。' },
        { chara, text: 'ここはうちの墓だ。' },
        { chara, text: '俺がどうしようととやかく言われる筋合いはねえ。' },
        { chara: 'ann', text: 'うちの墓？' },
        { chara: 'ann', text: 'それってどういうこと？' },
        { chara, text: 'しつけーな。' },
        { chara, text: 'ここはレンフィールド家の墓だ。' },
        { chara, text: '汚れた人間どもの死体が埋まってる。' },
        { chara, text: 'そして俺はレイ・レンフィールド。' },
        { chara, text: '汚れた血筋の男であり、レンフィールド家の裏切り者だ。' },
        { chara: 'ann', text: 'あなたのご先祖の墓なら、なおさらなんでこんな事するのよ。' },
        { chara, text: 'レンフィールド家は汚れた家系だ。' },
        { chara, text: 'フェルディナンド家に奴隷や少女を売って貴族になった。' },
        { chara, text: '自分の地の民を外に売るなんて、薄汚いクズどもめ。' },
        { chara, text: 'クズがこんな場所に埋葬される資格はないんだ。' },
        { chara, text: '掘り起こして、燃やして、野道にでも捨ててやる。' },
        { chara: 'ann', text: 'そんな…。' }
      ])
      await scene.camera.look(0, -150, 300, true)
      spectres.forEach(s => s.setVisible(true))
      await scene.talk([
        { chara: 'ann', text: 'うわ！！' },
        { chara: 'ann', text: '出た！！' }
      ])
      chara.setR('left')
      await scene.talk([
        { chara, text: '！！' },
        { chara, text: '姿を現しやがったな…、' },
        { chara: 'ann', text: 'どうするのよ！' },
        { chara, text: 'ふふ…、こいつらには二度死んでもらうのさ。' },
        { chara, text: 'よ、ようし、見てろよあんたたち、' },
        { chara, text: '…。' }
      ], { angle: false })
      await scene.talk([
        { chara, text: '…なあ、やっぱりあんたらに任せるよ。' },
        { chara: 'ann', text: 'ええ！？' },
        { chara: 'ann', text: 'やっぱり怖いんじゃない！' },
        { chara, text: 'ち、ちげーよ！' },
        { chara, text: 'とにかく頼む！' },
        { chara, text: 'このままじゃやばい。' }
      ])
      state.started = true
      scene.ui.missionUpdate('m3_4')
      await scene.camera.revert(300)
    }
  })
  const spectreEvent = async (spectre, i) => {
    const result = await scene.ui.battle([generateBattler('spectre', 22, { hp: 100 })])
    if (!result) return
    if (!state.ghosts.includes(i)) state.ghosts.push(i)
    spectre.destroy()
  }
  spectres.forEach((spectre, i) => {
    spectre.setTapEvent(spectre => spectreEvent(spectre, i)).setBlendMode(Phaser.BlendModes.ADD).setAlpha(0.8)
    spectre.setVisible(state.started && !state.ghosts.includes(i))
  })
  scene.add.tween({ targets: spectres, duration: 800, loop: -1, yoyo: true, alpha: 0.4 })
}
