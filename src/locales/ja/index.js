import { roomBook, roomEv } from './room'
export default {
  chapter: [
    { name: '序章', title: '王殺しのジャック', sub: 'Jack the Kingkiller' },
    { name: '1章', title: 'ワルコフォレンスの森', sub: 'Warcoforsubce' },
    { name: '2章', title: 'トロイア公爵邸の地下通路', sub: 'Troy\'s secret passage' },
    { name: '3章', title: '聖アンテルスの墓地', sub: 'St Anterus\' catacomb' },
    { name: '4章', title: 'グリファルデ神殿', sub: 'Temple Grefalde' },
    { name: '終章', title: '平和王エドガー', sub: 'Edgar the Peaceful' }
  ],
  ui: {
    sub: {
      quests: 'マップ＆クエスト',
      characters: 'キャラクター',
      save: 'セーブ',
      load: 'ロード',
      settings: '設定'
    }
  },
  roomBook,
  roomEv,
  townGreeting: {
    amber: 'いい天気ね',
    elliott: 'よう',
    max: '元気か？',
    annabelle: 'こんにちは'
  },
  townGreeting4: {
    amber: '大変なことになったわ…',
    matilda: '怖いな…'
  },
  townBoard: [
    '市街についての案内が貼り出されている。',
    '森の凶暴なモンスター「レックスベア」の討伐報酬について貼り出されている。',
    '禁酒令の罰則に関して貼り出されている。',
    'レンフィールド家の邸宅が火事になった件について貼り出されている。',
    'ドランゴンの覚醒と討伐隊が結成されたことについて貼り出されている。',
    'エドガー王がドラゴンを倒したことについて貼り出されている。'
  ]
}
