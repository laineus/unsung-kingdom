export const lute = (scene, poets) => {
  poets.image.anims.play('poets_lute', true)
  poets.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: 'こんにちはお嬢さん。' },
      { chara: 'ann', text: 'どうも！' }
    ])
    await scene.talk([
      { chara, text: 'こんにちはお嬢さん。' },
      { chara, text: '格好良い剣を持っているね。' },
      { chara, text: 'それでドラゴンでも倒しにきたのかい？' },
      { chara: 'ann', text: 'そうなんだけど、' },
      { chara: 'ann', text: '地下へ行く方法が見つからなくて…、' },
      { chara, text: 'ああ、なるほどね。' },
      { chara, text: 'キミが探しているのはこの女神像だよ。' },
      { chara: 'ann', text: 'ほんと！？' },
      { chara: 'ann', text: 'ってことはライラさん？' },
      { chara, text: 'いかにも。' },
      { chara, text: '石掘りの男に聞いたのかな？' },
      { chara: 'ann', text: 'あなたしか仕掛けを動かせないって。' },
      { chara, text: 'そうだよ。' },
      { chara, text: '開けてほしいの？' },
      { chara: 'ann', text: '開けてほしい！' },
      { chara, text: '開けたら何してくれる？' },
      { chara: 'ann', text: 'えーと、' },
      { chara: 'ann', text: '何でも！' },
      { chara, text: '何でも？' },
      { chara: 'ann', text: 'うん。' },
      { chara, text: 'そう言われると特にしてもらいたいことないな…。' },
      { chara: 'ann', text: 'そっか、' },
      { chara: 'ann', text: 'じゃあ開けてくれる？' },
      { chara, text: 'いや、何かはしてもらわないと。' },
      { chara: 'ann', text: 'えぇ…。' },
      { chara: 'ann', text: 'じゃあ、うーん、' },
      { chara: 'ann', text: 'リンゴでも集めてきます？' },
      { chara, text: 'お、いいね。' },
      { chara, text: 'それで！' },
      { chara, text: 'ちゃんと綺麗なやつを頼むよ。' },
      { chara: 'ann', text: '任せて！' }
    ])
    await scene.talk([
      { chara: 'ann', text: 'リンゴ集めてきたよ！' },
      { chara, text: 'お、いいね。' },
      { chara, text: 'うん、美味しい。' },
      { chara, text: 'じゃあ約束だね、' },
      { chara, text: '開けるよ。' },
      { chara: 'ann', text: 'どういう仕掛けなの？' },
      { chara, text: 'リュートを鳴らすんだ。' },
      { chara, text: 'その音に反応して地下への扉が開く。' },
      { chara: 'ann', text: 'へー。' },
      { chara, text: 'じゃあ、聞いていてね。' }
    ])
    await scene.talk([
      { chara, text: 'さて、開いたはずだよ。' },
      { chara: 'ann', text: 'すごい！' },
      { chara: 'ann', text: 'どうして音で仕掛けが動くの？' },
      { chara, text: '私もよく分からないんだよね。' },
      { chara, text: '私が女神さま大好きだからかな。' },
      { chara, text: '同じ音を出しても、ちゃんと心をこめてないと開かないんだ。' },
      { chara, text: '女神さまに向けて、しっかり心を込めて弾けば開くんだ。' },
      { chara, text: 'きっと大昔にこの仕掛けを作った人も、女神さまが大好きだったのさ。' },
      { chara: 'ann', text: 'それは素敵だね。' },
      { chara, text: 'お嬢さんが持ってきてくれたリンゴだってそうだ。' },
      { chara, text: 'かなり美味しいよ。' },
      { chara, text: 'ちゃんと私のことを思って持ってきくれたに違いない。' },
      { chara: 'ann', text: 'へへ。' },
      { chara, text: 'さあ、' },
      { chara, text: 'じゃあ気をつけて行っておいで。' },
      { chara: 'ann', text: 'ありがとう！' }
    ])
  })
}
