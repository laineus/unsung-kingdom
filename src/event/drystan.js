export const drystan = (scene, drystan) => {
  drystan.setDisplayName('賢人ドリスタン').setTapEvent().on('tap', async chara => {
    scene.talk([
      { chara: 'ann', text: 'あなたがドリスタンさんですか？' },
      { chara, text: 'そうだが、何か用かね。' },
      { chara: 'ann', text: '王の病気を治すための薬を作れると聞きました。' },
      { chara, text: 'またか。' },
      { chara: 'ann', text: 'また？' },
      { chara, text: 'まずは王室からの遣いが来て、その後は薬を王室に売りつけようという考えのゴロツキが何人も来た。' },
      { chara, text: '今のところ、頼んだ材料は誰も持ち帰って来ないがな。' },
      { chara: 'ann', text: 'その材料を教えてもらえますか？' },
      { chara, text: '構わんよ。私は誰が材料を持ってくるかに興味はない。' },
      { chara, text: 'まずはマンドレイクの根が5つだ。' },
      { chara: 'ann', text: 'はい、他には？' },
      { chara, text: 'まずはそれを持ってきなさい。もう一つの材料はその後だ。' },
      { chara: 'ann', text: 'さあ、あまり時間はないぞ。' },
    ])
  })
}
