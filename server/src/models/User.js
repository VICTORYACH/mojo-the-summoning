// Import Sequelize library
const Sequelize = require('sequelize');

// Define User model
const User = db.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
  // Export models
module.exports = {
    User
}