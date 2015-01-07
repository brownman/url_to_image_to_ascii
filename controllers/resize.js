// image-resize.js
var path = require('path'),
exec = require('child_process').exec,
mkdirp = require('mkdirp');

module.exports = ir = {};

// express.js middleware
ir.static = function(rootPath) {

  var root = path.normalize(rootPath),
    cache_path = path.join(root, '.cache');

  return function (req, res, next){

    var file = req.url.replace(/\?.*/,''),
      size = req.query.size,
      orig = path.normalize(root + file),
      dst = path.join(cache_path, type, size, file);

    function send_if_exists(file, callback) {
      fs.exists(file, function(exists){

        if (!exists) return callback();

        return fs.stat(file, function(err, stats){
          if (err){
            console.error(err);
          }
          else if (stats.isFile()){
            return res.sendfile(file);
          }
          return callback();
        });
      });
    }

    if (!size){
      return send_if_exists(orig, next);
    }

    send_if_exists(dst, function() {

      mkdirp(path.dirname(dst));

      exec('convert ' + orig + ' -resize '+ size +' ' + dst , function(err) {
        if(err) {
          console.error(err);
          res.send(err);
        } else {
          res.sendfile(dst);
        }
      });

    });

  };
};
