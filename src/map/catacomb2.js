export default {
  name: `${t('area.catacomb')} - ${t('areaSub.catacomb.b')}`,
  bgm: 'catacomb',
  enemyLevel: 20,
  enemyGroups: [
    ['phantom'],
    ['phantom', 'phantom'],
    ['skull'],
    ['skull', 'skull']
  ],
  create (scene) {
  }
}
