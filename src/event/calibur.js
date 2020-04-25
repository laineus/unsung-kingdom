import generateBattler from '../util/generateBattler'

const removeSword = scene => {
  const layer4 = scene.map.getLayerByName('layer4')
  layer4.layer.data[7][15].index = 326
  layer4.layer.data[7][16].index = 327
  layer4.layer.data[8][15].index = 336
  layer4.layer.data[8][16].index = 337
}

export const calibur = (scene, sword, nikke) => {
  const state = scene.storage.state.event.m4_3
  if (state.completed) removeSword(scene)
  if (!state.started || state.completed) {
    sword.destroy()
    nikke.destroy()
    return
  }
  const fixPosition = async () => {
    if (scene.player.y > (nikke.y + 40)) return
    await scene.ui.transition('fast')
    scene.setMembersPosition(nikke.x, nikke.y + 70, 'up')
    await scene.ui.sleep(300)
  }
  nikke.setDisplayName('ニッケ').setVisible(state.talked)
  const eventTarget = state.talked ? nikke : sword
  const event = async () => {
    await fixPosition()
    const chara = nikke
    const battle = async () => {
      const i = await scene.select(['はい', 'いいえ'])
      if (i === 1) {
        await scene.talk([
          { chara, text: 'じゃあ準備ができたらまた来てね。' }
        ])
        eventTarget.removeTapEvent()
        nikke.setTapEvent(event)
        await scene.camera.revert(500)
        return
      }
      const result = await scene.ui.battle([generateBattler('nikke', 33, { hp: 1500 })], { boss: true })
      if (!result) return
      await scene.talk([
        { chara, text: 'うわ、' },
        { chara, text: '凄く強いんだね。' },
        { chara, text: 'まいったよ。降参だ。' },
        { chara, text: 'キミたち、僕が小さいからって油断しないんだもん。' },
        { chara, text: 'さて、剣ね。' },
        { chara, text: '持っていって。' },
        { chara: 'ann', text: 'ありがとう。' }
      ])
      removeSword(scene)
      scene.ui.increaseWeapon(19)
      await scene.talk([
        { chara, text: 'うん、よく似合ってるよ。' },
        { chara: 'ann', text: 'そうかな。' },
        { chara, text: 'うん。' },
        { chara, text: 'さて、' },
        { chara, text: '剣を見張る必要もなくなったし、' },
        { chara, text: '僕もどこかに旅に出ようかな。' }
      ])
      scene.substances.remove(chara)
      await chara.setSpeed(80).setTargetPosition(chara.x - 70, chara.y + 40)
      await scene.talk([
        { chara, text: 'あ、' },
        { chara, text: 'ところでキミたちさ、' },
        { chara, text: '何かズルしてない？' },
        { chara: 'ann', text: 'え？' },
        { chara, text: 'なんかキミたちが近くに居ると、時間が歪むのを感じるよ…。' },
        { chara: 'ann', text: '…、' },
        { chara, text: 'まあいいか、' },
        { chara, text: 'それもキミたち人間の作った力だろうしね。' }
      ])
      await chara.setSpeed(200).setTargetPosition(chara.x - 20, chara.y + 150)
      await chara.setSpeed(400).setTargetPosition(chara.x - 30, chara.y + 300)
      state.completed = true
      scene.ui.missionUpdate('m4_3', true)
      sword.destroy()
      nikke.destroy()
      await scene.camera.revert(500)
    }
    if (state.talked) {
      await scene.camera.look((16).toPixel, (7).toPixelCenter, 500)
      await scene.talk([
        { chara, text: '準備はできた？' }
      ])
      await battle()
    } else {
      state.talked = true
      await scene.talk([
        { chara: 'ann', text: 'よし、竜族の言葉の煙を出すよ。' }
      ])
      scene.ui.sleep(300)
      const mist = scene.add.rectangle(0, 0, scene.map.width, scene.map.height, 0x44CC88)
      mist.setAlpha(0).setBlendMode(Phaser.BlendModes.OVERLAY).setDepth(140000).setOrigin(0, 0)
      scene.add.tween({
        targets: mist, duration: 1200, ease: 'Power2', alpha: 0.7, yoyo: true, onComplete () { mist.destroy() }
      })
      await scene.ui.sleep(1200)
      nikke.setVisible(true)
      await scene.ui.sleep(300)
      scene.player.tweet('！')
      await scene.ui.sleep(1200)
      await scene.camera.look((16).toPixel, (7).toPixel, 500)
      await scene.talk([
        { chara, text: 'やあ、' },
        { chara, text: '僕を呼んだのはキミだね？' },
        { chara: 'ann', text: 'えっと、ニッケさん？' },
        { chara, text: 'うん。' },
        { chara, text: 'キミは？' },
        { chara: 'ann', text: '私はアン。' },
        { chara, text: 'アン、キミはこの剣が欲しいんだね？' },
        { chara: 'ann', text: 'そう！貸してくれないかな？' },
        { chara, text: 'この剣はね、結構凄いんだ。' },
        { chara, text: '僕たち竜族にとっては中々怖いモノだよ。' },
        { chara, text: '人に返すにはちょっと勇気がいるねー。' },
        { chara: 'ann', text: 'うーん、そこをなんとか…。' },
        { chara, text: 'どうしても？' },
        { chara: 'ann', text: 'どうしても。' },
        { chara, text: '何に使うの？' },
        { chara: 'ann', text: 'えーと、' },
        { chara, text: 'これで竜を殺すのかい？' },
        { chara: 'ann', text: 'うーん…、' },
        { chara, text: '教えてね。' },
        { chara: 'ann', text: 'ソンベルクを倒す。' },
        { chara, text: 'ソンベルクを殺すんだね。' },
        { chara, text: '可哀想なソンベルク。' },
        { chara, text: 'やんちゃな奴だけど僕の友達だよ？' },
        { chara: 'ann', text: 'そうなの？' },
        { chara, text: '十年も封印されて、' },
        { chara, text: 'やっと目が覚めたっていうのに、' },
        { chara, text: '殺されちゃうんだね。' },
        { chara: 'ann', text: 'そう言われても…、' },
        { chara, text: '可哀想なソンベルク。' },
        { chara: 'ann', text: '…。' },
        { chara, text: 'まあでも仕方ないね。' },
        { chara, text: 'ここは今は人間の地だ。' },
        { chara, text: '残った竜族は虐げられても文句は言えない。' },
        { chara: 'ann', text: '虐げるつもりはないんだけど…、' },
        { chara: 'ann', text: 'ソンベルクは説得したら王や王国を襲うのをやめるかな？' },
        { chara, text: 'やめないと思う。' },
        { chara: 'ann', text: 'そうなんだ…。' },
        { chara, text: '聖剣だったね。' },
        { chara, text: 'よし、' },
        { chara, text: 'うん、返すよ。' },
        { chara, text: '人が作ったものだしね。' },
        { chara, text: '人に返すのがフェアだ。' },
        { chara, text: 'そしてそれをどう使おうとキミたちの自由だ。' },
        { chara: 'ann', text: 'いいの！？' },
        { chara, text: 'うん。' },
        { chara, text: 'でも返す相手が人なら誰でもいいとは思ってない。' },
        { chara, text: '見て、' },
        { chara, text: 'これを作った人間は間違いなく強いヤツだ。' },
        { chara, text: 'キミはこれを持つにふさわしいかな？' },
        { chara, text: '試してもいいよね？' },
        { chara: 'ann', text: '試すって？' },
        { chara, text: '僕と戦うんだよ。' },
        { chara: 'ann', text: 'なるほど。' },
        { chara, text: 'それでいいよね？' },
        { chara, text: '準備はできてる？' }
      ])
      await battle()
    }
  }
  eventTarget.setTapEvent(event)
}
