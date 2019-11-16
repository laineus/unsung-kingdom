import generateBattler from '../util/generateBattler'
export default {
  area: {
    key: 'forest_all',
    x: 0, y: 0
  },
  create (scene) {
    const chara = scene.map.getObjectById(10).setSpeed(180).setDisplayName('？？？')
    const king = scene.map.getObjectById(11)
    chara.setVisible(false)
    king.setVisible(false)
    scene.map.getObjectById(8).setEvent(async () => {
      scene.setEventMode(true)
      scene.player.stopWalk()
      await scene.ui.sleep(500)
      await scene.ui.transition(false, 'slow')
      scene.player.setPosition((50).toPixel, (29).toPixel)
      scene.camera.updateFollow()
      await scene.ui.sleep(500)
      scene.camera.followPlayer(false)
      await scene.camera.move(0, -180, 1000)
      await scene.talk([
        { chara: 'jaquelyn', text: '日が落ち始めたわね。' },
        { chara: 'ann', text: 'もうそろそろ現れるころかな？' },
        { chara: 'francisca', text: 'そうね。' },
        { chara: 'ann', text: '王殺しのジャックって結局何者なんだろうね。' },
        { chara: 'francisca', text: 'さあ、' },
        { chara: 'francisca', text: '捕まえたら分かるかもね。' },
        { chara: 'ann', text: 'どうして暗殺なんてしたんだろう。' },
        { chara: 'jaquelyn', text: 'どこの国の王も命を狙われる理由ならたくさんあるんじゃないかしら。' },
        { chara: 'ann', text: '『平和王エドガー』、平和を願った優しい王さまを殺すなんて…、' },
        { chara, text: 'おい、お前たち、こんなところで何をしている？' }
      ])
      chara.setVisible(true)
      await scene.camera.move(0, 180, 300)
      scene.player.setR('down')
      await scene.talk([
        { chara: 'ann', text: 'え！？' },
        { chara: 'ann', text: 'あ、いえ…その…、' },
        { chara, text: '何をしていると聞いているんだ。' },
        { chara: 'ann', text: 'ええと、' },
        { chara: 'ann', text: 'なんていうか…、' },
        { chara: 'jaquelyn', text: 'お花を摘みに来たのよね。' },
        { chara: 'ann', text: 'そうよ！お花よ！' },
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
      await scene.ui.sleep(500)
      await scene.ui.battle([generateBattler('bear', 1, { hp: 30 })], { boss: true })
      await scene.ui.sleep(500)
      await scene.talk([
        { chara: 'ann', text: 'うぅ…。' },
        { chara: 'francisca', text: '強い…。' },
        { chara, text: '…。' }
      ])
      await chara.setTargetPosition((41).toPixelCenter, (26).toPixelCenter)
      await chara.setTargetPosition((32).toPixelCenter, (26).toPixelCenter)
      chara.setVisible(false)
      await scene.ui.sleep(1500)
      await scene.talk([
        { chara: 'jaquelyn', text: '追いかけないと…。' },
        { chara: 'jaquelyn', text: '大丈夫？アン' },
        { chara: 'ann', text: 'う、うん。' },
        { chara: 'ann', text: 'あれ！？時間水晶がない！' },
        { chara: 'francisca', text: 'きっと奴に盗られたんだわ。' },
        { chara: 'francisca', text: '早く追いかけよう。' }
      ])
      scene.camera.followPlayer(true)
      scene.setEventMode(false)
    })
  }
}
