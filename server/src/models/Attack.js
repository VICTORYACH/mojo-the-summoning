//Import Sequelize library
const Sequelize = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
// Define Attack model
const Attack = sequelize.define('Attack', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    damage: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  module.exports = {
    Attack
}