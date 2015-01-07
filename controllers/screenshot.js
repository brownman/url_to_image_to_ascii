var screenshot = require('url-to-screenshot');

exports.capture = function(req, res) {
  screenshot(req.query.url)
  .width(1024)
  .height(768)
  .clip()
  .capture(function(err, img) {
    if (err) throw err;
    res.end(img, 'binary');
  });

}
