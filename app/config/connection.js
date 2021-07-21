const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  "shnoy8tymsftn959",
  "hc1hnvycdvq51eh2",
  "n08at22zr7wm9m61",
  {
    host: 'ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;