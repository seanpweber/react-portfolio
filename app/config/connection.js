const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  heroku_2d2fbea0d3311b2,
  hc1hnvycdvq51eh2,
  process.env.n08at22zr7wm9m61,
  {
    host: 'ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;