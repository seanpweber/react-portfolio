var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  DB: "projects_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});