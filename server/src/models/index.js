const { User } = require('./User')
// import the rest of your models above
const { Deck } = require('./Deck')
const { Card } = require('./ard')
const { Attack } = require('./Attack')
//set up the associations here

// and then export them all below
//Export models
module.exports = {
  User,
  Deck,
  Card,
  Attack
};
