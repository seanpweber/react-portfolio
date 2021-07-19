console.log("server started");

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const sequelize = require('./app/config/connection.js');
const app = express();
// const serv = require('http').Server(app);
var PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to zzzleepy's website." });
  });

app.get('/',function(req, res) {//listens for when the client opens the site.
    res.sendFile(__dirname + '/client/public/index.html');
});

app.use('/client',express.static(__dirname + '/client'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// serv.listen(PORT, function() {
//     console.log('Server is running on http://localhost:' + PORT);
// });