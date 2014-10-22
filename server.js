var express = require('express'),
    user = require('./src/user'),
    business = require('./src/company');


var app = express(),
    port = process.env.PORT || 3000;


// Global
app.get('/', function(req, res) {
    res.sendfile('index.html');
});


// User
app.get('/subscribe', function(req, res) {
    res.send(user.subscribe(req));
});


// Company
app.get('/register', function(req, res) {
    res.send(company.register(req));
});


app.listen(port, function() {
    console.log('Listening on port:', port);
});
