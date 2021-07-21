console.log("server started");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./app/routes/api/project.routes');
const sequelize = require('./app/config/connection');

const app = express();
var PORT = process.env.PORT || 4000;
// const serv = require('http').Server(app);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/projects', routes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to zzzleepy's server." });
  });

app.get('/',(req, res) {//listens for when the client opens the site.
    res.sendFile(__dirname + '/client/public/index.html');
});

app.use('/client',express.static(__dirname + '/client'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// serv.listen(PORT, function() {
//     console.log('Server is running on http://localhost:' + PORT);
// });