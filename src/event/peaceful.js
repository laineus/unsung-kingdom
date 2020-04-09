export const peaceful = (scene, area1, area2, soldier1, soldier2, jack) => {
  jack.setVisible(false).setPosition((53).toPixelCenter, (19).toPixelCenter).setR('left')
  area2.setEvent(async () => {
    soldier1.setDisplayName('衛兵').setR('right')
    soldier2.setDisplayName('衛兵').setR('left')
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
    jack.setVisible(true)
    soldier1.setVisible(false)
    soldier2.setVisible(false)
    area1.setActive(true)
  })
  area1.setEvent(async () => {
    await scene.camera.look(jack.x - 70, jack.y, 800)
    await scene.ui.sleep(500)
    await scene.ui.transition('normal')
    scene.setMembersPosition((48).toPixelCenter, (19).toPixelCenter, 'right')
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
    jack.initImage('soldier').setFaceKey('kingbrother2')
    await scene.talk([
      { chara, text: '俺は王弟エゼルバルドだ。' },
      { chara: 'ann', text: '！' },
      { chara, text: 'すまなかった。' },
      { chara, text: '姿を偽ってきたこと、お前たちに剣を向けたこと。' },
      { chara: 'ann', text: 'どういうこと？' },
      { chara: 'ann', text: 'だって、何度も王を殺そうとして…。' },
      { chara, text: 'ああ、間違いない。' },
      { chara, text: '私は何度も王を殺そうとしていた。' },
      { chara, text: '今こそ、全てを説明させてくれ。' },
      { chara, text: '十年前、王がドラゴンと戦ったことは知っているか？' },
      { chara, text: '選択肢' },
      { chara, text: 'そう、' },
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
      { chara, text: 'そういうことにしておこう。' },
      { chara, text: 'とにかく、これが俺のやってきたことの全てだ。' },
      { chara, text: '呼び出してすまなかった。' },
      { chara, text: 'この水晶を返さなければ困るだろうと思ってな。' }
    ])
    await scene.ui.announce('『時間水晶』を手に入れた')
    await scene.talk([
      { chara: 'ann', text: 'ありがとう。' },
      { chara: 'ann', text: '最後に暗殺を考え直してくれてよかった。' },
      { chara: 'ann', text: 'この時代のことは、安心して任せられるね。' },
      { chara, text: '…。' },
      { chara, text: 'その通り、もう心配事はないはずだ。' },
      { chara, text: 'さあ…、帰りなさい。' },
      { chara: 'ann', text: 'うん。' },
      { chara: 'ann', text: '…。' },
      { chara: 'ann', text: 'さようなら。' }
    ])
    await scene.ui.sleep(1500)
    await scene.ui.transition('normal')
    scene.members.forEach(v => v.setVisible(false))
    await scene.ui.sleep(1500)
    jack.initImage('jack').setFaceKey('jack2')
    await scene.talk([
      { chara, text: '君たちの時代が明るいことは、' },
      { chara, text: '我らが王、' },
      { chara, text: '平和王エドガーが保証する。' }
    ], { angle: false })
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: soldier1, text: 'おい、居たぞ！' },
      { chara: soldier1, text: '黒いローブの暗殺者だ！' },
      { chara: soldier2, text: '逃がすな、射て！' },
      { chara, text: '王よ、後世でうたわれる王国を…' }
    ], { angle: false })
    scene.camera.revert(0)
  }).setActive(false)
}
