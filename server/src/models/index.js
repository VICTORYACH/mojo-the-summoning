// import the rest of your models above
const User = require("./models/User");
const Deck = require("./models/Deck");
const Card = require("./models/Card");
const Attack = require("./models/Attack")
//set up the associations here
User.hasMany(Deck);
Deck.belongsTo(User);

Deck.hasMany(Card);
Card.belongsTo(Deck);

Card.hasMany(Attack);
Attack.belongsTo(Card)
// and then export them all below
//Export models
module.exports = {
  User,
  Deck,
  Card,
  Attack
};
