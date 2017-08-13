require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);


var Item = require('../models/item');
var Ability = require('../models/ability');
var Build = require('../models/build')

// Use native promises
mongoose.Promise = global.Promise;


Item.remove({}, (err) => console.log(err));
Ability.remove({}, (err) => console.log(err));

const disembowel = new Ability({
  id: 'disembowel',
  name: 'Disembowel',
//   created: Date,
//   updated: Date,
  description: "While channeling you root the enemy, cancel enemy spell casting, and repeatedly deal -31.26 damage, for up to 10 hits. After the first hit, the enemy receives an additional -44.00 bleed damage per second for 3 seconds. Any shield abilities on the target are broken.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/DISEMBOWEL',
  cooldown: 30,
  casttime: 3,
  casttype: 'channeled',
  range: 0,
  energycost: 15,
  target: 'enemy'
});
const sunderArmor = new Ability({
  id: 'sunder_armor',
  name: 'Sunder Armor',
//   created: Date,
//   updated: Date,
  description: "An attack dealing -66.69 physical damage, and reducing the target's Armor and Magic Resist by -0.05 for 8 (Stacks up to 3 times.)",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/SUNDERARMOR2',
  cooldown: 3,
  casttime: 0,
  casttype: 'instant',
  range: 0,
  energycost: 5,
  target: 'enemy'
});
const dash = new Ability({
  id: 'dash',
  name: 'Dash',
//   created: Date,
//   updated: Date,
  description: "Dashes towards the targeted area.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/GROUNDDASH',
  cooldown: 10,
  casttime: 0,
  casttype: 'instant',
  range: 11,
  energycost: 8,
  target: 'area'
});

const mendWounds = new Ability({
  id: 'mendWounds',
  name: 'Mend Wounds',
//   created: Date,
//   updated: Date,
  description: "As long as you are not in combat, you can use this spell to mend wounds. Regenerates 4% Health and Energy per second for 12s.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/OUTOFCOMBATHEAL',
  cooldown: 30,
  casttime: 0,
  casttype: 'channeled',
  range: 0,
  energycost: 0,
  target: 'self'
});

const infernoShield = new Ability({
  id: 'infernoShield',
  name: 'Inferno Shield',
//   created: Date,
//   updated: Date,
  description: "Covers the caster with a flaming shield, increasing resistances by 0.3, and reflecting 50% of incoming damage (before Armor/Magic Resist) back to the attacker, for 8 seconds.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/FLAMESHIELD',
  cooldown: 60,
  casttime: 0,
  casttype: 'instant',
  range: 0,
  energycost: 0,
  target: 'self'
});

const ambush = new Ability({
  id: 'ambush',
  name: 'Ambush',
//   created: Date,
//   updated: Date,
  description: "Turn invisible for 8 Your first attack out of invisibility will have increased damage; the longer you stay invisible, the higher the damage buff (maximum 50%). Attacking or casting breaks the invisibility. You will also become visible if you move too far away from the activation spot.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/AMBUSH',
  cooldown: 40,
  casttime: 0,
  casttype: 'instant',
  range: 0,
  energycost: 0,
  target: 'self'
});

const energyRegain = new Ability({
  id: 'energyRegain',
  name: 'Energy-Regain',
//   created: Date,
//   updated: Date,
  description: "A channeled spell that replenishes Energy greatly.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/ENERGYBURST_CHANNEL',
  cooldown: 60,
  casttime: 0,
  casttype: 'instant',
  range: 0,
  energycost: 0,
  target: 'self'
});

const forceField = new Ability({
  id: 'forceField',
  name: 'Force-Field',
//   created: Date,
//   updated: Date,
  description: "Knocks back all enemies around you 11.67, dealing -67.42 damage to them.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/PBAOE_KNOCKBACK',
  cooldown: 30,
  casttime: 0,
  casttype: 'instant',
  range: 0,
  energycost: 0,
  target: 'area'
});

const poisonCowl = new Ability({
  id: 'poisonCowl',
  name: 'Poison-Cowl',
//   created: Date,
//   updated: Date,
  description: "Coats your weapon with poison. Your next auto attack will poison the enemy, damaging him for -39.93 per second for 5 seconds.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/WEAPON_DOT',
  cooldown: 30,
  casttime: 0,
  casttype: 'instant',
  range: 0,
  energycost: 0,
  target: 'weapon'
});

const refreshingSprint = new Ability({
  id: 'refreshingSprint',
  name: 'Refreshing-Sprint',
//   created: Date,
//   updated: Date,
  description: "Increases your move speed by 0.49 for 3, and reduces your cooldowns slightly.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/SPRINT_CD_REDUCTION',
  cooldown: 30,
  casttime: 0,
  casttype: 'instant',
  range: 0,
  energycost: 0,
  target: 'self'
});

const rush = new Ability({
  id: 'rush',
  name: 'Rush',
//   created: Date,
//   updated: Date,
  description: "Increases your move speed by 1.2, and the duration of your crowd control abilities by 0.35, for 3 seconds.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/OVERSPRINT',
  cooldown: 30,
  casttime: 0,
  casttype: 'instant',
  range: 0,
  energycost: 0,
  target: 'self'
});

const run = new Ability({
  id: 'run',
  name: 'Run',
//   created: Date,
//   updated: Date,
  description: "Increases your move speed by 0.6 for 7 Good for travelling and gathering.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/spells/RUN',
  cooldown: 30,
  casttime: 0,
  casttype: 'instant',
  range: 0,
  energycost: 0,
  target: 'self'
});

const claws = new Item({
  id: 'claws',
  name: 'Claws',
//   created: String,
//   updated: String,
  description: "Dual wield pair of fist weapons in the dagger tree that provide excellent mobility and damage.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/items/T4_2H_CLAWPAIR',
  abilities: [disembowel, sunderArmor, dash]
})

const mageCowl = new Item({
  id: 'mageCowl',
  name: 'Mage-Cowl',
//   created: String,
//   updated: String,
  description: "Cloth head piece that provides a poison, knock back, and energy regeneration abilities.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/items/T4_HEAD_CLOTH_SET3',
  abilities: [energyRegain, forceField, poisonCowl]
})

const assassinJacket = new Item({
  id: 'assassinJacket',
  name: 'Assassin-Jacket',
//   created: String,
//   updated: String,
  description: "Leather armor that provides beneficial abilities for melee/bow users.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/items/T4_ARMOR_LEATHER_SET3',
  abilities: [mendWounds, infernoShield, ambush]
})

const hunterShoes = new Item({
  id: 'hunterShoes',
  name: 'Hunter-Shoes',
//   created: String,
//   updated: String,
  description: "Leather shoes that provide a variety of sprint abilities to reduce cool downs or increase crowd control duration.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/items/T4_SHOES_LEATHER_SET2',
  abilities: [refreshingSprint, rush, run]
})

const assassin = new Build({
  user: "KingKris",
  points: 10,
  title: "Dash Assassin PK",
//   image: String,
  created: 081117,
  items: [claws, mageCowl, assassinJacket, hunterShoes],
  description: "New patch gotcha down? Yea we all think the 3 second delay added to auto attacking on dismount is a bit ridiculous, but its time to adapt and overcome! My idea for this build comes from firsthand experience ganking on 3 different builds. I have 3 characters: a double bladed, a claymore, and a warbow character. What makes each of these builds successful in chasing someone down regardless of whether they're target is on mount or foot is their mobility and ability to slow/root. The warbow is reliant on another person to help dismount, while the other two builds can solo pk someone on a mount. Enter the Dash Assassin! High mobility and the ability to root."
})
claws.save().then(() => console.log("Claws Saved!"));
mageCowl.save().then(() => console.log("Mage-Cowl Saved!"));
assassinJacket.save().then(() => console.log("Assassin-Jacket Saved!"));
hunterShoes.save().then(() => console.log("Hunter-Shows Saved!"));
assassin.save().then(() => console.log("Build Saved!"));


mongoose.connection.close();