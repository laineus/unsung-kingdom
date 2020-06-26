export default {
  name: `${t('area.catacomb')} - ${t('areaSub.catacomb.f')}`,
  bgm: 'catacomb',
  enemyLevel: 27,
  enemyGroups: [
    ['skull', 'spectre', 'skull'],
    ['spectre', 'spectre'],
    ['wraith', 'spectre'],
    ['wraith', 'wraith'],
    ['dullahan']
  ],
  create (scene) {
  }
}
