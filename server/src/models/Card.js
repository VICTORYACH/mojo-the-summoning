//Import Sequelize library
const Sequelize = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
// Define Card model
const Card = sequelize.define('Card', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  module.exports = {
    Card
}