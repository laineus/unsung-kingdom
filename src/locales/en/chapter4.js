/* eslint-disable quotes */
export const templeCharacters = {
  soldier1: [
    "It's just as His Majesty said.", // soldier1
    "The princess slipped through the guards at the castle,", // soldier1
    "And she followed His Majesty here.", // soldier1
    "But we can't allow you to go inside." // soldier1
  ],
  soldier2: [
    "No matter how many times you ask, I can't let you through.", // soldier2
    "You can't disobey me, I'll tell my father!", // mary
    "My orders come directly from His Highness.", // soldier2
    "Please forgive me." // soldier2
  ],
  mary: [
    "Oh hey, it's the suspicious people I met in the underground passage.", // mary
    "Hehe, nice to see you again.", // ann
    "What are you doing here?", // ann
    "It's dangerous.", // ann
    "My dad and uncle are fighting the dragon.", // mary
    "We can't just wait here!", // mary
    "But these knights won't let us go any further.", // mary
    "Please do something!", // mary
    "Hmmm, I don't think there's anything that can be done." // ann
  ],
  loretta: [
    "?", // loretta
    "You all look familiar.", // loretta
    "Seriously, you forgot?", // ann
    "It's me, Ann. We met in the underground passage.", // ann // TODO: ask
    "Oh, now I remember.", // loretta
    "What are you doing here?", // ann
    "His Majesty is planning to fight the dragon.", // loretta
    "Mary and I rushed here.", // loretta
    "Well I'm worried...", // ann
    "If something were to happen to His Majesty, then Mary...", // loretta
    "I have to lend my support...", // loretta
    "I'm sure things will be ok." // ann
  ],
  dario: {
    talk1: [
      "Oh!  You're the necromancer from the catacombs.", // ann
      "It's you three.", // dario
      "Excellent.", // dario
      "I needed to thank you.", // dario
      "Thank you for easing the ghost of the queen.", // dario
      "I'm so sorry about the danger I put you in.", // dario
      "It's alright.", // ann
      "What are you doing here though?", // ann
      "I heard that the Sage of the Forest was called in to help subdue the dragon.", // dario
      "I came with because I was worried.", // dario
      "Feel free to tell me if you need to recover.", // dario
      "Thank you!" // ann
    ],
    talk2: [
      "Do you need to recover?" // dario
    ],
    option: ["Please", "Alright"]
  },
  drystan: [
    "You are the wise man from Warkano Forest!", // ann
    "Thanks again for making the medicine.", // ann
    "It's the three girls from Warkano Forest.", // drystan
    "Have you come to save the royal house again?", // drystan
    "What are you doing here?", // ann
    "I don't like to leave my forest,", // drystan
    "But I had to help heal the soliders.", // drystan
    "I see.", // ann
    "The dragon has grown reckless.", // drystan
    "Many soliders have been lost.", // drystan
    "Is the dragon that strong?", // ann
    "They have special powers, unknown to humans.", // drystan
    "Wisdom, not power, is essential to counteract the dragon's powers.", // drystan
    "A long time ago, the humans who built this temple were wise in these ways.", // drystan
    "But it is lost to us all.", // drystan
    "Wisdom...", // ann
    "I think this time you should not interfere.", // drystan
    "This isn't like getting rid of a bear." // drystan
  ],
  ray: [
    "Hey, you're the graverobber!", // ann
    "Huh?", // ray
    "You're the girls from the catacombs?", // ray
    "What are you doing here?", // ann
    "It's a once in a lifetime opportunity.", // ray
    "I came to see the dragon.", // ray
    "You want to see the dragon?", // ann
    "You must know how dangerous it is!", // ann
    "Why's that matter?", // ray
    "So cocky.", // ann
    "Well, stay safe.", // ann
    "Hmmm." // ray
  ]
}

export const lorraine = {
  start1: [
    "What are you doing?", // ann
    "I'm repairing this sculpture's mechanism.", // architect
    "Mechanism?", // ann
    "Yes there are numerous hidden mechanisms in the temple.", // architect
    "They open and close doors.", // architect
    "Are you this statue's sculptor?", // ann
    "No.", // architect
    "This temple was made and abandoned long ago.", // architect
    "I just maintain the mechanisms.", // architect
    "It was just a coincidence that I found this mechanism.", // architect
    "Really?  By chance?", // ann
    "Ever since my first visit here I became fascinated with the statues.", // architect
    "I could never forget this statue.", // architect
    "I became a sculptor myself eventually.", // architect
    "One day I was studying this statue so intensely that I completely forgot to eat,", // architect
    "That's when you found this mechanism.", // ann
    "Ah yes, what a wonderful day.", // architect
    "I can still remember my excitement at seeing the mechanism hidden in the pedestal.", // architect
    "It was broken, but I fixed it and made it work again.", // architect
    "Wow.", // ann
    "But anyways, what did you wish to know?" // architect
  ],
  option: ["Ask about the statue", "Ask about the dragon"],
  start2: [
    "The wings of the statue seem to be broken, can't you fix it?", // ann
    "I could, but I won't.", // architect
    "As I said, I'm fascinated by this statue, even in its broken form.", // architect
    "Above all, I respect the person who carved this statue.", // architect
    "I could never modify such perfect work.", // architect
    "That's why I only ensure the mechanisms work.", // architect
    "It took me years though.", // architect
    "Oh you've been here a long time.", // ann
    "Oh, I've spent most my life here." // architect
  ],
  start3: [
    "Do you know about the dragon?", // ann
    "Of course.", // architect
    "The dragon was sleeping in the basement of this temple, but woke up about half a month ago.", // architect
    "Since then, Prince Ethelbald has been visiting the dragon frequently.", // architect
    "What for?", // ann
    "I believe the prince was negotiating with the dragon on behalf of His Majesty, |Trying to calm the dragon's rage.", // architect
    "The dragon's anger was too great though, His Majesty came here today to try to fix things.", // architect
    "That's right.", // ann
    "We also wish to see the dragon,", // ann
    "Can you trigger the mechanism for us?", // ann
    "Unfortunately, I can't.", // architect
    "This is a special one.", // architect
    "Only a woman named Lyla knows how to work this mechanism, she rode in today with the knights.", // architect
    "Oh...", // ann
    "It's no substitute, but,", // architect
    "Here.", // architect
    "What's this?", // ann
    "If you trigger other mechanisms with this, you can reach the rooftop.", // architect
    "You'll have to study the mechanisms, but I'm sure you'll figure it out.", // architect
    "Thank you!" // ann
  ],
  item: "Simple Key",
  started: [
    "Think about how to trigger the mechanisms." // architect
  ],
  solved: [
    "It looks like you have solved the mechanisms.", // architect
    "If you wish to go underground, look for Lyla." // architect
  ],
  tweet: [
    "Here's a mechanism.", // jaquelyn
    "Can Ann solve it?", // francisca
    "Good luck!", // jaquelyn
    "I did it!" // ann
  ]
}
export const allsRight = {
  start: [
    "Hmmm?", // zi
    "The door should have been sealed...", // zi
    "Ah!  A dragon?", // ann
    "Is this your first time meeting a dragon?", // zi
    "Uh, yeah.", // ann
    "I was surprised.", // ann
    "I am part of a dragon tribe.", // zi
    "I'm sorry if you were frightened.", // zi
    "Wow there are many dragons in the kingdom.", // ann  // double check this and the next one
    "There are.", // zi
    "A long time ago, dragons and humans coexisted here.", // zi
    "A war broke out between the two races, and the defeated dragons left the land.", // zi
    "It's an old tale.", // zi
    "But some do remain, like myself.", // zi
    "I see.", // ann
    "Why did you stay?", // ann
    "Because I believe in the god of this land.", // zi
    "God makes no distinction between dragons and people,", // zi
    "God watches over all of us equally.", // zi
    "There's not much here, it's very peaceful.", // zi
    "That's true.", // ann
    "Are the other remaining dragons living in seclusion?", // ann
    "Many are.", // zi
    "Many dragons prefer to live in quiet, remote regions.", // zi
    "But some do not like to hide.", // zi
    "For example, the mighty dragon Sonberk, that your king sealed underground.", // zi
    "Did you come to challenge him too?", // zi
    "Ummm, well yes.", // ann
    "You don't have to worry about me.", // zi
    "I might be a dragon, but Sonberk is violent in my eyes as well.", // zi
    "I know you sought this fight reluctantly.", // zi
    "But Sonberk is a mighty dragon.", // zi
    "You have little hope of defeating him.", // zi
    "How did the king manage it before?", // ann
    "Humans are a crafty race.", // zi
    "Powerful weapons and tools narrowed the gap between man and dragon.", // zi
    "For example, the holy sword Calibrenus, which is sealed in this temple.", // zi
    "That sword is undeniably a threat to us.", // zi
    "Holy sword Calibrenus...", // ann
    "If we had the holy sword could we stand against Sonberk?", // ann
    "The sword would give you hope.", // zi
    "I don't know what sword the king wields.", // ann
    "But you should know,", // zi
    "That sword was sealed away by the dragon tribe Nikke.", // zi
    "I can't retrieve it for you.", // zi
    "Oh I see.", // ann
    "What can we do?", // ann
    "Can you ask that Nikke to lend it to me?", // ann
    "I'm sorry.", // zi
    "I said I understand your fight with Sonberk,", // zi
    "But I could not help you slay a fellow dragon.", // zi
    "I see...", // ann
    "We're in trouble...", // ann
    "...", // zi
    "But I can help create an opportunity to speak with the Nikke.", // zi
    "An opportunity?", // ann
    "The Nikke are reclusive.", // zi
    "They will not respond to a human's call.", // zi
    "But you can leave a message from me.", // zi
    "So you will help!", // ann
    "It requires some preparation.", // zi
    "Preparation?", // ann
    "Collect #{KELUNNE_COUNT} feathers of Kelunne", // zi
    "Use those to make a message.", // zi
    "A message?", // ann
    "I can't say I understand, but I'll help find them!" // ann
  ],
  solve: [
    "I collected them.", // ann
    "Ok.", // zi
    "Wait a minute.", // zi
    "Finished.", // zi
    "Is this...? A bottle?", // ann
    "I filled the bottle with the smoke of words.", // zi
    "Oh... uh ok.", // ann
    "What is the smoke of words?", // ann
    "The words of the dragons can be seen in the smoke.", // zi
    "Wow, really...", // ann
    "Unplug this bottle near the holy sword.", // zi
    "My words should reach the Nikke.", // zi
    "Ok, thank you!" // ann
  ],
  solved1: [
    "Near the holy sword, unplug the bottle to release the words.", // zi
    "My words should reach the Nikke." // zi
  ],
  solved2: [
    "All the world is nothing.", // zi
    "My home here is nothing, just a peaceful place." // zi
  ]
}
export const calibur = {
  start: [
    "Ok, let's release the words of the Zi.", // ann
    "Hello.", // nikke
    "You called?", // nikke
    "Um, Sir Nikke?", // ann
    "Yes", // nikke
    "I heard Zi's message.", // nikke
    "Who are you?", // nikke
    "I'm Ann.", // ann
    "Ann, do you seek the holy sword?", // nikke
    "Yes!  Can you lend it to me?", // ann
    "It is a wonderous sword.", // nikke
    "A terrifying thing to us dragons.", // nikke
    "It takes courage to hand it over to a human.", // nikke
    "I will convince you by any means necessary.", // ann
    "Any means?", // nikke
    "Any means.", // ann
    "Why do you seek the holy sword?", // nikke
    "Well...", // ann
    "Do you wish to slay a dragon with it?", // nikke
    "Uh...", // ann
    "Tell me.", // nikke
    "I wish to defeat the dragon, Sonberk.", // ann
    "Slay Sonberk.", // nikke
    "Poor Sonberk.", // nikke
    "A violent dragon, but still my friend.", // nikke
    "Is that so?", // ann
    "He has been sealed away for ten years,", // nikke
    "And has finally woken up.", // nikke
    "Just to be hunted down.", // nikke
    "It's tragic...", // ann
    "Poor Sonberk.", // nikke
    "...", // ann
    "I know it can't be helped.", // nikke
    "This is human land now.", // nikke
    "It's natural that they wish to oppress it.", // nikke
    "I don't wish to oppress your kind.", // ann
    "Is it possible to persuade Sonberk not to release his wrath upon our kingdom?", // ann
    "I don't think so.", // nikke
    "I see...", // ann
    "Only the holy sword can convince him.", // nikke
    "Alright,", // nikke
    "I shall let you wield it.", // nikke
    "It was forged by humans after all.", // nikke
    "It's only fair to give it back to them.", // nikke
    "You are free to use it to protect your kingdom.", // nikke
    "Really?", // ann
    "Really.", // nikke
    "But not anyone can wield this.", // nikke
    "Yes...", // nikke
    "The one who forged this was a mighty warrior.", // nikke
    "Are you up to the task of wielding it?", // nikke
    "You must prove yourself.", // nikke
    "Prove ourselves?", // ann
    "Fight me.", // nikke
    "I see.", // ann
    "Are you up to the task? ", // nikke
    "Prepare yourself!" // nikke
  ],
  talked: [
    "Are you ready?" // nikke
  ],
  option: ["Yes", "No"],
  cancel: [
    "Then come back when you're ready." // nikke
  ],
  solve: [
    "Wow.", // nikke
    "You're very strong.", // nikke
    "Alright.  I surrender.", // nikke
    "Well done.  I am a less powerful dragon though, do not become overconfident.", // nikke
    "Well then... the sword.", // nikke
    "Here, take it.", // nikke
    "Thank you.", // ann
    "Yes.  It looks good in your hands.", // nikke
    "Thank you.", // ann
    "Yeah...", // nikke
    "Well...", // nikke
    "Since I no longer have to keep an eye on that sword,", // nikke
    "I might go on a trip somewhere.", // nikke
    "Ah,", // nikke
    "By the way,", // nikke
    "Are you all cheating?", // nikke
    "Huh?", // ann
    "I feel like time is distorted when you are nearby.", // nikke
    "...", // ann
    "Well,", // nikke
    "Probably another power crafted by you humans." // nikke
  ]
}
export const lute = {
  unavailable: [
    "Ah...", // ann
    "Taking a nap." // ann
  ],
  start: [
    "Hello, young lady.", // lyla
    "What a marvelous sword you have.", // lyla
    "You've come to challenge the dragon then?", // lyla
    "That's right.", // ann
    "I can't find a way underground though...", // ann
    "Oh, I see.", // lyla
    "What you are looking for is this goddess statue.", // lyla
    "Really!?", // ann
    "You must be Lyla.", // ann
    "Really.", // lyla
    "Did you speak with the sculptor?", // lyla
    "Only you can trigger this mechanism.", // ann
    "Correct.", // lyla
    "Do you want me to open it?", // lyla
    "Of course! ", // ann
    "What will you do for me to open it?", // lyla
    "Well,", // ann
    "Anything!", // ann
    "Anything?", // lyla
    "Yeah.", // ann
    "I don't really want you to do that much...", // lyla
    "Oh,", // ann
    "Then can you open it?", // ann
    "No, you have to do something.", // lyla
    "Uh...", // ann
    "Then, hmmm,", // ann
    "Do you enjoy apples?", // ann
    "I like them.", // lyla
    "So!", // lyla
    "I'll ask you to find me a beautiful one.", // lyla
    "Leave it to me!" // ann
  ],
  started: [
    "Have you found a beautiful apple?", // lyla
    "I'm looking forward to it." // lyla
  ],
  solve1: [
    "I've collected the apples!", // ann
    "Very nice." // lyla
  ],
  answer: [
    ["Yes, delicious.", "Thank you."], // lyla
    ["Hmmm this apple isn't that good.", "Well, I guess it can't be helped."] // lyla
  ],
  solve2: [
    "Well I made a promise.", // lyla
    "I'll open it now.", // lyla
    "What kind of mechanism is it?", // ann
    "I must play my lute.", // lyla
    "The door opens in response to the music.", // lyla
    "Huh.", // ann
    "Listen." // lyla
  ],
  solve3: [
    "Well, it should be opened now.", // lyla
    "Wow!", // ann
    "Why does the sound move the device?", // ann
    "I don't really understand either.", // lyla
    "I think the goddess responds to the love of music.", // lyla
    "What do you mean?", // ann
    "Even if you play the same tune, it won't open unless you pour your heart into it.", // lyla
    "But if you play it with all your heart, it will open.", // lyla
    "I'm sure the person who made this mechanism also loved the goddess.", // lyla
    "That's nice.", // ann
    "These apples are beautiful.", // lyla
    "You must have taken great care in picking them.", // lyla
    "I'm sure the sculptor of this statue took similar care when carving the likeness of his goddess.", // lyla
    "Hehe.", // ann
    "Well then,", // lyla
    "Do be careful.", // lyla
    "Thank you!" // ann
  ],
  option: ["Pick up", "Don't need"],
  apple: `"Apple" picked up`,
  tweet: "Five apples have been gathered."
}
export const dragonKiller = {
  soldier: [
    "The dragon... was much more powerful than we expected...", // soldier1
    "How did the king manage to beat the dragon ten years ago...", // soldier2
    "I want to help His Majesty... but I can't move anymore..." // soldier3
  ],
  block: [
    "Hey, don't you want to talk to the injured soldiers?" // francisca
  ],
  start: [
    "Are you ok!?", // ann
    "It's you...", // ethel
    "Did the dragon hit you?", // ann
    "Yes...", // ethel
    "Brother...", // ethel
    "You came to aid Edgar?", // ethel
    "Yes.", // ann
    "Are you the prince?", // ann
    "Yes", // ethel double check.
    "Edgar and the dragon are ahead.", // ethel
    "You're badly hurt.", // ann
    "Don't worry about me.", // ethel
    "My brother fight's alone now.", // ethel
    "Edgar...", // ethel
    "Help my brother..." // ethel
  ],
  started: [
    "Have we met somewhere before?", // ann
    "There's no time to gossip." // ethel
  ],
  confirm: [
    "The dragon's lair is beyond." // francisca
  ],
  confirmOption: ["Go ahead", "Stop"],
  king1: [
    "Edgar, it's good you finally found the courage to show yourself.", // sonberk
    "I could never go home while the man who sealed me away for ten years walks free.", // sonberk
    "Or... do you really think you can best me again, like ten years ago?", // sonberk
    "Don't be so arrogant.", // king
    "Sonberk, tell me something.", // king
    "Will your anger subside if I offer you my head here and now?", // king
    "You worry about your kingdom?", // sonberk
    "You seek peace of mind.", // sonberk
    "You are here now.", // sonberk
    "Your brother Ethelbald has fulfilled his promise.", // sonberk
    "You wish to trade your own life for the good of your kingdom.", // sonberk
    "Yes.", // king
    "I don't know what my brother agreed to, but that's what I want.", // king
    "Shower me in flame until you've satisfied your anger." // king
  ],
  king2: [
    "Huwa!", // king
    "!", // ann
    "Hurry up!", // ann
    "...", // king
    "He's collapsed!" // ann
  ],
  sonberk: [
    "Sonberk! Prepare yourself!", // ann
    "Who?", // sonberk
    "You're not the king's knights.", // sonberk
    "We are merely citizens of the realm.", // ann
    "Just a citizen.", // sonberk
    "Yet you came here to help the king?", // sonberk
    "That's right.", // ann
    "And what do little girls think they can do to me?", // sonberk
    "Kill you.", // ann
    "With this sword.", // ann
    "That sword is...", // sonberk
    "I know that sword.", // sonberk
    "Why is it in your possession?", // sonberk
    "No matter.", // sonberk
    "It's still in the hands of a little girl.", // sonberk
    "If you wish to die here next to your king, I shall grant your wish.", // sonberk
    "Come on!" // sonberk
  ],
  solve: [
    "Finished!  Defeated!", // ann
    "We did it Ann.", // jaquelyn
    "Somehow.", // francisca
    "Okay, we need to help the king and his knights!", // ann
    "Yes.", // jaquelyn
    "Once we've helped them, we can disappear.", // francisca
    "Ok!" // ann
  ]
}
