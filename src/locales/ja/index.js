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
  mission: {
    m0_1: { title: '王殺しのジャック', sub: 'Jack the Kingkiller' },
    m1_1: { title: 'マシューと狩猟犬', sub: 'Matthew and Hunting dogs' },
    m1_2: { title: 'アイザムバード傭兵団の討伐遠征', sub: 'Isambard mercenaries' },
    m1_3: { title: '森の賢人ドリスタン', sub: 'Philosopher Drystan' },
    m1_4: { title: 'ワルコフォレンスの人食い熊', sub: 'The Rex Bear' },
    m2_1: { title: '幽閉されしカサンドラ', sub: 'Incarcerated Cassandra' },
    m2_2: { title: 'メアリー王女と公爵令嬢ロレッタ', sub: 'Princess Mary and Loretta' },
    m2_3: { title: 'ディオニューソスの密造酒', sub: 'Dionysus\' Moonshine' },
    m2_4: { title: 'アラグニエのねぐら', sub: 'Aragnie\'s lair' },
    m3_1: { title: '呪われしフェルディナンド卿', sub: 'Cursed Lord Ferdinand' },
    m3_2: { title: 'マリアンヌの歌を聞いてから死ね', sub: 'Die after listening Marianne\'s song.' },
    m3_3: { title: 'ダリオの哀しみ', sub: 'Dario\'s Sorrow' },
    m3_4: { title: 'レンフィールド家の大罪', sub: 'Sins of the Renfield family' },
    m3_5: { title: 'エヴァンジェリナ妃の亡霊', sub: 'Ghost of Princess Evangelina' },
    m4_1: { title: '清浄なるロレイン像', sub: 'Sacred Lorraine\'s statue' },
    m4_2: { title: 'すべて世はこともなし', sub: 'All\'s right with the world' },
    m4_3: { title: '聖剣カリブルヌス', sub: 'Caliburnus' },
    m4_4: { title: '女神さまに捧ぐリュート', sub: 'Lute for goddess' },
    m4_5: { title: '竜殺しの王', sub: 'The Dragonkiller King' },
    m5_1: { title: '平和王エドガー', sub: 'Edgar the Peaceful' }
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
  battler: {
    jack: '王殺しのジャック',
    bee: 'ビーストビー',
    bee2: 'ビーストビー',
    slime: 'ベニクス',
    mandrake: 'マンドレイク',
    wolf: 'ヴォルフェス',
    flower: 'サニズマスク',
    bear: 'レックスベア',
    goblin: 'ゴブリン',
    goblin2: 'ゴブリン',
    carbuncle: 'カーバンクル',
    orthrus: 'オルトロス',
    gargoyle: 'ガーゴイル',
    succubus: 'サキュバス',
    aragnie: 'アラグニエ',
    phantom: 'ファントム',
    skull: 'スカルヘッド',
    ghost: 'ゴースト',
    spectre: 'スペクター',
    wraith: 'レイス',
    dullahan: 'デュラハン',
    queen: 'エヴァンジェリナ妃の亡霊',
    bird: 'ケルーネ',
    lizard: 'バリザード',
    tree: 'トルコリス',
    knight: 'レムリアンナイト',
    thief: 'シーフェン',
    nikke: 'ニッケ',
    dragon: 'ソンベルク'
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
    un1: 'うまく侵入できたね', // francisca
    lost: {
      francisca: ['ま、待って！', 'アンが消えた…'],
      jaquelyn: ['アン、置いていっちゃいやよ', 'アン、どこ？']
    }
  },
  mapEvent: {
    temple6: {
      statue: '台座に仕掛けがある！', // ann
      option: ['仕掛けを動かす', '何もしない']
    },
    room1: {
      bed: [
        '早く出発しよう', // francisca
        'アン、眠たいの？' // jaquelyn
      ]
    },
    catacomb1: {
      guard: [
        'ここから先へは十分に注意して進んでくれ。',
        '近年、出没するモンスターが増えてきて、我々も手に負えなくなってきているんだ。'
      ]
    }
  }
}
