console.log("server started");

var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var serv = require('http').Server(app);
var port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to zzzleepy's website." });
  });

app.get('/',function(req, res) {//listens for when the client opens the site.
    res.sendFile(__dirname + '/client/public/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
require("./app/routes/project.routes.js")(app);//listens for when the client wants files.
serv.listen(port, function() {
    console.log('Site is running on http://localhost:' + port);
});