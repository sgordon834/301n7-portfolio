'use strict';

const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

const constring = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))

function proxyGitHub(req, res) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(req, res);
}



app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/index.html');

});


app.listen(PORT, function () {
  console.log('server running on port: ' + PORT);
});

// use strict';
//
// const pg = require('pg');
// const fs = require('fs');
// const express = require('express');
// const bodyParser = require('body-parser');
// const PORT = process.env.PORT || 3000;
// const app = express();
// // const conString = 'postgres://USERNAME:PASSWORD@HOST:PORT';
// const conString = 'postgres://tom:myPassword@localhost:5432/lab11'; // TODO: Don't forget to set your own conString
// const client = new pg.Client(conString);
// client.connect();
// client.on('error', err => console.error(err));
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('./public'));
