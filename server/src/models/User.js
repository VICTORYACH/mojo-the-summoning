// Import Sequelize library
const {Sequelize,db } = require('../db/config.js');

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