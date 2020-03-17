import generateBattler from '../util/generateBattler'
export const jack = (scene, area, chara) => {
  const state = scene.storage.state.event.m0_1
  if (state.battled) {
    chara.destroy()
    area.destroy()
    return
  }
  chara.setVisible(false).setR('up').setSpeed(180).setDisplayName('？？？')
  area.setEvent(async () => {
    scene.player.stopWalk()
    await scene.ui.sleep(500)
    await scene.ui.transition('normal')
    scene.player.setPosition((50).toPixel, (29).toPixel)
    scene.camera.updateFollow()
    await scene.ui.sleep(500)
    await scene.camera.look(0, -180, 1000, true)
    await scene.talk([
      { chara: 'jaquelyn', text: '日が落ち始めたわね。' },
      { chara: 'ann', text: 'もうそろそろ現れるころかな？' },
      { chara: 'francisca', text: 'そうね。' },
      { chara: 'ann', text: '王殺しのジャックって結局何者なんだろうね。' },
      { chara: 'francisca', text: 'さあ、' },
      { chara: 'francisca', text: '捕まえたら分かるかもね。' },
      { chara: 'ann', text: 'どうして暗殺なんてしたんだろう。' },
      { chara: 'jaquelyn', text: 'どこの国の王も命を狙われる理由ならたくさんあるんじゃないかしら。' },
      { chara: 'ann', text: '『平和王エドガー』、平和を願った優しい王さまを殺すなんて…、' }
    ])
    await scene.talk([{ chara, text: 'おい、お前たち、こんなところで何をしている？' }])
    chara.setVisible(true)
    await scene.camera.revert(300)
    await scene.talk([
      { chara: 'ann', text: 'え！？' },
      { chara: 'ann', text: 'あ、いえ…その…、' },
      { chara, text: '何をしていると聞いているんだ。' },
      { chara: 'ann', text: 'ええと、' },
      { chara: 'ann', text: 'なんていうか…、' },
      { chara: 'jaquelyn', text: 'お花を摘みに来たのよね。' },
      { chara: 'ann', text: 'そ、そうよ！お花よ！' },
      { chara, text: 'なに？' },
      { chara, text: '武器を持ってか？' },
      { chara: 'ann', text: 'それは…、' },
      { chara: 'francisca', text: 'ちょっとあんた、' },
      { chara: 'francisca', text: 'そういうあんたこそ何者よ？' },
      { chara: 'francisca', text: '怪しい格好で、こんな茂みの中でコソコソと。' },
      { chara: 'ann', text: '確かに！' },
      { chara, text: 'お前たちには関係ない。' },
      { chara, text: 'この場から離れてもらおうか。' },
      { chara: 'ann', text: '分かったわ！あなたが暗殺者ね。' },
      { chara: 'ann', text: 'ここから先へは行かせない！' },
      { chara, text: 'なんだと？' },
      { chara, text: 'お前たちが何者かは知らんが、邪魔をしないでもらえるか？' },
      { chara, text: 'できれば危害は加えたくない。' },
      { chara: 'francisca', text: 'アン、こいつで間違いないと思う。' },
      { chara: 'jaquelyn', text: 'そうね、捕まえましょう。' },
      { chara: 'ann', text: '分かった。' },
      { chara: 'ann', text: 'アンタ、覚悟しなさい！' }
    ])
    await scene.player.setTargetPosition((49).toPixelCenter, (31).toPixelCenter)
    await scene.ui.sleep(500)
    await scene.ui.battle([generateBattler('jack', 5, { hp: 1000 })], { boss: true, defeatEvent: true })
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'ann', text: 'うぅ…。' },
      { chara: 'francisca', text: '強い…。' },
      { chara, text: '装備は没収させてもらうぞ。' }
    ])
    scene.storage.state.weapons.length = 0
    scene.storage.state.battlers.forEach(v => v.weapon = null)
    await scene.ui.sleep(2000)
    await chara.setTargetPosition((41).toPixelCenter, (26).toPixelCenter)
    scene.player.setR('left')
    await chara.setTargetPosition((32).toPixelCenter, (26).toPixelCenter)
    chara.destroy()
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: 'jaquelyn', text: '追いかけないと…。' },
      { chara: 'jaquelyn', text: '大丈夫？アン' },
      { chara: 'ann', text: 'う、うん。' },
      { chara: 'ann', text: 'あれ！？時間水晶がない！' },
      { chara: 'francisca', text: 'きっと装備と一緒に奴に持って行かれたんだ。' },
      { chara: 'francisca', text: '早く追いかけよう。' }
    ])
    scene.camera.revert()
    state.battled = true
    area.destroy()
  })
}

export const king = (scene, area, chara, soldier1, soldier2) => {
  const state = scene.storage.state.event.m0_1
  if (state.completed) {
    chara.destroy()
    area.destroy()
    return
  }
  area.setEvent(async () => {
    scene.player.stopWalk()
    await scene.ui.sleep(500)
    await scene.ui.transition('normal')
    scene.player.setPosition((18).toPixelCenter, (24).toPixelCenter).setR('up')
    scene.camera.updateFollow()
    await scene.ui.sleep(500)
    scene.camera.look((16).toPixel, (18).toPixel, 1000)
    await chara.setTargetPosition((16).toPixel, (17).toPixelCenter)
    await scene.talk([
      { chara: 'ann', text: 'みて、あそこ！あれがエドガー王？' },
      { chara: 'jaquelyn', text: 'よかった、無事みたい。' },
      { chara: 'francisca', text: 'ジャックはどこ…？' },
      { chara: 'jaquelyn', text: '暗殺は諦めたのかもしれないね。とにかく、一回ここを離れましょう。' },
      { chara: 'ann', text: 'うん。' }
    ])
    await scene.ui.missionUpdate('m0_1', true)
    scene.storage.state.chapter = 1
    await scene.mapChange('room1', (19).toPixelCenter, (11).toPixel, { speed: 'slow' })
    scene.camera.revert()
  })
}
