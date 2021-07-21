const Sequelize = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize(
//   "shnoy8tymsftn959",
//   "hc1hnvycdvq51eh2",
//   "n08at22zr7wm9m61",
//   {
//     host: 'ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    // process.env.SECRET,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
