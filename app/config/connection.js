const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.JAWSDB_URL,
      dialect: 'mysql',
      port: 3306
    }
  )
} else {
  sequelize = new Sequelize(
    process.env.LOCAL_NAME,
    process.env.LOCAL_USER,
    process.env.LOCAL_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  )
}

module.exports = sequelize;
