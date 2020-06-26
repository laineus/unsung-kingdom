import { roomBook, roomEv } from './room'
import { townGreeting, townGreeting4, townBoard, townCommon, townChapter0, townChapter1, townChapter2, townChapter3, townChapter4, townChapter5 } from './town'
import { jack } from './chapter0'
import { dog, mercenary, drystan, bear } from './chapter1'
import { cassandra, princess, moonshine, aragnie } from './chapter2'
import { ferdinand, marianne, dario, renfield, evangelina } from './chapter3'
import { lorraine, allsRight, nikke, lute, dragonKiller, templeCharacters } from './chapter4'
export default {
  chapter: [
    { name: '序章', title: '王殺しのジャック', sub: 'Jack the Kingkiller' },
    { name: '1章', title: 'ワルコフォレンスの森', sub: 'Warcoforence' },
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
  areaSub: {
    bellion: 'ベリオン王国',
    room: '拠点',
    forest: {
      a: '東部',
      b: '狩人の高台',
      c: '高台北',
      d: '広場',
      e: '南部',
      f: 'キャンプ',
      g: '高台北西',
      h: '北西部',
      i: '賢人の家'
    },
    underpass: {
      a: '牢獄',
      b: '公爵家側通路',
      c: '水路',
      d: '小部屋',
      e: '貯蔵庫',
      f: '番犬の間',
      g: '王家側通路',
      h: '廊下',
      i: '王城への扉'
    },
    aragnie: 'アラグニエのねぐら',
    catacomb: {
      a: '入口',
      b: '東の間',
      c: '共同墓地',
      d: '共同墓地南',
      e: '西区画',
      f: '上流階級の墓',
      g: '王家の墓'
    },
    temple: {
      a: '入口',
      b: '広場',
      c: '中央部',
      d: '2階',
      e: '東部',
      f: '地下',
      g: '最深部'
    }
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
  weapon: {
    1: 'ショートソード',
    2: 'ショートボウ',
    3: 'カトラス',
    4: 'スピア',
    5: 'グラディウス',
    6: 'ハンターボウ',
    7: 'ハルバード',
    8: 'ロングソード',
    9: 'バスタードソード',
    10: 'バトルアクス',
    11: 'ツヴァイハンダー',
    12: 'パイク',
    13: 'クレイモア',
    14: 'ロングボウ',
    15: 'ファルシオン',
    16: 'バイキングアクス',
    17: 'フランベルジュ',
    18: 'カタナ',
    19: 'カリブルヌス'
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
      menu: 'メニュー',
      close: '閉じる',
      quests: 'マップ＆クエスト',
      characters: 'キャラクター',
      save: 'セーブ',
      load: 'ロード',
      settings: '設定'
    },
    recommendedLevel: '推奨レベル',
    undefinedArea: '不明なエリア'
  },
  missionStart: '『#{title}』を開始',
  missionComplete: '『#{title}』を完了',
  unlockArea: 'マップ「#{area}」が解放された',
  gotItem: '『#{name}』を手に入れた',
  hpRecovered: 'HPが全回復した',
  weaponDrop: '#{name} を獲得！',
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
  templeCharacters,
  storyTelling: [
    '王は死んだ。\n冷たく閉ざされた門扉の先に、かつての繁栄はもはや見る影もない。\n王国は偉大なる王の死とともに終わりを迎えたのだ。',
    '― 『ベリオン王国史』',
    '千年ののち、王国はその名も失い世界から忘れ去られた。\nしかしベリオンの民の末裔は〈平和王エドガー〉の眠るその地を決して離れようとはしなかった。',
    'そしてある時、王と王国の死を嘆く魔術師たちの手によって、時間を移動する術が発見された。',
    'それはこの世の理に背くことであったが、彼らは歴史を変えることを厭わなかった。'
  ],
  missionDescription: {
    m0_1: {
      base: 'エドガー王の暗殺を阻止するため、暗殺現場とされる王城の裏庭へ向かう。',
      first: '王城の裏庭への行き方を街の人に訪ねよう。',
      second: '街の外へ出て王城の裏庭へ向かおう。'
    },
    m1_1: {
      base: '狩猟家マシューが連れていた5匹の仔犬が逃げ出してしまった。',
      cnt: '見つけた狩猟犬の数（#{current}/5）'
    },
    m1_2: {
      base: 'アイザムバード傭兵団の負傷兵が行方不明になっている。',
      started: '付近を捜索しよう。',
      solved: '負傷兵を助けた。傭兵団のキャンプへ寄ろう'
    },
    m1_3: {
      base: '薬の材料となるマンドレイクの根を集めてドリスタンに届ける。',
      cnt: '収集したマンドレイク（#{current}/#{max}）'
    },
    m1_4: {
      base: '凶暴なレックスベアを倒し、薬の材料となるレックスベアの血液をドリスタンに\n届ける。',
      bear: '森の深くに棲むレックスベアを探し出して倒そう。',
      solved: 'レックスベアの血液を手に入れた。ドリスタンの元へ届けよう。'
    },
    m2_1: {
      base: 'アラグニエの糸の牢獄に幽閉されたカサンドラはワインを求めている。',
      wip: '地下通路のどこかにあるワインを見つけよう。',
      cnt: '見つけたワイン（#{current}/3）'
    },
    m2_2: {
      base: 'メアリー王女と公爵令嬢ロレッタは、カサンドラへの贈り物に使うための素材と\nなる魔石を集めている。',
      cnt: '収集したカーバンクルの魔石（#{current}/#{max}）'
    },
    m2_3: {
      base: '密造酒の密売人ディオニューソスは、番犬オルトロスが眠るのを待っている。',
      wip: 'ディオニューソスがオルトロスを泥酔させた。オルトロスを倒そう。',
      solved: 'オルトロスを倒した。ディオニューソスの元へ戻ろう。'
    },
    m2_4: {
      base: 'ヘクター元騎士は、カサンドラを投獄した王への復讐を考えている。\nメアリーとロレッタと協力し、カサンドラを解放しよう。',
      search: '魔石のランタンを使ってアラグニエのねぐらを探そう。',
      solved: 'アラグニエを倒した。カサンドラの元へ戻ろう。'
    },
    m3_1: {
      base: '異国の貴族フェルディンドは正気を失っている。',
      started: '霊に呪われていると言う彼に、何か役立ちそうなものを持っていこう。',
      solved: '霊に呪われていると言う彼に、マリアンヌがくれたお守りを持っていこう。',
      completed: '彼は彼を恨む亡霊たちによって崖の底へ引きずり込まれていった。'
    },
    m3_2: {
      base: 'シスターはマリアンヌの墓に寄り添っている。',
      started: '衰弱するシスターに飲み水を持っていこう。',
      cnt: '収集した水の小瓶（#{current}/#{max}）'
    },
    m3_3: {
      base: 'ネクロマンサーのダリオは、ジャックに脅され王妃の悪霊を生み出してしまった。',
      started: '近くにジャックがまだ潜んで居るらしい。探し出そう。',
      solved: 'ジャックを倒した。ジャックが落とした短剣をダリオに届けよう。'
    },
    m3_4: {
      base: 'レイはレンフィールド家への復讐のために墓を荒らしている。',
      started: 'レンフィールド家の亡霊が姿を現した！',
      cnt: '倒したレンフィールド家の亡霊（#{current}/5）'
    },
    m3_5: {
      base: 'ダリオが生み出した偽物のエヴァンジェリナ妃の亡霊は王を恨んでいる。',
      started: '王妃の亡霊を探し出して倒そう。'
    },
    m4_1: {
      base: '彫刻家のクラウスから神殿の仕掛けのことを教えてもらった。',
      started: '像の仕掛けを解いて2階への扉を開放しよう。'
    },
    m4_2: {
      base: '神殿に暮らす竜族のズィから聖剣のことを聞いた。\n彼は聖剣を守る竜族のニッケに伝言を用意してくれるようだ。',
      started: '必要な材料を集めよう。',
      cnt: '集めたケルーネの羽根（#{current}/#{max}）'
    },
    m4_3: {
      base: '聖剣カリブルヌスは竜族のニッケが守っている。',
      started: 'ズィにもらった言葉の煙を使ってニッケを呼び出そう。',
      talked: '力を証明するためにニッケの挑戦を受けよう。'
    },
    m4_4: {
      base: 'リュート弾きのライラは地下への扉を開けられるらしい。',
      started: 'ライラのためにリンゴを集めよう。',
      cnt: '集めたリンゴ（#{current}/#{max}）'
    },
    m4_5: {
      base: '王は独りドラゴンと戦っている。',
      started: '最奥部へ行ってソンベルクを倒そう。'
    },
    m5_1: {
      base: '王弟エゼルバルドからの手紙には「王城の裏庭で待つ」とだけあった。',
      started: '王城の裏庭へ向かおう。'
    }
  },
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
    underpass8: {
      candle: '燭台の火が消えてる…。'
    },
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
    },
    catacomb6: {
      door: 'さっきもらった鍵がぴったりだ！'
    }
  }
}
