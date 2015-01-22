var screenshot = require('url-to-screenshot');
var ascii = require('image-to-ascii');

var fs = require('fs');


exports.capture = function(req, res) {
  screenshot(req.query.url)
  .width(1024)
  .height(768)
  .clip()
  .capture(function(err, img) {
    if (err) throw err;
    res.end(img, 'binary');

   	fs.writeFileSync('/tmp/screenshot.png', img);


//,colored:true,size:{height:50,width:50}
	ascii({path: '/tmp/screenshot.png' }, function(err, converted) {
	    console.log(err || converted);
	});

  });

}
