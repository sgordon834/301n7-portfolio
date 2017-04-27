'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// TODO: Include all of the static resources as an argument to app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
  // TODO: Using the response object, send the index.html file back to the user
});

app.listen(PORT, function () {
  console.log('server running on port: ' + PORT);
});
