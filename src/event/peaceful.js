export const peaceful = (scene, area1, area2, soldier1, soldier2, jack) => {
  jack.setVisible(false).setDisplayName('ジャック')
  soldier1.setDisplayName('衛兵').setR('right')
  soldier2.setDisplayName('衛兵').setR('left')
  const state = scene.storage.state.event.m5_1
  const afterSawSoldiers = () => {
    jack.setVisible(true)
    soldier1.setVisible(false)
    soldier2.setVisible(false)
    area1.setActive(true)
    area2.setActive(false)
  }
  area2.setEvent(async () => {
    await scene.camera.look((16).toPixel, (15).toPixel, 800)
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: soldier1, text: '暗殺を企てている者の格好は黒いローブ。' },
      { chara: soldier1, text: '王弟殿下によると、見つけ次第、即処刑してよいとのことだ。' },
      { chara: soldier2, text: '黒いローブだな。分かった。' }
    ], { angle: false })
    await scene.ui.sleep(500)
    await scene.ui.transition('normal')
    await scene.camera.revert(0)
    scene.setMembersPosition((26).toPixelCenter, (20).toPixelCenter, 'right')
    state.soldiers = true
    afterSawSoldiers()
  })
  area1.setEvent(async () => {
    await scene.camera.look(jack.x - 70, jack.y, 800)
    await scene.ui.sleep(500)
    await scene.ui.transition('normal')
    scene.setMembersPosition((48).toPixelCenter, (19).toPixelCenter, 'right')
    scene.francisca.setPosition((47).toPixelCenter, (18).toPixelCenter)
    scene.jaquelyn.setPosition((47).toPixelCenter, (20).toPixelCenter)
    scene.camera.look(jack.x - 70, jack.y, 0)
    await scene.ui.sleep(1500)
    jack.setFaceKey('jack2')
    const chara = jack
    await scene.talk([
      { chara, text: '来たか。' },
      { chara: 'ann', text: 'どうしてあなたがここに？' },
      { chara, text: 'お前たちをここへ呼び出したのは俺だ。' },
      { chara: 'ann', text: 'え…？' },
      { chara: 'ann', text: 'あれ、その顔の怪我は…。' },
      { chara, text: '…。' },
      { chara, text: '今一度、名乗らせてくれ。' }
    ])
    await scene.ui.sleep(500)
    await scene.ui.transition('fast')
    jack.initImage('kingbrother').setFaceKey('kingbrother3').setDisplayName('王弟エゼルバルド')
    await scene.ui.sleep(500)
    const t = await scene.talk([
      { chara, text: '俺は王弟エゼルバルドだ。' },
      { chara: 'ann', text: '！' },
      { chara, text: 'すまなかった。' },
      { chara, text: '姿を偽ってきたこと、お前たちに剣を向けたこと。' },
      { chara: 'ann', text: 'どういうこと？' },
      { chara: 'ann', text: 'だって、何度も王を殺そうとして…。' },
      { chara, text: 'ああ、間違いない。' },
      { chara, text: '俺は何度も王を殺そうとしていた。' },
      { chara, text: '今こそ、全てを説明させてくれ。' },
      { chara, text: '十年前、王がドラゴンと戦ったことは知っているか？' },
      null
    ])
    const i = await scene.select(['知ってる', '知らない'])
    t.destroy()
    await scene.talk([
      ...(i === 0 ? [{ chara, text: 'そう、' }] : []),
      { chara, text: '十年前、王はソンベルクと戦い、グリファルデ神殿に封じた。' },
      { chara, text: 'しかし半月ほど前、' },
      { chara, text: 'グリファルデ神殿の見張りがソンベルクの覚醒を知らせたのだ。' },
      { chara, text: '目覚めたソンベルクは王を恨み、復讐を企てていた。' },
      { chara, text: '恨みの先である兄に代わってヤツと交渉すべく、' },
      { chara, text: '俺は何度もグリファルデ神殿へ通っていた。' },
      { chara, text: '様々な条件と引き換えに、王国への復讐を辞めるように説得してきたのだ。' },
      { chara, text: 'しかし、ソンベルクの望みは一貫していた。' },
      { chara, text: 'ついに俺は諦め、俺は王にも知らせず、ソンベルクとある契約を結んだ。' },
      { chara, text: '王の首と引き換えに、王国の襲撃を辞めること。' },
      { chara, text: '綺麗に言えば、俺は兄の死を代償に王国を救おうと考えたのだ。' },
      { chara: 'ann', text: 'そうだったの…。' },
      { chara, text: '初めてここで会った時のことを覚えているか？' },
      { chara, text: 'あの日俺は、兄を殺そうとしていた。' },
      { chara, text: 'だがお前たちが止めに入った。' },
      { chara, text: 'そして俺は、お前たちからこの水晶を奪いあげたな。' },
      { chara: 'ann', text: '時間水晶！' },
      { chara, text: 'やはりこれは特別なものだな？' },
      { chara, text: '直後にこの水晶は、俺を別の世界に運んだ。' },
      { chara, text: '何が起きたか分からなかったが、ほどなくしてそこが、' },
      { chara, text: 'ここと同じ場所の、異なる時代だと気づいた。' },
      { chara, text: 'あれは…、' },
      { chara, text: 'お前たちが来た時代だな？' },
      { chara: 'ann', text: 'そう。' },
      { chara: 'ann', text: 'その水晶は2つの時間をつなぐもの。' },
      { chara: 'ann', text: 'あなたが行ったのは私たちの時代。' },
      { chara: 'ann', text: 'そこで何を見たの？' },
      { chara, text: '廃墟と化したこの王城、' },
      { chara, text: 'その時代、この国は滅びていたのだ。' },
      { chara: 'ann', text: 'え！？' },
      { chara: 'ann', text: 'そんなはずは…、' },
      { chara, text: '俺はこの目で見た。' },
      { chara, text: 'あれは紛れもなく竜の仕業。' },
      { chara, text: 'あの日、俺が兄を殺し損ねたことで、ソンベルクはこの国を焼き尽くした。' },
      { chara: 'ann', text: 'そんな…。' },
      { chara, text: 'お前たちの居た頃のこの国がどれだけ不幸だったかは知らない。' },
      { chara, text: 'だが、ソンベルクの襲撃はなんとしても防がなければいけない。' },
      { chara, text: '俺はそう理解した。' },
      { chara, text: 'だから、この時代に戻ってきてからも、俺は王を殺すための別の機会を狙い続けた。' },
      { chara: 'ann', text: '…。' },
      { chara: 'ann', text: 'でも最後は王の暗殺はやめて、ソンベルクに立ち向かったよね？' },
      { chara, text: '考えが変わったのだ。' },
      { chara, text: 'いや、そもそもドラゴンを倒そうなどという考えは最初からなかった。' },
      { chara, text: '墓地でお前たちが俺に挑み、打ち負かしたとき、' },
      { chara, text: '俺は兄とともにドラゴンに立ち向かうことを決意した。' },
      { chara, text: '結局は破れ、お前たちに助けられたがな。' },
      { chara: 'ann', text: 'ソンベルクを倒したのは王だよ。' },
      { chara, text: 'そうだったな。' },
      { chara, text: 'そういうことにしておこう。' },
      { chara, text: 'とにかく、これが俺のやってきたことの全てだ。' },
      { chara, text: '呼び出してすまなかった。' },
      { chara, text: 'この水晶を返さなければ困るだろうと思ってな。' }
    ])
    await scene.ui.announce('『時間水晶』を手に入れた')
    await scene.talk([
      { chara: 'ann', text: 'ありがとう。' },
      { chara: 'ann', text: 'すごくびっくりしたし、' },
      { chara: 'ann', text: 'まだちょっと頭の整理ができていないけど…、' },
      { chara: 'ann', text: 'とにかくあなたのやってきたことを知ることができてよかったよ。' },
      { chara: 'ann', text: 'あなたのことはずっと謎だったしね。' },
      { chara: 'ann', text: 'あとね、' },
      { chara: 'ann', text: '最後に暗殺を考え直してくれてよかった。' },
      { chara: 'ann', text: '私たちはここでの目的を終えたから帰るつもりだったけど、' },
      { chara: 'ann', text: '正直このまま帰って大丈夫か少し不安だったんだ…。' },
      { chara: 'ann', text: 'でも、' },
      { chara: 'ann', text: 'この時代のことは、安心して任せられるね。' },
      { chara, text: '…。' },
      { chara, text: 'その通り、もう心配事はないはずだ。' },
      { chara, text: 'さあ…、帰りなさい。' },
      { chara: 'ann', text: 'うん。' },
      { chara: 'ann', text: '…。' },
      { chara: 'ann', text: 'さようなら。' }
    ])
    await scene.ui.sleep(500)
    scene.game.archiveManager.activate('saved_kingdom')
    await scene.ui.missionUpdate('m5_1', true)
    await scene.ui.sleep(1000)
    await scene.ui.transition('normal')
    scene.members.forEach(v => v.setVisible(false))
    jack.initImage('jack').setFaceKey('jack2')
    soldier1.setPosition((33).toPixelCenter, (19).toPixelCenter).setVisible(true)
    await soldier2.setPosition((32).toPixelCenter, (20).toPixelCenter).setVisible(true)
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara, text: '君たちの時代が明るいことは、' },
      { chara, text: '我らが王、' },
      { chara, text: '平和王エドガーが保証する。' }
    ], { angle: false })
    await scene.ui.sleep(1500)
    soldier1.setSpeed(180).setTargetPosition(soldier1.x + 200, soldier1.y)
    await soldier2.setSpeed(180).setTargetPosition(soldier2.x + 200, soldier2.y)
    await scene.talk([
      { chara: soldier1, text: 'おい、居たぞ！' },
      { chara: soldier1, text: '黒いローブの暗殺者だ！' },
      { chara: soldier2, text: '逃がすな、射て！' }
    ], { angle: false })
    await scene.ui.sleep(800)
    const red = scene.add.rectangle(0, 0, scene.map.width, scene.map.height, 0xEE2200).setAlpha(0).setDepth(140000).setOrigin(0, 0)
    scene.add.tween({
      targets: red, duration: 400, ease: 'Power2', alpha: 0.6, yoyo: true,
      onComplete () { jack.initImage('jack2') }
    })
    await scene.ui.sleep(2500)
    await scene.talk([
      { chara, text: '王よ、' },
      { chara, text: '後世でうたわれる王国を…' }
    ], { angle: false })
    await scene.ui.sleep(2000)
    await scene.ui.credit()
    scene.scene.start('Title')
  }).setActive(false)
  if (state.soldiers) afterSawSoldiers()
}
