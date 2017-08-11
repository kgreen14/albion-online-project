require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);


var Item = require('../models/item');
var Ability = require('../models/ability');

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


const claws = new Item({
  id: 'claws',
  name: 'Claws',
//   created: String,
//   updated: String,
  description: "Dual wield pair of fist weapons in the dagger tree that provide excellent mobility and damage.",
  image: 'https://gameinfo.albiononline.com/api/gameinfo/items/T4_2H_CLAWPAIR',
  abilities: [disembowel, sunderArmor, dash]
})


claws.save().then(() => console.log("Item Saved!"));


mongoose.connection.close();