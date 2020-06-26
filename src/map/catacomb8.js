export default {
  name: `${t('area.catacomb')} - ${t('areaSub.catacomb.f')}`,
  bgm: 'catacomb',
  enemyLevel: 26,
  enemyGroups: [
    ['ghost', 'ghost', 'ghost'],
    ['skull', 'spectre', 'skull'],
    ['spectre', 'spectre'],
    ['wraith'],
    ['dullahan']
  ],
  create (scene) {
  }
}
