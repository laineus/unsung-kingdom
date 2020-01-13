import Talker from '../class/Talker'
export const MAGIC_STONES = 5
export const princess = (scene, mary, loretta) => {
  const state = scene.storage.state.event.m2_2
  const event = async () => {
    if (state.completed) {
      await scene.talk([
        { chara: mary, text: 'ありがとうね、助かったわ。' },
        { chara: loretta, text: 'さあ、用が済んだのだから出ていってちょうだい。' }
      ])
    } else if (state.count >= MAGIC_STONES) {
      await scene.talk([
        { chara: mary, text: '魔石が集まったのね！' },
        { chara: loretta, text: 'やるじゃない！' },
        { chara: mary, text: 'ありがとう！' },
        { chara: 'ann', text: 'どういたしまして。' },
        { chara: 'ann', text: 'カサンドラへのプレゼントに使うんだったよね。' },
        { chara: 'ann', text: '何を作るの？' },
        { chara: mary, text: 'それは秘密よ。' },
        { chara: mary, text: 'さあ、お礼を受け取ってちょうだい。' }
      ])
      state.completed = true
      scene.ui.missionUpdate('m2_2', true).then(() => {
        scene.ui.increaseWeapon(8)
      })
    } else if (state.started) {
      await scene.talk([
        { chara: mary, text: `カーバンクルの魔石を${MAGIC_STONES}つよ。` },
        { chara: mary, text: '早く持ってきなさい。' }
      ])
    } else {
      await scene.talk([
        { chara: loretta, text: 'きゃ！' },
        { chara: mary, text: 'え、誰！？' },
        { chara: loretta, text: 'どうやって入ったの？' },
        { chara: 'ann', text: 'ええと、まあ、ね' },
        { chara: 'ann', text: '君たちこそ何者？' },
        { chara: 'ann', text: '子供が二人でこんなところに居たら危ないよ。' },
        { chara: loretta, text: '失礼ね！私たちはいいの！' },
        { chara: loretta, text: 'メアリーと私の家なんだから。' },
        { chara: 'ann', text: '君たちの家？どういうこと？' },
        { chara: loretta, text: '何あたなたたち、外国人？' },
        { chara: loretta, text: 'メアリー王女の顔を見たことないって言うの？' },
        { chara: 'ann', text: 'え！？' },
        { chara: mary, text: '外国から来たんなら仕方ないわ。' },
        { chara: mary, text: 'こっちはロレッタ。トロイア公爵家の令嬢よ。' },
        { chara: 'ann', text: 'なおさら何でここにいるの！？' },
        { chara: 'ann', text: 'モンスターも出るし危ないよ。' },
        { chara: loretta, text: 'ほっといてよ。' },
        { chara: loretta, text: 'メアリー、この人たちどうする？' },
        { chara: loretta, text: 'お父様に報告する？' },
        { chara: mary, text: '言わなくていいよ。' },
        { chara: mary, text: 'ここまで来れたところで、城まで入れるわけじゃない。' },
        { chara: mary, text: '何より私達がこの部屋でこっそり会っているのがバレちゃう。' },
        { chara: loretta, text: '確かに。' },
        { chara: mary, text: 'というわけで、ここで会ったことはお互いに内緒よ。' },
        { chara: 'ann', text: 'う、うん。オーケー。' },
        { chara: 'ann', text: 'あなたのお父様は国王、ってことなんだよね？' },
        { chara: 'ann', text: 'バレちゃ困るって何してたの？' },
        { chara: mary, text: '言えないことよ。察しなさい。' },
        { chara: loretta, text: 'そうよ、お父様には言えないヒミツの研究とか、実験とかよ。' },
        { chara: loretta, text: '邪魔しちゃだめ。' },
        { chara: 'ann', text: '分かった…。' },
        { chara: mary, text: 'あなたたち、公爵邸の入口から来たんだよね？' },
        { chara: 'ann', text: 'そうだよ。' },
        { chara: mary, text: 'じゃあ来る途中カサンドラには会った？' },
        { chara: mary, text: 'アラグニエの糸の牢獄に閉じ込められている女の人。' },
        { chara: 'ann', text: '会ったよ。' },
        { chara: mary, text: 'どうだった？' },
        { chara: mary, text: 'その…、元気そうだったとか、怒ってたとか。' },
        { chara: 'ann', text: 'えぇ…、うーん、' },
        { chara: 'ann', text: '楽しそうではなかったかな。' },
        { chara: mary, text: 'そっか…。' },
        { chara: 'ann', text: '知り合いなの？' },
        { chara: mary, text: 'そう。あの人は私のせいで投獄されたの。' },
        { chara: loretta, text: 'メアリーのせいじゃないわ！' },
        { chara: mary, text: 'ううん、私のせい。' },
        { chara: loretta, text: 'ねえあなた、メアリーの話を聞いてあげて。' },
        { chara: loretta, text: 'きっとメアリーのせいじゃないって思うわ。' },
        { chara: 'ann', text: 'わ、分かった。' },
        { chara: 'ann', text: '何があったのか聞いてもいい？' },
        { chara: mary, text: 'まあ、いいけど。' },
        { chara: mary, text: 'あの人、カサンドラはね、 昔私の世話役だったの。' },
        { chara: mary, text: '私の自慢のお姉さんだった。' },
        { chara: mary, text: 'カサンドラは騎士の妹で、彼女もまた優秀な剣士だった。' },
        { chara: mary, text: '私はそんなカサンドラに憧れていたの。' },
        { chara: mary, text: '私はいつも、一緒に狩りに連れて行けと彼女にせがんだわ。' },
        { chara: mary, text: '毎日しつこくお願いし続けて、あるときついに森に連れて行ってくれたの。' },
        { chara: mary, text: '比較的安全なエリアを選んでくれたんだけれど、' },
        { chara: mary, text: '偶然紛れ込んだ強力なモンスターに遭遇してしまった。' },
        { chara: mary, text: '彼女は私を庇いながらなんとかそいつを倒したけれど、' },
        { chara: mary, text: '私はそのときに怪我を負った。' },
        { chara: 'ann', text: 'もしかして怪我って…' },
        { chara: mary, text: 'そう、この目だよ。' },
        { chara: mary, text: '激怒したお父様は止める間もなくカサンドラをあの牢獄に閉じ込めてしまった。' },
        { chara: mary, text: '私はカサンドラを恨んでなんていなかったのに。' },
        { chara: mary, text: 'むしろ私の恩人。' },
        { chara: mary, text: '彼女が閉じ込められてしまったのは全部私のせい。' },
        { chara: 'ann', text: 'そうだったんだ。' },
        { chara: loretta, text: 'ね、メアリーのせいじゃないでしょ？' },
        { chara: 'ann', text: 'うん、自分を責めても仕方ないよ。' },
        { chara: mary, text: 'そんなこと言われても、合わせる顔なんてないわ。' },
        { chara: 'ann', text: 'だから様子を聞いたのね。' },
        { chara: loretta, text: 'でもメアリーはね、カサンドラに仲直りのプレゼントを作ってるのよ。' },
        { chara: mary, text: 'ちょっと！' },
        { chara: loretta, text: 'いいじゃない。この人にも協力してもらいましょう？' },
        { chara: mary, text: '確かに…、手伝いが必要だわ。' },
        { chara: 'ann', text: '何か手伝うの？' },
        { chara: mary, text: `カーバンクルの魔石を${MAGIC_STONES}つ持ってきなさい。` },
        { chara: loretta, text: '持ってきなさい！' },
        { chara: loretta, text: 'メアリー王女のご命令よ！' }
      ])
      const i = await scene.select(['分かりました', '嫌だ'])
      await scene.talk([
        ...(i === 0 ? [
          { chara: mary, text: 'よろしくお願いするわ。' }
        ] : [
          { chara: loretta, text: '何言ってるの。拒否権なんてないわよ。' }
        ]),
        { chara: mary, text: 'さあ、行ってきなさい。' }
      ])
      state.started = true
      scene.ui.missionUpdate('m2_2')
    }
  }
  mary.setTapEvent(event)
  loretta.setTapEvent(event)
}

export const doorEvent = (scene, door) => {
  const state = scene.storage.state.event
  const loretta = new Talker('matilda', 'ロレッタ', door)
  door.setTapEvent(async () => {
    if (state.m2_2.started && state.m2_2.count < MAGIC_STONES) {
      await scene.talk([
        { chara: loretta, text: '今はナイショの実験中よ。' },
        { chara: loretta, text: '邪魔しちゃダメ。' }
      ])
    } else if (state.m2_2.completed && !state.m2_4.started) {
      await scene.talk([
        { chara: loretta, text: 'あ、ちょっと入らないで！' },
        { chara: loretta, text: '今イイところなんだから…。' }
      ])
    } else {
      scene.mapChange('underpass4', (16).toPixel, (16).toPixelCenter, { r: 'up' })
    }
  })
}
