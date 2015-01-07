var express = require('express')
//var jade = require('jade');
var bodyparser = require('body-parser')

var screenshot = require('./controllers/screenshot');


//var ImageToAscii = require("image-to-ascii");
// image-resize.js
/*
 *
var resize = require('./controllers/image-resize').
* var path = require('path'),
exec = require('child_process').exec,
mkdirp = require('mkdirp');
*/

//ImageToAscii(__dirname + "/octocat.png", function(err, converted) {
//    console.log(err || converted);
//});


var app = express();




app.set('view engine', 'jade')
//app.set('views', './views/templates' )

//app.set("view engine", {layout: false});
//app.set('views', './views' )
app.use(express.static(__dirname + '/views'));
//app.use(require('./image-resize').static(path.join(__dirname, 'public')));




//app.get('/screenshot', screenshot.capture);
app.get('/', function(req, res){
      var message = process.env.POWERED_BY;
        if (typeof(message) == "undefined") {
                message = "Deis"
      }

//res = screenshot.capture(req);
          res.send('Powered by ' + message + "\n");
});

app.get('/not', function(req, res) {
//var date1=new Date().toDateString()
//console.log(date1);
res.render('test');
res.send();

});

app.get('/jade', function(req, res) {
//var date1=new Date().toDateString()
//console.log(date1);


res.render('index', {date: new Date().toDateString()});
res.send();

});
app.get('/screenshot', function(req, res) {


//var date1=new Date().toDateString()
//console.log(date1);
//
screenshot.capture(req,res);
//res.render('index', {date: new Date().toDateString()});
//res.send();
//

//ImageToAscii(__dirname + "/octocat.png", function(err, converted) {
//    console.log(err || converted);
//});



});



app.post('/form', function(req, res){
app.use(bodyparser.urlencoded({extended: false}))
req.body.str.split('').reverse().join('')
});


//app.listen(process.argv[2])
//
app.listen(3000);
