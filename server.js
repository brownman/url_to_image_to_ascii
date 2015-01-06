var express = require('express')
//var jade = require('jade');
var bodyparser = require('body-parser')

var app = express()
app.set('view engine', 'jade')
app.set('views', './views/templates' )
app.get('/', function(req, res) {
//var date1=new Date().toDateString()
//console.log(date1);

res.render('index', {date: new Date().toDateString()});
res.send();

});

app.post('/form', function(req, res){
app.use(bodyparser.urlencoded({extended: false}))
req.body.str.split('').reverse().join('')
});


//app.listen(process.argv[2])
//
app.listen(3000);
