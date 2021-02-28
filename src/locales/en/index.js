import { roomBook, roomEv } from "./room";
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
  townChapter5,
} from "./town";
import { jack } from "./chapter0";
import { dog, mercenary, drystan, bear } from "./chapter1";
import { cassandra, princess, moonshine, aragnie } from "./chapter2";
import { ferdinand, marianne, dario, renfield, evangelina } from "./chapter3";
import {
  lorraine,
  allsRight,
  nikke,
  calibur,
  lute,
  dragonKiller,
  templeCharacters,
} from "./chapter4";
import { peaceful } from "./chapter5";
export default {
  langLabel: "English",
  chapter: [
    { name: "Prologue:", title: "Jack the Kingkiller", sub: "" },
    { name: "Chapter 1:", title: "Warkano Forest", sub: "" },
    { name: "Chapter 2:", title: "Troias's Secret Passage", sub: "" },
    { name: "Chapter 3:", title: "Catacombs of St Anterus", sub: "" },
    { name: "Chapter 4:", title: "Temple of Grefalde", sub: "" },
    { name: "Epilogue:", title: "Edgar the Peaceful", sub: "" },
  ],
  area: {
    town: "Royal Capital",
    castle: "Royal Gardens",
    forest: "Warkano Forest",
    underpass: "Troias's Secret Passage",
    catacomb: "Catacombs of St Anterus",
    temple: "Temple of Grefalde",
  },
  areaSub: {
    bellion: "Kingdom of Bellion",
    room: "Base", // double check
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
    aragnie: "Aragnier's Lair",
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
    m0_1: { title: "Jack the Kingkiller", sub: "Jack the Kingkiller" },
    m1_1: {
      title: "Matthew and the Hunting Dogs",
      sub: "Matthew and the Hunting Dogs",
    },
    m1_2: {
      title: "The Isambard Mercenaries",
      sub: "The Isambard Mercenaries",
    },
    m1_3: { title: "Drystan the Hermit", sub: "Drystan the Hermit" },
    m1_4: { title: "Rex Bear", sub: "Rex Bear" },
    m2_1: { title: "Imprisoned Cassandra", sub: "Imprisoned Cassandra" },
    m2_2: {
      title: "Princess Mary and Lady Loretta",
      sub: "Princess Mary and Lady Loretta",
    },
    m2_3: { title: "Dionysus's Moonshine", sub: "Dionysus's Moonshine" },
    m2_4: { title: "Aragnier's Lair", sub: "Aragnier's Lair" },
    m3_1: { title: "Cursed Lord Ferdinand", sub: "Cursed Lord Ferdinand" },
    m3_2: {
      title: "To Hear Marianne's song again",
      sub: "To Hear Marianne's song again",
    },
    m3_3: { title: "Dario's Sorrow", sub: "Dario's Sorrow" },
    m3_4: {
      title: "The Sins of the Renfield Family",
      sub: "The Sins of the Renfield Family",
    },
    m3_5: {
      title: "Ghost of Queen Evangelina",
      sub: "Ghost of Queen Evangelina",
    },
    m4_1: {
      title: "Grefalde's Sacred Statue",
      sub: "Grefalde's Sacred Statue",
    },
    m4_2: {
      title: "The Words of Dragons",
      sub: "The Words of Dragons",
    },
    m4_3: { title: "Calibrenus", sub: "Calibrenus" },
    m4_4: { title: "Music for the Goddess", sub: "Music for the Goddess" },
    m4_5: { title: "The Dragonkiller King", sub: "The Dragonkiller King" },
    m5_1: { title: "Edgar the Peaceful", sub: "Edgar the Peaceful" },
  },
  chara: {
    ann: "Ann",
    jaquelyn: "Jaquelyn",
    francisca: "Francisca",
    king: "King",
    jack: "Jack",
    ethel: "Ezerbald",
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
    queen: "Queen Evangelina",
    sonberk: "Sonberk",
    fdn: "Lord Ferdinand",
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
    2: "Shortbow",
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
    goblin2: "Hobgoblin",
    carbuncle: "Carbuncle",
    orthrus: "Orthrus",
    gargoyle: "Gargoyle",
    succubus: "Succubus",
    aragnie: "Aragnier",
    phantom: "Phantom",
    skull: "Skull",
    ghost: "Ghost",
    spectre: "Spectre",
    wraith: "Wraith",
    dullahan: "Dullahan",
    queen: "Queen",
    bird: "Kellune",
    lizard: "Lizard",
    tree: "Tree",
    knight: "Knight",
    thief: "Thief",
    nikke: "Nikke",
    dragon: "Sonberk",
  },
  item: {
    dragonScale: "Dragonscale",
  },
  ui: {
    sub: {
      menu: "Menu",
      close: "Close",
      quests: "Map & Quests",
      characters: "Characters",
      save: "Save",
      load: "Load",
      settings: "Settings",
      battleResult: "Result"
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
  missionStart: `"#{title}" Start`,
  missionComplete: `"#{title}" Complete`,
  unlockArea: `"#{area}" Unlocked`,
  gotItem: `"#{name}" picked up`,
  hpRecovered: "HP recovered",
  weaponDrop: "#{name} found!",
  itemDrop: {
    mandrake: "Found #{num} mandrake roots!",
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
    "The King is dead.\nThe Glory of the past can no longer be seen beyond the closed Gates of the Castle.\nThe Kingdom came to an end with the Death of the Great King.",
    "— The History of Bellion",
    "After a thousand years the kingdom was forgotten to the world, it's name long lost.\nBut the descendants of Bellion never left the land where King Edgar sleeps peacefully.",
    "At some point, magicians who lamented the death of the Great King discovered a way to alter time.",
    "It was unnatural to defy the laws of nature,\nbut for King Edgar the Peaceful they were willing to rewrite history.",
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
        "Lyla's lute playing seems to be able to open the door to the basement.",
      started: "Collect apples for Lyla.",
      cnt: "Collected (#{current}/#{max}）apples.",
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
    m3_2: "I think enough drinking water has been collected.", // francisca
    m4_2: "The Kerune feathers have been gathered.", // jaquelyn
  },
  tweet: {
    ca1: "Let's hide somewhere and wait.", // francisca
    ct1: "Catacombs... a little scary...", // ann
    fr1: "Is this Warkano Forest?", // ann
    tm1: "We've arrived at the entrance to the temple.", // jaquelyn
    aplg: "A delicious looking apple.", // ann
    aplb: "It's a damaged apple.", // ann
    clbr: "Is that the holy sword?", // francisca
    un1: "We've successfully invaded.", // francisca うまく侵入できたね not sure what this is double check
    lost: {
      francisca: ["Hey, wait!", "You disappeared..."],
      jaquelyn: ["Ann, don't leave me!", "Ann, where did you go?"], // double check
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
