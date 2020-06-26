export default {
  name: `${t('area.forest')} - ${t('areaSub.forest.h')}`,
  bgm: 'forest',
  enemyLevel: 6,
  enemyGroups: [
    ['wolf'],
    ['wolf', 'wolf'],
    ['slime', 'slime', 'slime'],
    ['mandrake'],
    ['mandrake', 'mandrake'],
    ['mandrake', 'mandrake', 'mandrake']
  ],
  create (scene) {
  }
}
