var express = require('express'),
    users = require('./src/users');

var app = express(),
    port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.listen(port, function() {
    console.log('Listening on port:', port);
});
