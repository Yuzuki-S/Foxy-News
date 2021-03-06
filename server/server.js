var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');

var server = express();

server.use(cors('*'));

server.use(express.json());
server.use(passport.initialize());
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '../public')));

server.use('/api/auth', require('./routes/auth'));
server.use('/api/meetings', require('./routes/meetings'));
server.use('/api/users', require('./routes/users'));
server.use('/foximage', require('./routes/foximage'));

server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = server;
