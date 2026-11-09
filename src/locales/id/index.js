import { roomBook, roomEv } from './room'
import {
  townGreeting,
  townGreeting4,
  townBoard,
  townCommon,
  townChapter0,
  townChapter1,
  townChapter2,
  townChapter3,
  townChapter4,
  townChapter5
} from './town'
import { jack } from './chapter0'
import { dog, mercenary, drystan, bear } from './chapter1'
import { cassandra, princess, moonshine, aragnie } from './chapter2'
import { ferdinand, marianne, dario, renfield, evangelina } from './chapter3'
import {
  lorraine,
  allsRight,
  calibur,
  lute,
  dragonKiller,
  templeCharacters
} from './chapter4'
import { peaceful } from './chapter5'
/* eslint-disable quotes */
export default {
  langLabel: "Bahasa Indonesia",
  chapter: [
    { name: "Prolog:", title: "Jack si Pembunuh Raja", sub: "" },
    { name: "Bab 1:", title: "Hutan Warkano", sub: "" },
    { name: "Bab 2:", title: "Lorong Rahasia Troia", sub: "" },
    { name: "Bab 3:", title: "Katakomba St. Anterus", sub: "" },
    { name: "Bab 4:", title: "Kuil Grefalde", sub: "" },
    { name: "Epilog:", title: "Edgar si Pembawa Damai", sub: "" }
  ],
  area: {
    town: "Ibu Kota Kerajaan",
    castle: "Taman Kerajaan",
    forest: "Hutan Warkano",
    underpass: "Lorong Rahasia Troia",
    catacomb: "Katakomba St. Anterus",
    temple: "Kuil Grefalde"
  },
  areaSub: {
    bellion: "Kerajaan Bellion",
    room: "Markas",
    forest: {
      a: "Bagian Timur",
      b: "Bukit Pemburu",
      c: "Dataran Tinggi",
      d: "Tanah Lapang",
      e: "Bagian Selatan",
      f: "Area Perkemahan",
      g: "Bukit Barat Laut",
      h: "Bagian Barat Laut",
      i: "Kediaman Pertapa"
    },
    underpass: {
      a: "Penjara",
      b: "Lorong Sisi Adipati",
      c: "Saluran Air",
      d: "Ruangan Kecil",
      e: "Gudang",
      f: "Ruang Anjing Penjaga",
      g: "Lorong Kerajaan",
      h: "Koridor",
      i: "Pintu Masuk Istana"
    },
    aragnie: "Sarang Aragnier",
    catacomb: {
      a: "Pintu Masuk",
      b: "Ruang Timur",
      c: "Makam Umum",
      d: "Makam Umum Selatan",
      e: "Blok Barat",
      f: "Makam Bangsawan",
      g: "Makam Keluarga Kerajaan"
    },
    temple: {
      a: "Pintu Masuk",
      b: "Plaza",
      c: "Ruang Tengah",
      d: "Lantai 2",
      e: "Ruang Timur",
      f: "Bawah Tanah",
      g: "Bagian Terdalam"
    }
  },
  mission: {
    m0_1: { title: "Jack si Pembunuh Raja", sub: "Jack si Pembunuh Raja" },
    m1_1: {
      title: "Matthew dan Anjing-Anjing Pemburu",
      sub: "Matthew dan Anjing-Anjing Pemburu"
    },
    m1_2: {
      title: "Tentara Bayaran Isambard",
      sub: "Tentara Bayaran Isambard"
    },
    m1_3: { title: "Drystan si Pertapa", sub: "Drystan si Pertapa" },
    m1_4: { title: "Beruang Rex", sub: "Beruang Rex" },
    m2_1: { title: "Cassandra yang Dipenjara", sub: "Cassandra yang Dipenjara" },
    m2_2: {
      title: "Putri Mary dan Nona Loretta",
      sub: "Putri Mary dan Nona Loretta"
    },
    m2_3: { title: "Sopi Selundupan Dionysus", sub: "Sopi Selundupan Dionysus" },
    m2_4: { title: "Sarang Aragnier", sub: "Sarang Aragnier" },
    m3_1: { title: "Kutukan Lord Ferdinand", sub: "Kutukan Lord Ferdinand" },
    m3_2: {
      title: "Mendengar Lagu Marianne Sekali Lagi",
      sub: "Mendengar Lagu Marianne Sekali Lagi"
    },
    m3_3: { title: "Duka Dario", sub: "Duka Dario" },
    m3_4: {
      title: "Dosa-Dosa Keluarga Renfield",
      sub: "Dosa-Dosa Keluarga Renfield"
    },
    m3_5: {
      title: "Arwah Ratu Evangelina",
      sub: "Arwah Ratu Evangelina"
    },
    m4_1: {
      title: "Arca Suci Grefalde",
      sub: "Arca Suci Grefalde"
    },
    m4_2: {
      title: "Sabda Para Naga",
      sub: "Sabda Para Naga"
    },
    m4_3: { title: "Calibrenus", sub: "Calibrenus" },
    m4_4: { title: "Musik untuk Dewi", sub: "Musik untuk Dewi" },
    m4_5: { title: "Raja Pembunuh Naga", sub: "Raja Pembunuh Naga" },
    m5_1: { title: "Edgar si Pembawa Damai", sub: "Edgar si Pembawa Damai" }
  },
  chara: {
    ann: "Ann",
    jaquelyn: "Jaquelyn",
    francisca: "Francisca",
    king: "Raja",
    jack: "Jack",
    ethel: "Ethelbald",
    guard: "Penjaga",
    soldier: "Prajurit",
    injuredSoldier: "Prajurit Terluka",
    amber: "Amber",
    elliott: "Elliot",
    max: "Max",
    annabelle: "Annabelle",
    matilda: "Matilda",
    hunter: "Pemburu",
    zi: "Zi",
    mary: "Mary",
    loretta: "Loretta",
    hector: "Hector",
    cassandra: "Cassandra",
    nikke: "Nikke",
    dario: "Dario",
    drystan: "Drystan",
    queen: "Ratu Evangelina",
    sonberk: "Sonberk",
    fdn: "Lord Ferdinand",
    klaus: "Klaus",
    injuredLeader: "Kapten Tentara Bayaran",
    injuredMercenary: "Tentara Bayaran",
    dionysus: "Dionysus",
    ray: "Ray",
    sister: "Biarawati",
    lyla: "Lyla",
    unknown: "???"
  },
  weapon: {
    1: "Pedang Pendek",
    2: "Busur Pendek",
    3: "Golok",
    4: "Tombak",
    5: "Gladius",
    6: "Busur Berburu",
    7: "Halberd",
    8: "Pedang Panjang",
    9: "Pedang Bastard",
    10: "Kapak Perang",
    11: "Zweihander",
    12: "Tombak Pike",
    13: "Claymore",
    14: "Busur Panjang",
    15: "Falchion",
    16: "Kapak Viking",
    17: "Flamberge",
    18: "Katana",
    19: "Calibrenus"
  },
  ability: {
    1: "Serang Semua",
    2: "Pulih",
    3: "Pulihkan Kelompok"
  },
  battler: {
    jack: "Jack si Pembunuh Raja",
    bee: "Lebah",
    bee2: "Lebah Pembunuh",
    slime: "Slime",
    mandrake: "Mandrake",
    wolf: "Serigala",
    flower: "Bunga",
    bear: "Beruang",
    goblin: "Goblin",
    goblin2: "Hobgoblin",
    carbuncle: "Karbunkel",
    orthrus: "Orthrus",
    gargoyle: "Gargoyle",
    succubus: "Sukubus",
    aragnie: "Aragnier",
    phantom: "Hantu",
    skull: "Tengkorak",
    ghost: "Hantu",
    spectre: "Spektre",
    wraith: "Wraith",
    dullahan: "Dullahan",
    queen: "Ratu",
    bird: "Kellune",
    lizard: "Kadal",
    tree: "Pohon",
    knight: "Ksatria",
    thief: "Pencuri",
    nikke: "Nikke",
    dragon: "Sonberk"
  },
  item: {
    dragonScale: "Sisik Naga"
  },
  ui: {
    sub: {
      menu: "Menu",
      close: "Tutup",
      quests: "Peta & Misi",
      characters: "Karakter",
      save: "Simpan",
      load: "Muat",
      settings: "Pengaturan",
      battleResult: "Hasil"
    },
    setting: {
      autoDetection: "Deteksi Otomatis",
      clickToAction: "Ketuk untuk Beraksi",
      virtualStick: "Pengendali"
    },
    battle: {
      attack: "Serang",
      counter: "Serangan Balik"
    },
    recommendedLevel: "Level Disarankan",
    undefinedArea: "Area Tak Dikenal",
    completed: "Selesai"
  },
  missionStart: `"#{title}" Dimulai`,
  missionComplete: `"#{title}" Selesai`,
  unlockArea: `"#{area}" Terbuka`,
  gotItem: `Mendapatkan "#{name}"`,
  hpRecovered: "HP pulih",
  weaponDrop: "Menemukan #{name}!",
  itemDrop: {
    mandrake: "Menemukan #{num} akar mandrake!",
    magicStone: "Menemukan #{num} batu karbunkel!",
    water: "Mendapatkan #{num} botol air.",
    dagger: "Mendapatkan kembali belati Dario!",
    kelunne: "Menemukan #{num} bulu Kellune!"
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
  dog,
  mercenary,
  drystan,
  bear,
  cassandra,
  princess,
  moonshine,
  aragnie,
  ferdinand,
  marianne,
  dario,
  renfield,
  evangelina,
  lorraine,
  allsRight,
  calibur,
  lute,
  dragonKiller,
  peaceful,
  templeCharacters,
  storyTelling: [
    "Raja telah mangkat.\nKejayaan masa lalu tak lagi terlihat di balik Gerbang Istana yang tertutup.\nKerajaan pun berakhir seiring wafatnya Raja Agung.",
    "— Sejarah Bellion",
    "Seribu tahun kemudian kerajaan itu dilupakan dunia, namanya pun telah hilang.\nNamun keturunan Bellion tak pernah meninggalkan tanah tempat Raja Edgar beristirahat dengan damai.",
    "Suatu ketika, para penyihir yang meratapi wafatnya Raja Agung menemukan cara untuk mengubah waktu.",
    "Sungguh tidak wajar menentang hukum alam,\ntetapi demi Raja Edgar si Pembawa Damai mereka rela menulis ulang sejarah."
  ],
  missionDescription: {
    m0_1: {
      base:
        "Untuk mencegah pembunuhan Raja Edgar, pergilah ke taman kerajaan, tempat pembunuhan itu terjadi.",
      first: "Tanyakan kepada warga kota cara menuju taman kerajaan.",
      second: "Keluarlah dari kota dan pergilah ke taman kerajaan."
    },
    m1_1: {
      base: "Lima ekor anak anjing milik pemburu Matthew kabur.",
      cnt: "Jumlah anak anjing yang ditemukan: #{current}/5."
    },
    m1_2: {
      base: "Seorang tentara bayaran yang terluka hilang.",
      started: "Mari cari di sekitar sini.",
      solved: "Tentara bayaran yang terluka sudah ditemukan. Mari lapor ke perkemahan."
    },
    m1_3: {
      base: "Antar akar mandrake kepada Drystan.",
      cnt: "Terkumpul (#{current}/#{max}) akar mandrake."
    },
    m1_4: {
      base: "Kalahkan Beruang Rex yang buas dan antar darahnya kepada Drystan.",
      bear: "Mari temukan dan kalahkan Beruang Rex.",
      solved:
        "Darah Beruang Rex sudah didapat. Mari antar kepada Drystan."
    },
    m2_1: {
      base: "Cassandra menginginkan anggur untuk menghibur masa tahanannya.",
      wip: "Temukan anggur di lorong bawah tanah.",
      cnt: "Ditemukan (#{current}/3) tong anggur."
    },
    m2_2: {
      base:
        "Putri Mary dan putri adipati Loretta mengumpulkan batu karbunkel untuk membuat hadiah bagi Cassandra.\nKumpulkan batu karbunkel.",
      cnt: "Terkumpul (#{current}/#{max}) batu karbunkel"
    },
    m2_3: {
      base:
        "Penyelundup sopi Dionysus menunggu anjing penjaga istana, Orthrus, tertidur.",
      wip:
        "Orthrus mabuk karena anggur Dionysus. Sekarang saatnya mengalahkan Orthrus.",
      solved: "Orthrus sudah dikalahkan, mari kembali kepada Dionysus."
    },
    m2_4: {
      base:
        "Mantan ksatria, Hector, ingin membalas dendam kepada raja karena memenjarakan Cassandra.\n Bekerjalah sama dengan Mary dan Loretta untuk membebaskan Cassandra.",
      search: "Gunakan lentera batu karbunkel untuk mencari Aragnier.",
      solved: "Aragnier sudah dikalahkan. Mari kembali kepada Cassandra."
    },
    m3_1: {
      base: "Bangsawan asing, Ferdinand, telah menjadi gila.",
      started: "Mari bawakan sesuatu kepada Ferdinand untuk melepas kutukan.",
      solved: "Gunakan jimat Marianne untuk melepas kutukan.",
      completed:
        "Ia diseret ke dasar tebing oleh para arwah yang mendendam kepadanya."
    },
    m3_2: {
      base: "Biarawati itu meringkuk di makam Marianne.",
      started:
        "Kumpulkan beberapa botol air dari monster dan bawakan kepada biarawati.",
      cnt: "Terkumpul (#{current}/#{max}) botol."
    },
    m3_3: {
      base:
        "Dario si nekromanser diancam Jack lalu menciptakan arwah ratu.",
      started: "Sepertinya Jack bersembunyi di dekat sini. Mari temukan dia.",
      solved:
        "Jack sudah dikalahkan. Mari antar belati yang dijatuhkan Jack kepada Dario."
    },
    m3_4: {
      base: "Ray merusak makam untuk membalas dendam kepada keluarga Renfield.",
      started: "Arwah-arwah keluarga Renfield telah muncul!",
      cnt: "Dikalahkan (#{current}/5) arwah keluarga Renfield."
    },
    m3_5: {
      base:
        "Arwah Ratu Evangelina palsu, ciptaan Dario, menyimpan dendam kepada raja.",
      started: "Mari temukan dan kalahkan arwah ratu."
    },
    m4_1: {
      base: "Arsitek Klaus mengajari kami rahasia kuil.",
      started: "Gerakkan arca untuk membuka pintu ke lantai dua."
    },
    m4_2: {
      base:
        "Suku naga Zi, yang tinggal di kuil, bercerita tentang pedang suci, Calibrenus. \nMereka menyiapkan pesan bagi penjaga pedang suci: suku naga Nikke.",
      started: "Kalahkan Kellune dan kumpulkan bulunya.",
      cnt: "Terkumpul (#{current}/#{max}) bulu Kellune"
    },
    m4_3: {
      base: "Pedang suci Calibrenus dijaga oleh suku naga Nikke.",
      started:
        "Gunakan sabda suku Zi untuk memanggil suku Nikke demi pedang suci.",
      talked: "Selesaikan tantangan suku Nikke untuk membuktikan kekuatanmu."
    },
    m4_4: {
      base:
        "Permainan lute Lyla sepertinya dapat membuka pintu ke ruang bawah tanah.",
      started: "Kumpulkan apel untuk Lyla.",
      cnt: "Terkumpul (#{current}/#{max}) apel."
    },
    m4_5: {
      base: "Raja bertarung melawan naga sendirian.",
      started: "Mari pergi ke bagian terdalam dan kalahkan Sonberk."
    },
    m5_1: {
      base: `Surat dari kakakku Ethelbald hanya berkata, "Tunggulah di taman istana."`,
      started: "Mari pergi ke taman istana."
    }
  },
  afterBattle: {
    m1_3: "Sepertinya akar mandrake sudah terkumpul.", // jaquelyn
    m2_2: "Batu karbunkel sudah terkumpul.", // fraancisca
    m3_2: "Rasanya air minum sudah cukup terkumpul.", // francisca
    m4_2: "Bulu Kellune sudah terkumpul." // jaquelyn
  },
  tweet: {
    ca1: "Mari bersembunyi dan menunggu.", // francisca
    ct1: "Katakomba... agak seram...", // ann
    fr1: "Apakah ini Hutan Warkano?", // ann
    tm1: "Kita tiba di pintu masuk kuil.", // jaquelyn
    aplg: "Apel yang tampak lezat.", // ann
    aplb: "Ini apel yang busuk.", // ann
    clbr: "Apakah itu pedang suci?", // francisca
    un1: "Kita menyelinap melewati penjaga Adipati, ini pasti lorongnya.", // francisca
    lost: {
      francisca: ["Hei, tunggu!", "Kamu menghilang..."],
      jaquelyn: ["Ann, jangan tinggalkan aku!", "Ann, kamu ke mana?"]
    }
  },
  mapEvent: {
    underpass8: {
      candle: "Api telah padam."
    },
    temple6: {
      statue: "Ada peranti di alasnya!", // ann
      option: ["Gerakkan peranti", "Biarkan saja"]
    },
    room1: {
      bed: [
        "Mari berangkat pagi-pagi.", // francisca
        "Ann, kamu ingin tidur?" // jaquelyn
      ]
    },
    catacomb1: {
      guard: [
        "Berhati-hatilah mulai dari sini.",
        "Akhir-akhir ini, jumlah monster yang mewabah bertambah dan tak terkendali."
      ]
    },
    catacomb6: {
      door: "Kuncinya pas sekali!"
    }
  }
}
