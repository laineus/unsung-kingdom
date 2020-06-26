export default {
  name: `${t('area.temple')} - ${t('areaSub.temple.d')}`,
  bgm: 'temple',
  battleBgm: 'temple',
  enemyLevel: 36,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird'],
    ['lizard'],
    ['lizard', 'lizard'],
    ['bird', 'lizard', 'bird']
  ],
  create (scene) {
  }
}
