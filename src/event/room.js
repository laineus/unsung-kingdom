
export const execChapterBeginEvents = (scene) => {
  const chapter = scene.storage.state.chapter
  const state = scene.storage.state.event[`m${chapter}`]
  if (state.room_begin) return
  state.room_begin = true
  chapterBeginEvents[chapter](scene)
}

const chapterBeginEvent0 = (scene) => {
  scene.talk([
    { chara: 'ann', text: 'じゃ、みんな、あらためてよろしく！' },
    { chara: 'jaquelyn', text: 'よろしくね、アン。' },
    { chara: 'francisca', text: 'アンが仕切るの？不安なんですけど。' },
    { chara: 'francisca', text: '私達がこの時代に来た目的、ちゃんと理解してる？' },
    { chara: 'ann', text: '当たり前よ！' },
    { chara: 'ann', text: '私達の目的はエドガー王が暗殺されるのを阻止すること。' },
    { chara: 'jaquelyn', text: 'ちゃんと覚えていて偉いわ、アン。' },
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
}

const chapterBeginEvents = [
  chapterBeginEvent0
]
