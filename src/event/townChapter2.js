import { annabelle, matilda, max, elliott } from './townCommon'
export default (scene, charas) => {
  const eState = scene.storage.state.event.m2
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    if (eState.talked_annabelle) {
      await scene.talk(eState.talked_amber2 ? [
        { chara, text: '公爵によろしくね。' }
      ] : [
        { chara: 'ann', text: '公爵への贈り物、決まりましたか？' },
        { chara, text: 'いいえ、困っているのよ。' },
        { chara: 'ann', text: 'チューリップなんてどうですか？' },
        { chara, text: 'そうね、流行っているしいいかもしれないわね。' },
        { chara, text: 'でも珍しい模様のものはさすがに私にも高すぎるわ…。' },
        { chara: 'ann', text: '球根でよければおすそ分けしますよ！' },
        { chara, text: 'あら、いいの？' },
        { chara, text: '確かに咲く前のものなら、楽しみもありそうね。' },
        { chara: 'ann', text: 'どうぞ！' },
        { chara, text: 'ありがとう。' },
        { chara, text: 'さっそく遣いに届けさせるわ。' },
        { chara: 'ann', text: 'あ、私たちちょうど近くに用があるので届けますよ！' },
        { chara, text: 'あら、ほんとに？' },
        { chara, text: '何から何まで申し訳ないわ。' },
        { chara: 'ann', text: 'いいんです！' },
        { chara, text: 'そう？じゃあお願いするわ。' },
        { chara, text: '公爵への手紙と地図を書くわね。' },
        { chara, text: 'これで邸宅の入り口までは通してもらえるはずよ。' }
      ])
      eState.talked_amber2 = true
      scene.storage.state.allowed_map = Math.max(scene.storage.state.allowed_map, 3)
      scene.ui.announce('マップ「トロイア公爵邸の地下通路」が解放された')
    } else {
      const i = await scene.select(['地下通路について', 'トロイア公爵邸について'])
      await scene.talk(i ? [
        { chara, text: '王城の地下通路ね。' },
        { chara, text: '戦争のときなんかに王族が城外に逃げるために使うのね。' },
        { chara: 'ann', text: 'どこにあるか知っていますか？' },
        { chara, text: 'さすがに知らないわ。' },
        { chara, text: '出口が敵国にバレたら意味がないもの。極秘なのよね。' },
        { chara: 'ann', text: 'なるほど。' }
      ] : [
        { chara, text: '街を出て南東のほうにあるわ。' },
        { chara, text: 'あなた、行きたいの？' },
        { chara, text: '近くまでは行けるでしょうけど、敷地内には入れないわよ。' },
        { chara: 'ann', text: 'アンバーさんは入れるんですか？' },
        { chara, text: 'ええ、まあ。' },
        { chara, text: '公爵とは結構仲がいいのよ。' },
        { chara, text: 'よく贈り物を贈り合ったりしているわ。' },
        { chara, text: 'ちょうどこの間もオレンジのジャムをいただいたの。' },
        { chara: 'francisca', text: 'それは高級品ですね。' },
        { chara: 'ann', text: 'そうなの…？' },
        { chara, text: 'ええ、そうよ。' },
        { chara, text: 'だから今度は何を送ろうか悩んでいるのよ。' },
        { chara, text: '何か良いアイディアがあったら教えてちょうだいね。' }
      ])
      if (i) eState.talked_amber1 = true
    }
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => {
    if (eState.talked_elliott && !eState.talked_amber2) {
      await scene.talk([
        ...(eState.talked_annabelle ? [] : [
          { chara, text: 'お花？' },
          { chara, text: 'うん、色々育ててるよ。' },
          { chara, text: 'お姉さんもチューリップが欲しいのかな？' },
          { chara, text: 'あったけど、残念ながら他のお客さんに売っちゃった。' },
          { chara: 'ann', text: 'そっかあ。' },
          { chara, text: '代わりに余ってる球根をいくつかあげるわ。' },
          { chara, text: 'もしかしたら珍しい模様になって高値がつくかも。' },
          { chara: 'ann', text: 'いいの！？' },
          { chara, text: 'うん。' },
          { chara: 'ann', text: 'ありがとう！' },
          { chara, text: 'どういたしまして。' }
        ]),
        { chara, text: 'またなんでも相談してね。' }
      ])
      eState.talked_annabelle = true
    } else {
      annabelle(scene, chara)
    }
  })
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => matilda(scene, chara))
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => {
    if (eState.talked_amber1 && !eState.talked_annabelle) {
      await scene.talk([
        ...(eState.talked_elliott ? [] : [
          { chara, text: '貴族が喜びそうなもの？' },
          { chara, text: 'そりゃ今はチューリップだな。' },
          { chara: 'ann', text: 'チューリップ…？' },
          { chara, text: 'ああ、珍しい模様のチューリップを屋敷に飾って自慢するのが流行っているらしい。' },
          { chara, text: '花なんか見て何が楽しいのかは知らんが、' },
          { chara, text: '珍しい模様の物は貴族が高値で買うって言うんで俺も興味を持っているところだ。' },
          { chara: 'ann', text: '手に入った？' },
          { chara, text: 'いいや、' }
        ]),
        { chara, text: '宿屋のアナベルが花を育てているから、聞いてみたらどうだ？' },
        { chara, text: '俺ももらいに行きたいところだが、あいつ俺には何もくれないんだよな…。' }
      ])
      eState.talked_elliott = true
    } else {
      elliott(scene, chara)
    }
  })
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => {
    if (eState.talked_amber1 && !eState.talked_elliott) {
      await scene.talk([
        { chara, text: '貴族が喜びそうなもの？' },
        { chara, text: 'そういうのはエリオットが詳しいぜ。' }
      ])
    } else {
      max(scene, chara)
    }
  })
}
