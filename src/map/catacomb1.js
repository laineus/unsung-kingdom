export default {
  enemyLevel: 14,
  enemyGroups: [
    ['phantom'],
    ['phantom', 'phantom'],
    ['skull'],
    ['skull', 'skull']
  ],
  create (scene) {
    const soldier = scene.map.getObjectById(11)
    soldier.setDisplayName('衛兵').setTapEvent(async chara => {
      await scene.talk([
        { chara, text: 'ここから先へは十分に注意して進んでくれ。' },
        { chara, text: '近年、出没するモンスターが増えてきて、我々も手に負えなくなってきているんだ。' }
      ])
    })
  }
}
