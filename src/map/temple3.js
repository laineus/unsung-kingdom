export default {
  name: `${t('area.temple')} - ${t('areaSub.temple.c')}`,
  bgm: 'temple',
  battleBgm: 'temple',
  enemyLevel: 34,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird'],
    ['lizard'],
    ['lizard', 'lizard'],
    ['bird', 'lizard', 'bird']
  ],
  create () {
  }
}
