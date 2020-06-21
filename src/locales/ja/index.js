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
  item: {
    dragonScale: 'ドラゴンの鱗'
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
  gotItem: '『#{name}』を手に入れた',
  hpRecovered: 'HPが全回復した',
  itemDrop: {
    mandrake: 'マンドレイクの根を#{num}個獲得！',
    magicStone:'カーバンクルの魔石を#{num}個獲得！',
    water: '水の小瓶を#{num}個獲得！',
    dagger: 'ダリオの短剣を獲得！',
    kelunne: 'ケルーネの羽を#{num}個獲得！'
  },
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
    m1_3: 'マンドレイクの根が集まったみたいね', // jaquelyn
    m2_2: 'カーバンクルの魔石が集まったね', // fraancisca
    m3_2: '飲み水が十分に集まったね', // francisca
    m4_2: 'ケルーネの羽根が集まったね' // jaquelyn
  },
  tweet: {
    ca1: 'どこかに身を隠して待とう', // francisca
    ct1: '墓地…ちょっと怖いね…', // ann
    fr1: 'ここがワルコフォレンスの森か', // ann
    tm1: '神殿の入り口に着いたわ', // jaquelyn
    aplg: 'おいしそうなリンゴ', // ann
    aplb: '傷んだリンゴだね', // ann
    clbr: 'あれが聖剣？', // francisca
    un1: 'うまく侵入できたね' // francisca
  }
}
