import generateBattler from '../util/generateBattler'
export const evangelina = (scene, queen, queen2, grave) => {
  const state = scene.storage.state.event.m3_5
  queen.setDisplayName('エヴェンジェリナ妃')
  queen2.setDisplayName('エヴェンジェリナ妃').setFaceKey('queen').setVisible(false)
  if (!state.started) {
    grave.setTapEvent(async () => {
      await scene.talk([
        { chara: 'jaquelyn', text: 'ここが王家の墓みたいね。' },
        { chara: 'francisca', text: 'ね、ねえ、なんだか嫌な気配がしない…？' },
        { chara: 'ann', text: 'え、怖いこと言わないでよ。' }
      ])
    })
  }
  if (!state.started || state.completed) {
    queen.destroy()
    queen2.destroy()
    return
  }
  queen.setTapEvent(async chara => {
    await scene.camera.look(chara.x, chara.y + 50, 600)
    await scene.talk([
      { chara: 'ann', text: '…あ、あの。' },
      { chara: 'ann', text: '王妃殿下…？' },
      { chara, text: '…さない' },
      { chara: 'ann', text: '？' },
      { chara, text: '…許さない…' },
      { chara, text: 'エドガー…' },
      { chara, text: '許さない…' },
      { chara: 'ann', text: 'えっと、私たちは違います。' },
      { chara, text: '…殺す' }
    ])
    await scene.ui.sleep(500)
    const result = await scene.ui.battle([generateBattler('queen', 32, { hp: 1700 })], { boss: true, bgm: 'battle3' })
    if (!result) return
    chara.die()
    await scene.camera.revert(600)
    await scene.talk([
      { chara: 'ann', text: '…倒した？' },
      { chara: 'jaquelyn', text: 'みたいね。' },
      { chara: 'ann', text: 'じゃあこれで王は助かるのかな？' },
      { chara: 'francisca', text: '王国史に書かれていた亡霊ってのが、さっきの偽物のほうのことだったらね。' },
      { chara: 'ann', text: 'え！？' },
      { chara: 'ann', text: '考えていなかったけど、' },
      { chara: 'ann', text: '本物の王妃は、違うよね…？' },
      { chara: 'jaquelyn', text: '分からないけど、' },
      { chara: 'jaquelyn', text: '帰って王国史を確認すれば分かんるじゃないかしら？' },
      { chara: 'ann', text: 'そうだね、帰ろっか。' }
    ])
    queen2.setVisible(true)
    scene.francisca.setAllowWalkingWhileEvent(true)
    scene.jaquelyn.setAllowWalkingWhileEvent(true)
    await scene.player.setSpeed(200).setTargetPosition((15).toPixelCenter, (21).toPixelCenter)
    chara = queen2
    await scene.talk([
      { chara, text: 'お待ちなさい。' },
      { chara: 'ann', text: 'え！？' }
    ])
    await scene.camera.look(chara.x, chara.y - 60, 600)
    await scene.talk([
      { chara, text: 'あなたたち、' },
      { chara, text: 'ありがとう。' },
      { chara: 'ann', text: 'ええと…。' },
      { chara: 'ann', text: '本物の…、エヴァンジェリナ妃？' },
      { chara, text: 'ええ。' },
      { chara, text: 'ありがとう、' },
      { chara, text: '私を偽る悪しき存在から、私の場所を守ってくれて。' },
      { chara: 'ann', text: 'い、いえ。どういたしまして。' },
      { chara: 'ann', text: 'あの、' },
      { chara: 'ann', text: '王妃は、エドガー王を恨んでいますか？' },
      { chara, text: 'いいえ。' },
      { chara, text: 'あなた達が気にしていることなら分かっています。' },
      { chara, text: '答えましょう。' },
      { chara, text: '恨むことなど一つもありませんでした。' },
      { chara, text: '私が病弱で、' },
      { chara, text: '民の前に中々姿を見せらないばかりに、' },
      { chara, text: 'よくない噂をされるようになってしまいました。' },
      { chara, text: 'エドガーには感謝しかありません。' },
      { chara: 'ann', text: 'よかった。' },
      { chara, text: '私の病気は始めからです。' },
      { chara, text: 'エドガーと知り合ったときから、' },
      { chara, text: '既に死ぬことは決まっていたのです。' },
      { chara, text: 'それでもエドガーは、' },
      { chara, text: '私を選んでくれたのです。' },
      { chara: 'ann', text: 'そうだったんですね。' },
      { chara: 'ann', text: '失礼なことを聞いて、ごめんなさい。' },
      { chara, text: 'いいんです。' },
      { chara, text: '旅の人、' },
      { chara, text: '私は今も、エドガーの愛するこの国の平和を願い続けています。' },
      { chara, text: 'ですが、とても心配しています。' },
      { chara, text: 'かつてエドガーが神殿に封じたドラゴンが、' },
      { chara, text: '目覚め、' },
      { chara, text: '復讐を果たそうとしています。' },
      { chara, text: '私には、祈ることしかできません。' },
      { chara, text: 'もしもあなた達がこの国の平和を望むのなら、' },
      { chara, text: 'どうか彼に、力を貸してあげてください。' }
    ])
    state.completed = true
    scene.ui.missionUpdate('m3_5', true)
    scene.add.tween({
      targets: queen2, duration: 500, alpha: 0,
      onComplete: () => queen2.destroy()
    })
    scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'ann', text: 'あ！待って！' },
      { chara: 'ann', text: '…消えちゃった。' },
      { chara: 'ann', text: '詳しく話を聞きたかったんだけど…、' },
      { chara: 'francisca', text: '仕方ない、一旦帰ろう。' }
    ])
    await scene.ui.sleep(1000)
    scene.storage.state.chapter = 4
    await scene.mapChange('room1', (19).toPixelCenter, (11).toPixel, { speed: 'slow' })
  })
}
