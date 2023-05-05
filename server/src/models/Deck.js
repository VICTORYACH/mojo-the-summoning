//Import Sequelize library
const Sequelize = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
const Deck = sequelize.define('Deck', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  module.exports = {
    Deck
}