import { roomBook, roomEv } from './room'
import { townGreeting, townGreeting4, townBoard, townCommon, townChapter0, townChapter1, townChapter2, townChapter3, townChapter4, townChapter5 } from './town'
import { jack } from './chapter0'
import { dog, mercenary, drystan, bear } from './chapter1'
import { cassandra, princess, moonshine, aragnie } from './chapter2'
import { ferdinand, marianne, dario, renfield, evangelina } from './chapter3'
import { lorraine, allsRight, nikke, calibur, lute, dragonKiller, templeCharacters } from './chapter4'
import { peaceful } from './chapter5'
export default {
  langLabel: "English",
  chapter: [
    { name: "Cp0", title: "Jack the Kingkiller", sub: "" },
    { name: "Cp1", title: "Warcoforsubce", sub: "" },
    { name: "Cp2", title: "Troias's Secret Passage", sub: "" },
    { name: "Cp3", title: "Catacombs of St Anterus", sub: "" },
    { name: "Cp4", title: "Temple of Grefalde", sub: "" },
    { name: "Ep", title: "Edgar the Peaceful", sub: "" },
  ],
  area: {
    town: "Royal Capital",
    castle: "Royal Gardens",
    forest: "Walcoforence Forest",
    underpass: "The Duke of Troias's Underground Passage",
    catacomb: "Cemetery of St. Anterus",
    temple: "Temple of Grefalde",
  },
  areaSub: {
    bellion: "Kingdom of Belion",
    room: "base", // double check
    forest: {
      a: "Eastern Section",
      b: "Hunter's Heights",
      c: "High Plateau", // double check
      d: "Clearing",
      e: "Southern Section",
      f: "Camping Area",
      g: "Northwestern Hill",
      h: "Northwest Section",
      i: "Hermit's Dwelling",
    },
    underpass: {
      a: "Prison",
      b: "Duke's Side Passage",
      c: "Water Way",
      d: "Small Room",
      e: "Storage",
      f: "Watchdog's Room",
      g: "Royal Passage",
      h: "Corridor",
      i: "Castle Entrance",
    },
    aragnie: "Aragnie's Chamber",
    catacomb: {
      a: "Entrance",
      b: "East Room",
      c: "Cemetery",
      d: "South Cemetery",
      e: "West Block",
      f: "Noble's Tomb",
      g: "Royal Family's Tomb",
    },
    temple: {
      a: "Entrance",
      b: "Plaza",
      c: "Central Chamber",
      d: "2nd Floor",
      e: "Eastern Chamber",
      f: "Underground",
      g: "Deepest Section",
    },
  },
  mission: {
    m0_1: { title: "王殺しのジャック", sub: "Jack the Kingkiller" },
    m1_1: { title: "マシューと狩猟犬", sub: "Matthew and the Hunting Dogs" },
    m1_2: {
      title: "アイザムバード傭兵団の討伐遠征",
      sub: "Isambard Mercenaries",
    },
    m1_3: { title: "森の賢人ドリスタン", sub: "Drystan the Hermit" },
    m1_4: { title: "ワルコフォレンスの人食い熊", sub: "The Rex Bear" },
    m2_1: { title: "幽閉されしカサンドラ", sub: "Incarcerated Cassandra" },
    m2_2: {
      title: "メアリー王女と公爵令嬢ロレッタ",
      sub: "Princess Mary and Loretta",
    },
    m2_3: { title: "ディオニューソスの密造酒", sub: "Dionysus's Moonshine" },
    m2_4: { title: "アラグニエのねぐら", sub: "Aragnie's lair" },
    m3_1: { title: "呪われしフェルディナンド卿", sub: "Cursed Lord Ferdinand" },
    m3_2: {
      title: "マリアンヌの歌を聞いてから死ね",
      sub: "Die after listening Marianne's song.",
    },
    m3_3: { title: "ダリオの哀しみ", sub: "Dario's Sorrow" },
    m3_4: {
      title: "レンフィールド家の大罪",
      sub: "Sins of the Renfield family",
    },
    m3_5: {
      title: "エヴァンジェリナ妃の亡霊",
      sub: "Ghost of Princess Evangelina",
    },
    m4_1: { title: "清浄なるロレイン像", sub: "Sacred Lorraine's statue" },
    m4_2: { title: "すべて世はこともなし", sub: "All's right with the world" },
    m4_3: { title: "聖剣カリブルヌス", sub: "Caliburnus" },
    m4_4: { title: "女神さまに捧ぐリュート", sub: "Lute for goddess" },
    m4_5: { title: "竜殺しの王", sub: "The Dragonkiller King" },
    m5_1: { title: "平和王エドガー", sub: "Edgar the Peaceful" },
  },
  chara: {
    ann: "Ann",
    jaquelyn: "Jaquelyn",
    francisca: "Francisca",
    king: "King",
    jack: "Jack",
    ethel: "Ethel",
    guard: "Guard",
    soldier: "Soldier",
    injuredSoldier: "Injured Soldier",
    amber: "Amber",
    elliott: "Elliot",
    max: "Max",
    annabelle: "Annabelle",
    matilda: "Matilda",
    hunter: "Hunter",
    zi: "Zi",
    mary: "Mary",
    loretta: "Loretta",
    hector: "Hector",
    cassandra: "Cassandra",
    nikke: "Nikke",
    dario: "Dario",
    drystan: "Drystan",
    queen: "Queen",
    sonberk: "Sonberk",
    fdn: "フェルディナンド卿",
    klaus: "Klaus",
    injuredLeader: "Injured Mercenary Captain",
    injuredMercenary: "Injured Mercenary",
    dionysus: "Dionysus",
    ray: "Ray",
    sister: "Sister",
    lyla: "Lyla",
    unknown: "???",
  },
  weapon: {
    1: "Short Sword",
    2: "Short Bow",
    3: "Cutlass",
    4: "Spear",
    5: "Gladius",
    6: "Hunting Bow",
    7: "Halberd",
    8: "Longsword",
    9: "Bastard Sword",
    10: "Battle Ax",
    11: "Zweihander",
    12: "Pike",
    13: "Claymore",
    14: "Longbow",
    15: "Falchion",
    16: "Viking Axe",
    17: "Flamberge",
    18: "Katana",
    19: "Calibrenus", // Japanese to English translation seems like the name of a sword.
  },
  ability: {
    1: "Attack All",
    2: "Recover",
    3: "Heal Party",
  },
  battler: {
    jack: "Jack",
    bee: "Bee",
    bee2: "Killer Bee",
    slime: "Slime",
    mandrake: "Mandrake",
    wolf: "Wolf",
    flower: "Flower",
    bear: "Bear",
    goblin: "Goblin",
    goblin2: "Goblin",
    carbuncle: "Carbuncle",
    orthrus: "Orthrus",
    gargoyle: "Gargoyle",
    succubus: "Succubus",
    aragnie: "Aragnie",
    phantom: "Phantom",
    skull: "Skull",
    ghost: "Ghost",
    spectre: "Spectre",
    wraith: "Wraith",
    dullahan: "Dullahan",
    queen: "Queen",
    bird: "Bird",
    lizard: "Lizard",
    tree: "Tree",
    knight: "Knight",
    thief: "Thief",
    nikke: "Nikke",
    dragon: "Dragon",
  },
  item: {
    dragonScale: "Dragonscale",
  },
  ui: {
    sub: {
      menu: "Menu",
      close: "Close",
      quests: "Quests",
      characters: "Characters",
      save: "Save",
      load: "Load",
      settings: "Settings",
    },
    setting: {
      autoDetection: "Auto Detection",
      clickToAction: "Click to Act",
      virtualStick: "Controller",
    },
    battle: {
      attack: "Attack",
      counter: "Counter",
    },
    recommendedLevel: "Recommended Level",
    undefinedArea: "Undefinied Area",
  },
  missionStart: "『#{title}』Start",
  missionComplete: "『#{title}』Complete",
  unlockArea: `"#{area}" Unlocked`,
  gotItem: `"#{name}" picked up`,
  hpRecovered: "HP recovered",
  weaponDrop: "#{name} found!",
  itemDrop: {
    mandrake: "#Found {num} mandrake roots!",
    magicStone: "Found #{num} carbuncle stones!",
    water: "Got #{num} bottles of water.",
    dagger: "Recovered Dario's dagger!",
    kelunne: "Found #{num} Kellune feathers!",
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
  nikke,
  calibur,
  lute,
  dragonKiller,
  peaceful,
  templeCharacters,
  storyTelling: [
    "The king is dead.\nThe gates of the castle are barred, the glory beyond unseen for generations.\nFollowing the death of the Great King, the Kingdom abruptly fell.",
    "— The history of Bellion",
    "After a thousand years the kingdom was forgotten to the world, it's name long lost.\nBut the descendants of Verion never left the land where King Edgar sleeps peacefully.",
    "At some point, magicians who lamented the death of the good king discovered a way to alter time.",
    "It was unnatural to defy the laws of nature,\nbut for the good king they were willing to rewrite history.",
  ],
  missionDescription: {
    m0_1: {
      base:
        "To prevent the assassination of King Edgar, head to the royal gardens, the site of the murder.",
      first: "Ask around town to find out how to go to the royal gardens.",
      second: "Let's leave town and head to the royal gardens.",
    },
    m1_1: {
      base: "Hunter Matthew's five puppies hae escaped.",
      cnt: "Number of puppies found: #{current}/5.",
    },
    m1_2: {
      base: "An injured mercenary is missing.",
      started: "Let's search nearby.",
      solved: "Found the injured mercenary.  Let's check in at the camp.",
    },
    m1_3: {
      base: "Deliver mandrake roots to Drystan.",
      cnt: "Collected #{current}/#{max}）mandrake roots.",
    },
    m1_4: {
      base: "Defeat the ferocious Rex Bear and deliver its blood to Drystan.",
      bear: "Let's find and defeat the Rex Bear.",
      solved:
        "I have the blood from the Rex Bear.  Let's deliver it to Drystan.",
    },
    m2_1: {
      base: "Cassandra wants some wine to ease her imprisonment.",
      wip: "Find wine in the underground passage.",
      cnt: "Found（#{current}/3）barrels of wine.",
    },
    m2_2: {
      base:
        "Princess Mary and the Duke's daughter Loretta are collecting carbuncle stones to craft a gift for Cassandra.\n Collect carbuncle stones.",
      cnt: "Collected #{current}/#{max}）carbuncle stones",
    },
    m2_3: {
      base:
        "Moonshine smuggler Dionysus is waiting for the castle's guard dog, Orthrus, to sleep.",
      wip:
        "Orthrus is drunk off of Dionysus's wine.  It's time to defeat Orthrus.",
      solved: "Orthrus is defeated, let's return to Dionysus.",
    },
    m2_4: {
      base:
        "The former knight, Hector, wants revenge on the king for imprisoning Cassandra.\n Let's work with Mary and Loretta to free Cassandra.",
      search: "Use the carbuncle stone lantern to search for Aragnier.",
      solved: "Defeated Aragnier. Let's return to Cassandra.",
    },
    m3_1: {
      base: "The foreign aristocrat, Ferdinand, has gone insane.",
      started: "Let's bring something to Ferdinand to lift the curse.",
      solved: "Use Marianne's amulet to lift the curse.",
      completed:
        "He was dragged to the bottom of the cliff by the ghosts who resent him.",
    },
    m3_2: {
      base: "The nun is huddled up at Marianne's tomb.",
      started:
        "Collect some vials of water from a monster and bring them to the sister.",
      cnt: "(#{current}/#{max}）bottles collected.",
    },
    m3_3: {
      base:
        "Dario the necromancer was threatened by Jack and created the ghost of the Queen.",
      started: "It seems that Jack is lurking nearby. Let's find him.",
      solved:
        "We defeated Jack. Let's deliver the dagger that Jack dropped to Dario.",
    },
    m3_4: {
      base: "Ray is vandalizing the grave for revenge on the Renfields.",
      started: "The ghosts of the Renfield family have appeared!",
      cnt: "Defeated (#{current}/5）ghosts of the Renfield family.",
    },
    m3_5: {
      base:
        "The ghost of the fake Queen Evangelina, created by Dario, holds a grudge against the king.",
      started: "Let's find and defeat the ghost of the queen.",
    },
    m4_1: {
      base: "The architect Klaus taught us about the temple secrets.",
      started: "Trigger the statue to open the door to the second floor.",
    },
    m4_2: {
      base:
        "The dragon tribe Zi, who live in the temple, told us about the holy sword, Calibrenus. \nThey prepared a message for the protectors of the holy sword: the dragon tribe Nikke.",
      started: "Kill Kerune and collect their feathers.",
      cnt: "Collected (#{current}/#{max}）Kerune feathers",
    },
    m4_3: {
      base: "The holy sword Calibrenus is protected by the dragon tribe Nikke.",
      started:
        "Use the words of the Zi tribe to call upon the Nikke tribe for the holy sword.",
      talked: "Complete the Nikke's tribe's challenge to prove your strength.",
    },
    m4_4: {
      base:
        "Lyra's lute playing seems to be able to open the door to the basement.",
      started: "Collect apples for Lyra.",
      cnt: "Collected #{current}/#{max}）apples.",
    },
    m4_5: {
      base: "The king is fighting the dragon alone.",
      started: "Let's go to the innermost part and defeat Sonberk.",
    },
    m5_1: {
      base: `The letter from my brother Ezerbald just said, "Wait in the castle garden."`,
      started: "Let's head to castle's garden.",
    },
  },
  afterBattle: {
    m1_3: "It looks like the mandrake roots have been gathered.", // jaquelyn
    m2_2: "The Carbuncle stones have been gathered.", // fraancisca
    m3_2: "Sufficient drinking water has been collected.", // francisca
    m4_2: "The Kerune feathers have been gathered.", // jaquelyn
  },
  tweet: {
    ca1: "Hide yourself somewhere and wait.", // francisca
    ct1: "Catacombs... a little scary...", // ann
    fr1: "Is this the Forest of Warcoforence?", // ann
    tm1: "We've arrived at the entrance to the temple.", // jaquelyn
    aplg: "Delicious apple.", // ann
    aplb: "It's a damaged apple.", // ann
    clbr: "Is that the holy sword?", // francisca
    un1: "We've successfully invaded", // francisca うまく侵入できたね not sure what this is double check
    lost: {
      francisca: ["Well, wait!", "disappeared..."],
      jaquelyn: ["Ann, don't leave it", "Ann, where?"], // double check
    },
  },
  mapEvent: {
    underpass8: {
      candle: "The fire has died out.",
    },
    temple6: {
      statue: "There is a device in the pedestal!", // ann
      option: ["Move the device", "Leave it alone"],
    },
    room1: {
      bed: [
        "Let's head out early.", // francisca
        "Ann, do you want to sleep?", // jaquelyn
      ],
    },
    catacomb1: {
      guard: [
        "Be careful from here onward.",
        "In recent years, the number of infested monsters has increased and are getting out of hand.",
      ],
    },
    catacomb6: {
      door: "The key fits perfectly!",
    },
  },
};
