console.log('start');
var express = require('express')
var bodyparser = require('body-parser')
var screenshot = require('./controllers/screenshot');

var app = express();

app.get('/screenshot', function(req, res) {
screenshot.capture(req,res);
});
console.log('visit port 3000');
app.listen(3000);
