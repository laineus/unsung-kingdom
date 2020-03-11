export default (scene, charas) => {
  const eState = scene.storage.state.event.m4
  const allowArea = async () => {
    if (!['talked_amber', 'talked_elliott', 'talked_max', 'talked_matilda', 'talked_annabelle'].every(key => eState[key])) return
    if (scene.storage.state.allowed_area >= 5) return
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'ann', text: 'よし、' },
      { chara: 'ann', text: '行き先は一つだね！' },
      { chara: 'ann', text: '行こう！' }
    ])
    scene.storage.state.allowed_area = 5
    scene.ui.announce('マップ「グリファルデ神殿」が解放された')
  }
  const charaKeys = ['annabelle', 'elliott', 'max', 'amber', 'matilda']
  Array.range(13, 17).map(id => scene.map.getObjectById(id)).forEach((pos, i) => {
    charas[charaKeys[i]].setPosition(pos.x, pos.y).setR('left').setRandomWalk(false)
  })
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: '大変よ、' },
      { chara, text: 'グリファルデ神殿に封じられていたドラゴンが目覚めたの。' },
      { chara, text: 'それで王と王弟が率いる討伐隊がグリファルデ神殿に向かったわ。' },
      { chara, text: 'こんなことになるなんて…、' },
      { chara, text: '大丈夫かしら…。' },
      { chara, text: 'きっとあのドラゴンは、この国に十年前の復讐をするつもりなんだわ。' }
    ])
    eState.talked_amber = true
    await allowArea()
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: 'ドラゴンが目覚めたって噂、本当だったんだ。' },
      { chara, text: 'ここ最近、王弟がよく神殿に通ってたみたいだけど、' },
      { chara, text: 'きっとドラゴンの様子を見張っていたのね。' },
      { chara, text: 'はぁ、' },
      { chara, text: 'うまくいって平和になるといいんだけど。' }
    ])
    eState.talked_annabelle = true
    await allowArea()
  })
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: 'ドラゴンって見たことないけれど、とても大きいんだよね。' },
      { chara, text: '人間が剣で戦って倒すだなんて、想像つかないな…。' },
      { chara, text: 'どうなっちゃうんだろう…。' },
      { chara, text: '十年前に起きたことはよく知らないけど、ドラゴンはきっと私たちを恨んでいるんだよね…。' },
      { chara, text: 'こわいな…。' }
    ])
    eState.talked_matilda = true
    await allowArea()
  })
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: '王自らドラゴン討伐に向かうなんて、' },
      { chara, text: 'もう若くないのによくやるよ。' },
      { chara, text: '十年前みたいにうまくやれるとは限らねえぞ。' },
      { chara, text: 'あの時だって、倒すどころか神殿に封じ込めるだけで奇跡的だったんだ。' },
      { chara, text: 'もし失敗したらこの国は…、' },
      { chara, text: '考えたくもねえ。' }
    ])
    eState.talked_elliott = true
    await allowArea()
  })
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: '王と王弟が率いる討伐隊がドラゴン退治に向かったらしい。' },
      { chara, text: '半月ほど前に流れていたドラゴンが目覚めたって噂、本当だったんだな。' },
      { chara, text: '黙って帰りを待ってるしかないなんて、情けない話だな。' },
      { chara, text: 'でも俺は、エドガー王ならまたやれってくれるって信じてるぜ。' },
      { chara, text: 'もし…、' },
      { chara, text: 'もし止められなかったら、きっとあのドラゴンはこの国を襲いに来るはずだ。' },
      { chara, text: 'そのときは俺も久々に剣を抜くぜ。' }
    ])
    eState.talked_max = true
    await allowArea()
  })
}
