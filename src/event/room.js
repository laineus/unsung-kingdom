import chapters from '../data/chapters'

const setDefaultWeapon = state => {
  state.weapons = [{ id: 1, weapon_id: 1 }, { id: 2, weapon_id: 1 }, { id: 3, weapon_id: 2 }]
  state.battlers.forEach((v, i) => (v.weapon = i + 1))
}

export const execChapterBeginEvents = (scene) => {
  const chapter = scene.storage.state.chapter
  const state = scene.storage.state.event.chapter_begin
  if (state[chapter]) return
  const francisca = scene.francisca.setPosition(655, 440).setR('up')
  const jaquelyn = scene.jaquelyn.setPosition(591, 440).setR('up')
  state[chapter] = true
  scene.ui.autoEvent(async () => {
    await events[chapter](scene)
  })
}

const events = [
  async (scene) => {
    await scene.talk([
      { chara: 'ann', text: 'じゃ、みんな、あらためてよろしく！' },
      { chara: 'jaquelyn', text: 'よろしくね、アン。' },
      { chara: 'francisca', text: 'アンが仕切るの？不安なんですけど。' },
      { chara: 'francisca', text: '私達がこの時代に来た目的、ちゃんと理解してる？' },
      { chara: 'ann', text: '当たり前じゃん！' },
    ])
    const i = await scene.select(['王の暗殺を阻止すること', '観光'])
    await scene.talk([
      ...(i === 0 ? [
        { chara: 'ann', text: '私達の目的はエドガー王が暗殺されるのを阻止すること。' },
        { chara: 'jaquelyn', text: 'ちゃんと覚えていて偉いわ、アン。' },
      ] : [
        { chara: 'francisca', text: 'はぁ…。' },
        { chara: 'jaquelyn', text: 'そうじゃないでしょ、アン。' },
        { chara: 'jaquelyn', text: '私達の目的はエドガー王が暗殺されるのを阻止することよ。' },
        { chara: 'ann', text: 'じょ、冗談だよ！' },
        { chara: 'ann', text: '忘れるわけないじゃん！' }
      ]),
      { chara: 'ann', text: '全べリオン人がずっと悔やんできたことだもの。' },
      { chara: 'jaquelyn', text: 'そうね。' },
      { chara: 'francisca', text: 'べリオン王国史によると、王が暗殺されたのは明日の夕暮れ、王城の裏庭。' },
      { chara: 'francisca', text: '暗殺者の正体、目的は不明。' },
      { chara: 'francisca', text: '私たちは通りがかりの旅人としてそれを阻止する。' },
      { chara: 'jaquelyn', text: '問題ないわ。' },
      { chara: 'jaquelyn', text: '準備ができたらすぐに出発しましょう。' },
      { chara: 'ann', text: '準備ならバッチリ！早く行こう！' },
      { chara: 'jaquelyn', text: 'アン、その自動小銃は置いていこうね。' },
      { chara: 'jaquelyn', text: 'みんなの分の武器は調達してあるから。' },
      { chara: 'ann', text: 'すごい、この時代の剣だね！これで戦うの？' },
      { chara: 'francisca', text: 'フェアに、正々堂々と、そういうルールよ。銃は禁止。' },
      { chara: 'ann', text: 'そ、そうだった。' },
      { chara: 'francisca', text: 'あと、時間水晶はちゃんと持ってる？' },
      { chara: 'ann', text: 'あるよ！これね！' },
      { chara: 'francisca', text: '気をつけてよね。なくしたら二度と未来に戻れくなるんだから。' },
      { chara: 'francisca', text: 'ジャクリーンも、なんでアンなんかに持たせるのよ。' },
      { chara: 'jaquelyn', text: 'アンが持ちたいって言うから。' },
      { chara: 'francisca', text: 'はあ…。' },
      { chara: 'francisca', text: 'もしなくしたら、アンの先祖の家を見つけ出して燃やすわ。' },
      { chara: 'ann', text: 'ひどい！' },
      { chara: 'jaquelyn', text: 'アンなら大丈夫よ。' },
      { chara: 'jaquelyn', text: 'さあ、行きましょう。' }
    ])
    await scene.ui.transition('normal')
    setDefaultWeapon(scene.storage.state)
  },
  async (scene) => {
    scene.player.setR('down')
    await scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'ann', text: 'まさか負けうちゃんなんて…。' },
      { chara: 'jaquelyn', text: 'でも少なくとも王は殺されずに済んだみたいだけど。' },
      { chara: 'francisca', text: '成功とは言いづらいけど、まあ、そうね。' },
      { chara: 'ann', text: 'うーん。' },
      { chara: 'ann', text: 'これでよかったのかな…？' }
    ])
    await scene.ui.sleep(2000)
    await scene.talk([
      { chara: 'ann', text: 'あれ！？' },
      { chara: 'ann', text: 'ちょっと、みんなこれ見て！' },
      { chara: 'jaquelyn', text: 'どうしたの？' },
      { chara: 'francisca', text: 'べリオン王国史ね。内容に何か変化があった？' },
      { chara: 'jaquelyn', text: '未来が変わっていれば書物の内容も変わっているはずね。' },
      { chara: 'ann', text: 'そうなんだけど、これ…' },
      { chara: 'francisca', text: 'ふんふん、' },
      { chara: 'francisca', text: '「王は急な病に伏して亡くなった」か。' },
      { chara: 'jaquelyn', text: 'やっぱり暗殺される歴史は変えることができたみたいね。' },
      { chara: 'ann', text: '病気ってことは、この歴史は悲しまなくてもいいのかな？' },
      { chara: 'francisca', text: 'そうとも言えないかも。' },
      { chara: 'francisca', text: '亡くなった時期がほとんど変わっていない。' },
      { chara: 'jaquelyn', text: 'その後の歴史も暗いままだわ。' },
      { chara: 'ann', text: 'どうしよう…。' },
      { chara: 'jaquelyn', text: '落ち込んじゃだめよ、アン。' },
      { chara: 'ann', text: 'そうだね、' },
      { chara: 'ann', text: 'とにかくこの件も調査してみよう！' },
      { chara: 'ann', text: '私たちにできることが何かあるかも。' },
      { chara: 'francisca', text: 'あと時間水晶もね。王殺しのジャックを見つけて取り返さないと。' },
      { chara: 'ann', text: 'そうだった、結局このままじゃ帰れないんだった。' },
      { chara: 'ann', text: '王殺しのジャック…、' },
      { chara: 'ann', text: '結局正体は分からずじまいだったね。' },
      { chara: 'francisca', text: '倒せなかったんだし、まだ王を殺そうとしている可能性もある。' },
      { chara: 'ann', text: 'そんな…！' },
      { chara: 'jaquelyn', text: 'あいつ…、本当に強かったわ。' },
      { chara: 'ann', text: 'うん、でも、' },
      { chara: 'ann', text: '次会うまでに私たちも強くなろう！' },
      { chara: 'jaquelyn', text: 'そうね。' }
    ])
    await scene.ui.chapterStart(`${chapters[1].name} ${chapters[1].title}`)
    setDefaultWeapon(scene.storage.state)
  },
  async (scene) => {
    scene.player.setR('down')
    await scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'ann', text: 'さあ、べリオン王国史を確認するよ！' },
      { chara: 'jaquelyn', text: '前は、「王は急な病に伏して死ぬ」だったわね。' },
      { chara: 'ann', text: 'えーと、' },
      { chara: 'ann', text: 'ここだ' },
      { chara: 'ann', text: '「退役した王国騎士に裏切られ、殺される」…。' },
      { chara: 'ann', text: 'また死んじゃう未来だよ！' },
      { chara: 'francisca', text: 'まあ、そんな気はしたけど。' },
      { chara: 'jaquelyn', text: 'もしかして、歴史を変えることって不可能なのかしら？' },
      { chara: 'jaquelyn', text: 'この前もそうだけど、死因が変わっただけであって、王が死ぬという歴史は変わってないわ…。' },
      { chara: 'ann', text: 'え、そんなの困るよ！' },
      { chara: 'ann', text: 'うーん…、' },
      { chara: 'ann', text: 'きっと何か、王が死ななければいけない理由があるんじゃないかな。' },
      { chara: 'ann', text: 'それが運命的なものなのか、もっと具体的なものなのかは分からないけど…。' },
      { chara: 'ann', text: 'とにかくそれを突き止めなきゃいけない気がする。' },
      { chara: 'francisca', text: 'どうやって？' },
      { chara: 'ann', text: '次の死因も調査して、王を助けよう！' },
      { chara: 'ann', text: '私は、今やっていることは無駄じゃないと思うの。' },
      { chara: 'ann', text: 'ここ数日で分かってきたことも多いし…、' },
      { chara: 'francisca', text: '確かに、もっと情報は欲しいね。' },
      { chara: 'jaquelyn', text: 'どちらにしても助けないわけにはいかないものね。' },
      { chara: 'ann', text: 'じゃあ決まり！' },
      { chara: 'ann', text: '王を助けつつ、王が死んでしまう謎を追いかける。' },
      { chara: 'jaquelyn', text: '今回の王の死について、王国史にもっと詳しい情報はあるかしら？' },
      { chara: 'ann', text: 'うん、' },
      { chara: 'ann', text: '「現場は王城、深夜に外部から侵入した元騎士のヘクターによって殺害される」' },
      { chara: 'ann', text: '「ヘクターは王城の地下に作られた隠し通路から侵入したとされる」' },
      { chara: 'ann', text: 'だって。' },
      { chara: 'jaquelyn', text: 'この元騎士のヘクターって、王殺しのジャックと同一人物かしら？' },
      { chara: 'francisca', text: 'どうかな、もしそうだとすると厄介だね。' },
      { chara: 'jaquelyn', text: 'まずはどうしよっか？' },
      { chara: 'ann', text: 'この隠し通路ってところに行ってみよう。' },
      { chara: 'francisca', text: '隠し通路か。きっと籠城時とかに使うためのものかな。' },
      { chara: 'jaquelyn', text: '場所は書物に記載があるかしら？' },
      { chara: 'ann', text: 'えっとね、' },
      { chara: 'ann', text: 'うん、あるよ！' },
      { chara: 'ann', text: 'お城の地下から、トロイア公爵っていう貴族の領地に繋がっているみたい。' },
      { chara: 'francisca', text: '場所が特定できてるのは幸いだけど、貴族の領地か…、' },
      { chara: 'francisca', text: '勝手に入り込んで隠し通路の入り口探しってわけにはいかないね。' },
      { chara: 'ann', text: 'じゃあまずはトロイア公爵の領地に近づく手段を見つけるところからだね！' },
      { chara: 'ann', text: '行こう！' }
    ])
    await scene.ui.chapterStart(`${chapters[2].name} ${chapters[2].title}`)
  },
  async (scene) => {
    scene.player.setR('down')
    await scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'francisca', text: 'さあアン、王国史はどうなった？' },
      { chara: 'francisca', text: '次はなにで死ぬことになった？' },
      { chara: 'ann', text: 'ちょっと！まだそうと決まったわけじゃないでしょ！' },
      { chara: 'jaquelyn', text: '助かっているといいわね。' },
      { chara: 'ann', text: 'ええっと、' },
      { chara: 'ann', text: '「王は王妃の亡霊に呪い殺されたと語られている」' },
      { chara: 'ann', text: '何それ！怖い！' },
      { chara: 'ann', text: 'というかやっぱりまた死んじゃうの？' },
      { chara: 'francisca', text: 'しかも亡霊に呪い殺されるって…、' },
      { chara: 'jaquelyn', text: 'そんなことあるかしら。' },
      { chara: 'jaquelyn', text: 'もし噂が語り継がれただけだとしたら、今回は情報がないようなものね。' },
      { chara: 'ann', text: 'ねえ、今回の件もジャックが絡んでいるんじゃないかな？' },
      { chara: 'francisca', text: 'うん、そうだろうね。' },
      { chara: 'jaquelyn', text: '地下通路でも怪しかったわ。' },
      { chara: 'ann', text: 'きっとどの死因もジャックが黒幕だったのかも。' },
      { chara: 'ann', text: 'ジャックは王を殺そうとしたけど、それを私たちが妨害した。' },
      { chara: 'ann', text: 'するとジャックは別の方法でまた王を殺そうとする。' },
      { chara: 'ann', text: 'だから何度も王が死ぬ歴史になっちゃうんだ。' },
      { chara: 'jaquelyn', text: 'うんうん、それなら納得がいくわ。' },
      { chara: 'francisca', text: 'つまりジャックを殺せばいいわけね。' },
      { chara: 'ann', text: 'そ、そうなるのか…。' },
      { chara: 'ann', text: '何か別の方法はないかな？' },
      { chara: 'jaquelyn', text: 'ジャックに会って説得するのはどうかしら？' },
      { chara: 'jaquelyn', text: '説得できないとしても、何故王を殺そうとしているのか理由を聞きたいわ。' },
      { chara: 'ann', text: 'それがよさそうだね。' },
      { chara: 'ann', text: 'どうやってジャックを見つけようか？' },
      { chara: 'francisca', text: 'また今回の死因を追いかければ、ジャックのところに行き着くんじゃないかな。' },
      { chara: 'ann', text: 'たしかに。' },
      { chara: 'ann', text: 'よし、それじゃあ決まり！' },
      { chara: 'ann', text: 'また街に出て聞き込みに行くよ！' }
    ])
    await scene.ui.chapterStart(`${chapters[3].name} ${chapters[3].title}`)
  },
  async (scene) => {
    scene.player.setR('down')
    await scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'jaquelyn', text: '最後に王妃の亡霊が言っていたこと、気になるわね。' },
      { chara: 'ann', text: 'ドラゴンのことだね。' },
      { chara: 'francisca', text: 'あとジャックのことも、どうなったかな。' },
      { chara: 'francisca', text: 'あそこで死なれていたとしたら厄介だ。' },
      { chara: 'ann', text: 'そうなの？' },
      { chara: 'francisca', text: 'まだ時間水晶を取り返していない。' },
      { chara: 'ann', text: 'たしかに。' },
      { chara: 'jaquelyn', text: 'とにかく、まずは王国史を確認してみましょう。' },
      { chara: 'ann', text: 'オーケー。' },
      { chara: 'ann', text: 'ええと、' },
      { chara: 'ann', text: '「王はドラゴンとの戦いに破れて死ぬ」' },
      { chara: 'ann', text: '王妃の言っていた件だね。' },
      { chara: 'jaquelyn', text: 'ドラゴン…、' },
      { chara: 'jaquelyn', text: '私たちの手に負えるかしら。' },
      { chara: 'ann', text: 'でもやることシンプルだね！' },
      { chara: 'ann', text: '倒せばいいんでしょ？' },
      { chara: 'francisca', text: 'いや、倒すことにこだわらなくても…、' },
      { chara: 'ann', text: 'そうか。' },
      { chara: 'francisca', text: 'ところでさ、' },
      { chara: 'francisca', text: 'なんか外が騒がしくない？' },
      { chara: 'ann', text: 'たしかに、' },
      { chara: 'ann', text: '今日は街の様子がいつもと違うね。' },
      { chara: 'ann', text: '見に行ってみよう。' }
    ])
    await scene.ui.chapterStart(`${chapters[4].name} ${chapters[4].title}`)
  }
]
