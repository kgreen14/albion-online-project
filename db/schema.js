const mongoose = require('mongoose');

const abilitySchema = mongoose.Schema({
  id: String,
  name: String,
//   created: String,
//   updated: String,
  description: String,
  image: String,
  cooldown: Number,
  casttime: Number,
  casttype: String,
  range: Number,
  energycost: Number,
  target: String

});

const itemSchema = mongoose.Schema({
  id: String,
  name: String,
  created: String,
  updated: String,
  description: String,
  image: String,
  abilities: [abilitySchema]
});

const buildSchema = mongoose.Schema({
  user: String,
  points: Number,
  title: String,
  image: String,
  created: Number,
  items: [itemSchema],
});


const Item = mongoose.model('Item', itemSchema);
const Ability = mongoose.model('Ability', abilitySchema);
const Build = mongoose.model('Build', buildSchema)

module.exports = {
  Item, Ability, Build
}