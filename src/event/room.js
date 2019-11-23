import chapters from '../data/chapters'

export const execChapterBeginEvents = (scene) => {
  const chapter = scene.storage.state.chapter
  const state = scene.storage.state.event.chapter_begin
  const francisca = scene.map.getObjectById(6).setDisplayName('Francisca').setFaceKey('francisca')
  const jaquelyn = scene.map.getObjectById(7).setDisplayName('Jaquelyn').setFaceKey('jaquelyn')
  if (state[chapter]) {
    francisca.setVisible(false)
    jaquelyn.setVisible(false)
    return
  }
  state[chapter] = true
  events[chapter](scene, francisca, jaquelyn)
}

const events = [
  async (scene, francisca, jaquelyn) => {
    await scene.talk([
      { chara: 'ann', text: 'じゃ、みんな、あらためてよろしく！' },
      { chara: jaquelyn, text: 'よろしくね、アン。' },
      { chara: francisca, text: 'アンが仕切るの？不安なんですけど。' },
      { chara: francisca, text: '私達がこの時代に来た目的、ちゃんと理解してる？' },
      { chara: 'ann', text: '当たり前じゃん！' },
    ])
    const i = await scene.select(['王の暗殺を阻止すること', '観光'])
    await scene.talk([
      ...(i === 0 ? [
        { chara: 'ann', text: '私達の目的はエドガー王が暗殺されるのを阻止すること。' },
        { chara: jaquelyn, text: 'ちゃんと覚えていて偉いわ、アン。' },
      ] : [
        { chara: francisca, text: 'はぁ…。' },
        { chara: jaquelyn, text: 'そうじゃないでしょ、アン。' },
        { chara: jaquelyn, text: '私達の目的はエドガー王が暗殺されるのを阻止することよ。' },
        { chara: 'ann', text: 'じょ、冗談だよ！' },
        { chara: 'ann', text: '忘れるわけないじゃん！' }
      ]),
      { chara: 'ann', text: '全べリオン人がずっと悔やんできたことだもの。' },
      { chara: jaquelyn, text: 'そうね。' },
      { chara: francisca, text: 'べリオン王国史によると、王が暗殺されたのは明日の夕暮れ、王城の裏庭。' },
      { chara: francisca, text: '暗殺者の正体、目的は不明。' },
      { chara: francisca, text: '私たちは通りがかりの旅人としてそれを阻止する。' },
      { chara: jaquelyn, text: '問題ないわ。' },
      { chara: jaquelyn, text: '準備ができたらすぐに出発しましょう。' },
      { chara: 'ann', text: '準備ならバッチリ！早く行こう！' },
      { chara: jaquelyn, text: 'アン、その自動小銃は置いていこうね。' },
      { chara: jaquelyn, text: 'みんなの分の武器は調達してあるから。' },
      { chara: 'ann', text: 'すごい、この時代の剣だね！これで戦うの？' },
      { chara: francisca, text: 'フェアに、正々堂々と、そういうルールよ。銃は禁止。' },
      { chara: 'ann', text: 'そ、そうだった。' },
      { chara: francisca, text: 'あと、時間水晶はちゃんと持ってる？' },
      { chara: 'ann', text: 'あるよ！これね！' },
      { chara: francisca, text: '気をつけてよね。なくしたら二度と未来に戻れくなるんだから。' },
      { chara: francisca, text: 'ジャクリーンも、なんでアンなんかに持たせるのよ。' },
      { chara: jaquelyn, text: 'アンが持ちたいって言うから。' },
      { chara: francisca, text: 'はあ…。' },
      { chara: francisca, text: 'もしなくしたら、アンの先祖の家を見つけ出して燃やすわ。' },
      { chara: 'ann', text: 'ひどい！' },
      { chara: jaquelyn, text: 'アンなら大丈夫よ。' },
      { chara: jaquelyn, text: 'さあ、行きましょう。' }
    ])
    await scene.ui.transition(true, 'slow')
    francisca.setVisible(false)
    jaquelyn.setVisible(false)
  },
  async (scene, francisca, jaquelyn) => {
    scene.player.setR('down')
    await scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'ann', text: 'まさか負けうちゃんなんて…。' },
      { chara: jaquelyn, text: 'でも少なくとも王は殺されずに済んだみたいだけど。' },
      { chara: francisca, text: '成功とは言いづらいけど、まあ、そうね。' },
      { chara: 'ann', text: 'うーん。' },
      { chara: 'ann', text: 'これでよかったのかな…？' }
    ])
    await scene.ui.sleep(2000)
    await scene.talk([
      { chara: 'ann', text: 'あれ！？' },
      { chara: 'ann', text: 'ちょっと、みんなこれ見て！' },
      { chara: jaquelyn, text: 'どうしたの？' },
      { chara: francisca, text: 'べリオン王国史ね。内容に何か変化があった？' },
      { chara: jaquelyn, text: '未来が変わっていれば書物の内容も変わっているはずね。' },
      { chara: 'ann', text: 'そうなんだけど、これ…' },
      { chara: francisca, text: 'ふんふん、' },
      { chara: francisca, text: '「王は急な病に伏して亡くなった」か。' },
      { chara: jaquelyn, text: 'やっぱり暗殺される歴史は変えることができたみたいね。' },
      { chara: 'ann', text: '病気ってことは、この歴史は悲しまなくてもいいのかな？' },
      { chara: francisca, text: 'そうとも言えないかも。' },
      { chara: francisca, text: '亡くなった時期がほとんど変わっていない。' },
      { chara: jaquelyn, text: 'その後の歴史も暗いままだわ。' },
      { chara: 'ann', text: 'どうしよう…。' },
      { chara: jaquelyn, text: '落ち込んじゃだめよ、アン。' },
      { chara: 'ann', text: 'そうだね、' },
      { chara: 'ann', text: 'とにかくこの件も調査してみよう！' },
      { chara: 'ann', text: '私たちにできることが何かあるかも。' },
      { chara: francisca, text: 'あと時間水晶もね。王殺しのジャックを見つけて取り返さないと。' },
      { chara: 'ann', text: 'そうだった、結局このままじゃ帰れないんだった。' },
      { chara: 'ann', text: '王殺しのジャック…、' },
      { chara: 'ann', text: '結局正体は分からずじまいだったね。' },
      { chara: francisca, text: '倒せなかったんだし、まだ王を殺そうとしている可能性もある。' },
      { chara: 'ann', text: 'そんな…！' },
      { chara: jaquelyn, text: 'あいつ…、本当に強かったわ。' },
      { chara: 'ann', text: 'うん、でも、' },
      { chara: 'ann', text: '次会うまでに私たちも強くなろう！' },
      { chara: jaquelyn, text: 'そうね。' }
    ])
    await scene.ui.chapterStart(`${chapters[1].name} ${chapters[1].title}`)
    francisca.setVisible(false)
    jaquelyn.setVisible(false)
  }
]
