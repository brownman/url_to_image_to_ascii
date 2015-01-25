var express = require('express')
var bodyparser = require('body-parser')
var screenshot = require('./controllers/screenshot');

var app = express();

app.get('/screenshot', function(req, res) {
screenshot.capture(req,res);
});

app.listen(3000);
