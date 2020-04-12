export default (scene, charas) => {
  // const eState = scene.storage.state.event.m5
  const eState = scene.storage.state.event.m5_1
  const { soldier1, soldier2 } = charas
  soldier1.setVisible(!eState.started)
  soldier2.setVisible(!eState.started)
  // 兵士
  const soldierEvent = async () => {
    await scene.talk([
      { chara: soldier1, text: 'あ、おい見ろ。この者たちじゃないか？' },
      { chara: soldier2, text: 'ああ、間違いない。' },
      { chara: soldier2, text: '確かにグリファルデ神殿で王の救出を手伝った者たちだ。' },
      { chara: 'ann', text: 'なんですか？' },
      { chara: soldier1, text: '君たち、あのとき何故急に姿を消した？' },
      { chara: 'ann', text: 'あ、ええと、忙しくて…。' },
      { chara: soldier1, text: '王弟殿下がお礼をしたいとのことだ。' },
      { chara: soldier1, text: 'この手紙を預かっている。' },
      { chara: soldier2, text: '恐らく王城への招待のはずだ。' },
      { chara: soldier2, text: 'きっと来てくれよ。' }
    ])
    await scene.ui.transition('normal')
    soldier1.setVisible(false)
    soldier2.setVisible(false)
    await scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'ann', text: '中身を読むね。' },
      { chara: 'ann', text: '「王城の裏庭で待つ」' },
      { chara: 'ann', text: '…。' },
      { chara: 'ann', text: 'おわり。' },
      { chara: 'francisca', text: 'え？なにそれ。それだけ？' },
      { chara: 'jaquelyn', text: '変ね。' },
      { chara: 'ann', text: '裏庭って最初にジャックの暗殺を止めたところだよね。' },
      { chara: 'ann', text: 'うーん。' },
      { chara: 'ann', text: 'よく分からないけど行くしかないね。' }
    ])
    eState.started = true
    scene.ui.missionUpdate('m5_1')
  }
  charas.soldier1.setTapEvent(soldierEvent)
  charas.soldier2.setTapEvent(soldierEvent)
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {})
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => {})
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => {})
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => {})
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => {})
}
