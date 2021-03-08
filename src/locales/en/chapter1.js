/* eslint-disable quotes */
export const dog = {
  start: [
    "This forest is dangerous, unless you're here on urgent business I suggest you don't go any further.", // hunter
    "Why is it so dangerous?", // ann
    "A ferocious bear has appeared.", // hunter
    "A bear?", // ann
    "Not just any bear, this is a truly ferocious beast.", // hunter
    "Originally it wasn't a threat, until it tasted its first human.", // hunter
    "It remembered the taste, and now aggressively hunts anyone who enters the forest.", // hunter
    "Whoa!", // ann
    "Royal hunters, and even a mercenary unit, were dispatched to capture the bear, |But no one's heard from them since.", // hunter
    "Is there a reward for bringing down the bear?", // ann
    "Surely there must be a reward.", // francisca
    "Hmmm.  I hope the stories have been greatly exaggerated.", // hunter
    "It's a good story for those who don't need to enter the forest.", // hunter
    "Anyways, I have no desire to see such a ferocious beast.", // hunter
    "If someone takes him down, we'd all be happy.", // hunter
    "So you are hunter.", // ann
    "What do you hunt in here?", // ann
    "Not ferocious bears, that for sure!  Just small game for meat.", // hunter
    "But now I'm just looking for my dogs that ran away.", // hunter
    "Your dogs ran away?", // ann
    "My hunting dog had five puppies, they're not even a year old yet.", // hunter
    "Sorry to bother you, but if you see any puppies could you bring them to me?", // hunter
    ["Sure", "I'm awfully busy"],
    ["Thank you.  It was nice to meet you.", "I see."] // hunter
  ],
  started: [
    "Thank you!", // hunter
    "#{count} puppies remain. ", // hunter
    "I'm so lucky to have met you." // hunter
  ],
  solve: [
    "Thank you!  All three of you!", // hunter
    "Honestly, I didn't expect all five of them to make it back.", // hunter
    "How can I possibly repay you?", // hunter
    "Please don't worry about it!", // ann
    "Oh I don't know if you can use this, but please take my extra bow and arrows.", // hunter
    "Thank you. I know how important bows are to hunters.", // ann
    "That's right.", // hunter
    "We capture our prey with traps and poisoned arrows.", // hunter
    "It takes time, but it's the safest way to hunt.", // hunter
    "Hmmm.", // ann
    "By the way, the other day, there was a suspicious man who asked me to share the venom used for the poison.", // hunter
    "I refused because he was so suspicious looking...", // hunter
    "But you all be wary of any strange people you see." // hunter
  ],
  solved: [
    "You saved them all, thanks so much." // hunter
  ],
  dog: {
    notStarted: "What are you doing out here all alone, buddy?", // ann
    d1: "Hey, come over here little guy.", // ann
    d2: "Good boy.", // jaquelyn
    d3: "Hey puppy, over here.", // francisca
    d4: "Hey, come here buddy.", // ann
    d5: "Come on, the hunter must be worried.", // jaquelyn
    jaquelyn: "#{remain} dogs remain",
    francisca: "#{remain} dogs remain",
    foundAll: "That's all of them."
  }
}
export const mercenary = {
  start: [
    "Are you two ok!?", // ann
    "Yes, we're ok.", // leader
    "It looks like you're injured...", // jaquelyn
    "We came to subdue that monster, Rex Bear, but he overwhelmed us.", // leader
    "It really beat us up.  I'm sorry.", // leader
    "Is there a reward for subduing the bear?", // ann
    "Of course.", // leader
    "The king has offered a generous reward.", // leader
    "Everyone wants this threat removed.", // jaquelyn
    "He's not just a hassle to those who use the forest.", // leader
    "We believe the bear is related to the royal illness.", // leader
    "How could this bear possibly be involved in that?", // jaquelyn
    "It is said that an old hermit named Drystan lives in the depths of this forest, |And can create medicine to cure any illness.", // leader
    "In order to do so, he requires Rex Bear's blood, however.", // leader
    "I've never heard of using monster blood as an ingredient for medicine.", // francisca
    "Is this hermit truly a doctor?", // francisca
    "I don't know.", // leader
    "We're merely looking to earn the reward.", // leader
    `We've only been told "the royal family" but I think it must be King Edgar himself who is sick.`, // leader
    "It must be considering how large the reward is.", // leader
    "I see...", // ann
    "By the way,", // leader
    "If you see the other soldier from my unit, can you tell him where I am?", // leader
    "We got split up when the bear attacked and he must be lost.", // leader
    "I can't withdraw from the forest until I've found him.", // leader
    ["Sure.", "I'm really busy."],
    ["Thank you so much.", "I see."] // leader
  ],
  started: "I'm sure he hasn't gone far.", // leader
  flower: [
    "Isn't this an odd flower?  I've never seen one like it before.", // ann
    "Let's check it out.",
    "Leave it alone."
  ],
  battle: [
    "Whoa... It was a monster.", // ann
    "Look Ann, a person was inside of it!", // francisca
    "Ugh...", // member2
    "Whoa!", // ann
    "Are you ok?", // jaquelyn
    "You saved me...", // member2
    "You were eaten by the flower monster?", // jaquelyn
    "No, I jumped in on my own.", // member2
    "On your own?", // francisca
    "You must be Ann's relative.", // francisca
    "Hey!", // ann
    "Actually I fled from Rex Bear,", // member2
    "He chased me here.", // member2
    "In front of me was the flower, behind me was that giant bear.", // member2
    "I didn't intend to end up in the flower's stomach.", // member2
    "I see...", // ann
    "I instantly regretted my decision.", // member2
    "If I knew I would be dissolving slowly in the flower's stomach,", // member2
    "I would have just faced the bear and been killed.", // member2
    "Wow...", // ann
    "But thanks to you three, I'm saved!", // member2
    "What an awful situation.", // jaquelyn
    "By the way, if you're part of the mercenary unit,", // jaquelyn
    "Your leader is looking for you south of here.", // jaquelyn
    "Really?  Thank you for everything.", // member2
    "Please come by again later, I'd like to thank you.", // member2
    "You all need to be careful in this forest." // member2
  ],
  member1: [
    "I can't find him...",
    "He must be...",
    "Thank you so much for helping my friend.",
    "No way, he was really hiding in the stomach of a flower monster!"
  ],
  member2: [
    "Thanks again for saving me.",
    "Will you accept a gift from my leader?"
  ],
  leader: [
    "Oh, you're back!",
    "My soldier told me everything.",
    "He was swallowed by a flower monster.",
    "No wonder we couldn't find him.",
    "Thank you for saving him.  Thank you so much.",
    "We are withdrawing, Rex Bear was too strong."
  ]
}
export const drystan = {
  door: "I'm away.", // ann
  start: [
    "Are you Drystan?", // ann
    "Yes, what's it to you?", // drystan
    "I heard you can make medicine to cure any illness.", // ann
    "Even more of you.", // drystan
    "More?", // ann
    "First the royal family came.", // drystan
    "Then the merchants wanting to sell the cure to the royal family.", // drystan
    "So far, no one has brought back the ingredients I need!", // drystan
    "Can you tell me what you need?", // ann
    "I don't mind.", // drystan
    "I don't care who brings me what I need.", // drystan
    "First of all I need #{MANDRAKE_COUNT} mandrake roots.", // drystan
    "Yes, what else?", // ann
    "Bring it first, then I'll tell you.", // drystan
    "I'm a busy man." // drystan
  ],
  progress: [
    "#{MANDRAKE_COUNT} mandrake roots.", // drystan
    "Bring them quickly." // drystan
  ],
  solve: [
    "I have collected the mandrake roots.", // ann
    "That was fast.", // drystan
    "Hmmm.  Yes this will do." // drystan
  ]
}
export const bear = {
  start: [
    "What's the next ingredient?", // ann
    "Demon blood.", // drystan
    "Bring me the blood of that demon which has been hunting humans.", // drystan
    "Rex Bear has been stomping around the forest, making a ruckus.", // drystan
    "You mean Rex Bear's blood?", // ann
    "Yes.", // drystan
    "With the blood of a monster which has absorbed the vitality of many living beings, |I can create the cure.", // drystan
    "But the amount that you'll have on your sword won't be enough, |I require an entire bottle.", // drystan
    "We'll need to defeat Rex Bear.", // ann
    "Alright, I'll bring you that blood." // ann
  ],
  progress:
    "It's Rex Bear. Make sure you kill it and bring me a bottle of its blood.", // drystan
  bearArea: [
    "There are no monsters here?", // ann
    "Strange.  Let's proceed cautiously." // francisca
  ],
  bear: [
    "Ah!", // ann
    "Everyone, let's go!", // ann
    "We did it.", // francisca
    "Ok, I've gathered the blood.  Let's return to the hermit." // ann
  ],
  solve: [
    "I brought it.  Here is Rex Bear's blood.", // ann
    "Show me.", // drystan
    "Hmm. It looks like you've really defeated Rex Bear.", // drystan
    "Ok, here's the medicine.", // drystan
    "Well don't you need this blood to make it?", // ann
    "Disgusting, I don't want that.", // drystan
    "Have you ever mixed blood with medicine before?", // drystan
    "Then why did you want it!?", // ann
    "Because that stupid bear was annoying.", // drystan
    "I couldn't even wander around my own forest.", // drystan
    "What about the vitality stuff?  Was that a lie?", // ann
    "What if it was?", // drystan
    "The royal family is important, but so is my own well being.", // drystan
    "Anyways, I made the medicine.  Don't complain.", // drystan
    "I don't need any money.", // drystan
    "... Is that so?", // ann
    "Thank you for the medicine.", // ann
    "Drink it yourself, sell it to the royal family, do as you wish.", // drystan
    "As you know, the king is sick.  It will sell well.", // drystan
    "No, give it to the royal messenger when he returns.", // ann
    "...Hmmmmm.", // drystan
    "Okay.  I don't know what you're looking for, but I'll do as you say.", // drystan
    "By the way, do you have any guesses as to how the king suddenly became ill?", // ann
    "It's not such a rare occurence to be healthy one day and sick the next.", // drystan
    "I was brought to the castle to see the king.", // drystan
    "I'm wondering if he really is sick.", // drystan
    "What do you mean?", // ann
    "Surely you know that I can distingush between illness and poison.", // drystan
    "Poison?", // ann
    "The people attending him didn't seem to know.", // drystan
    "The king was poisoned?", // ann
    "I don't know.", // drystan
    "I don't want to get involved.", // drystan
    "That's why I choose to live out here after all.", // drystan
    "Anways I'll give the messenger the medicine, go home." // drystan
  ],
  end: [
    "Ok, we've completed our mission!", // ann
    "Yeah, you did a great job Ann.", // jaquelyn
    "Now let's go back.", // francisca
    "I want to check the history again." // francisca
  ]
}
