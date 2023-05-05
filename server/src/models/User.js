//Import Sequelize library
const Sequelize = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
// create your User model here
const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  // Export models
module.exports = {
    User
}