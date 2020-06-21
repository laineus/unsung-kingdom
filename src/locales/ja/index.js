import { roomBook, roomEv } from './room'
import { townGreeting, townGreeting4, townBoard, townCommon, townChapter0, townChapter1, townChapter2, townChapter3, townChapter4, townChapter5 } from './town'
import { jack } from './chapter0'
import { dog, mercenary, drystan, bear } from './chapter1'
import { cassandra, princess, moonshine, aragnie } from './chapter2'
import { ferdinand, marianne, dario, renfield, evangelina } from './chapter3'
import { lorraine, allsRight, nikke, lute, dragonKiller } from './chapter4'
export default {
  chapter: [
    { name: '序章', title: '王殺しのジャック', sub: 'Jack the Kingkiller' },
    { name: '1章', title: 'ワルコフォレンスの森', sub: 'Warcoforsubce' },
    { name: '2章', title: 'トロイア公爵邸の地下通路', sub: 'Troy\'s secret passage' },
    { name: '3章', title: '聖アンテルスの墓地', sub: 'St Anterus\' catacomb' },
    { name: '4章', title: 'グリファルデ神殿', sub: 'Temple Grefalde' },
    { name: '終章', title: '平和王エドガー', sub: 'Edgar the Peaceful' }
  ],
  area: {
    town: '王都',
    castle: '王城 - 裏庭',
    forest: 'ワルコフォレンスの森',
    underpass: 'トロイア公爵邸の地下通路',
    catacomb: '聖アンテルスの墓地',
    temple: 'グリファルデ神殿'
  },
  chara: {
    ann: 'アン',
    jaquelyn: 'ジャクリーン',
    francisca: 'フランシスカ',
    king: 'エドガー王',
    jack: 'ジャック',
    ethel: '王弟エゼルバルド',
    guard: '衛兵',
    soldier: '兵士',
    injuredSoldier: '負傷した兵士',
    amber: '噂好きなアンバー婦人',
    elliott: '卑劣なエリオット',
    max: '賞金稼ぎのマックス',
    annabelle: '宿屋のアナベル',
    matilda: '内気なマチルダ',
    hunter: '狩猟家マシュー',
    zi: 'ズィ',
    mary: 'メアリー',
    loretta: 'ロレッタ',
    hector: 'ヘクター',
    cassandra: 'カサンドラ',
    nikke: 'ニッケ',
    dario: 'ダリオ',
    drystan: '賢人ドリスタン',
    queen: 'エヴァンジェリナ妃',
    sonberk: 'ソンベルク',
    fdn: 'フェルディナンド卿',
    klaus: '彫刻家クラウス',
    injuredLeader: '負傷した傭兵団長',
    injuredMercenary: '負傷した傭兵団員',
    dionysus: 'ディオニューソス',
    ray: 'レイ',
    sister: 'シスター',
    lyla: 'ライラ',
    unknown: '？？？'
  },
  ui: {
    sub: {
      quests: 'マップ＆クエスト',
      characters: 'キャラクター',
      save: 'セーブ',
      load: 'ロード',
      settings: '設定'
    }
  },
  unlockArea: 'マップ「#{area}」が解放された',
  roomBook,
  roomEv,
  townGreeting,
  townGreeting4,
  townBoard,
  townCommon,
  townChapter0,
  townChapter1,
  townChapter2,
  townChapter3,
  townChapter4,
  townChapter5,
  jack, 
  dog, mercenary, drystan, bear,
  cassandra, princess, moonshine, aragnie,
  ferdinand, marianne, dario, renfield, evangelina,
  lorraine, allsRight, nikke, lute, dragonKiller,
  afterBattle: {
    m1_3: 'マンドレイクの根が集まったみたいね',
    m2_2: 'カーバンクルの魔石が集まったね',
    m3_2: '飲み水が十分に集まったね',
    m4_2: 'ケルーネの羽根が集まったね'
  }
}
