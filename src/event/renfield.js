export const renfield = (scene, ray) => {
  ray.setFaceKey('ray') // Will be deleted
  ray.setDisplayName('レイ')
  ray.setTapEvent(async chara => {
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
      { chara, text: 'ふざけるな！' },
      { chara, text: '子供扱いしているな。' },
      { chara, text: 'レンフィールド家は汚れた家系だ。' },
      { chara, text: 'フェルディナンド家に奴隷や少女を売って貴族になった。' },
      { chara, text: '自分の地の民を外に売るなんて、薄汚いクズどもめ。' },
      { chara, text: 'クズがこんな場所に埋葬される資格はないんだ。' },
      { chara, text: '掘り起こして、燃やして、野道にでも捨ててやる。' },
      { chara: 'ann', text: 'そんな…。' }
    ])
    await scene.talk([
      { chara: 'ann', text: 'うわ！！' },
      { chara: 'ann', text: '出た！！' },
      { chara, text: '！！' },
      { chara, text: '姿を現しやがったな…、' },
      { chara: 'ann', text: 'どうするのよ！' },
      { chara, text: 'ふふ…、こいつらには二度死んでもらうのさ。' },
      { chara, text: 'よ、ようし、見てろよあんたたち、' },
      { chara, text: '…。' },
      { chara, text: '…なあ、やっぱりあんたらに任せるよ。' },
      { chara: 'ann', text: 'ええ！？' },
      { chara: 'ann', text: 'やっぱり怖いんじゃない！' },
      { chara, text: 'ち、ちげーよ！' },
      { chara, text: 'とにかく頼む！' },
      { chara, text: 'このままじゃやばい。' }
    ])
    await scene.talk([
      { chara, text: '強いんだな。' },
      { chara, text: '…ありがとな。' },
      { chara: 'ann', text: 'それはいいけど…、' },
      { chara: 'ann', text: 'この後どうするの？' },
      { chara: 'ann', text: '元に戻さないと、家族に見つかったら怒られるよ？' },
      { chara, text: 'そんなもんいねえよ。' },
      { chara, text: '屋敷に火をつけて…、皆殺しにしてやった。' },
      { chara: 'ann', text: 'え、' },
      { chara, text: 'レンフィールド家の生き残りは、遠くに住む兄弟と、俺だけだ。' },
      { chara, text: '責めるな…。' },
      { chara, text: 'そうでもしないと、犠牲になっていた人間はもっと多かったんだ…。' },
      { chara, text: '…。' },
      { chara, text: 'じゃあな。' }
    ])
  })
}
