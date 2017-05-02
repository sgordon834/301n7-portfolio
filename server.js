'use strict';

const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');

});

app.listen(PORT, function () {
  console.log('server running on port: ' + PORT);
});
