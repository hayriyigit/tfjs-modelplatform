var fs = require('fs');
var path = require('path');
var staticBasePath = './static';

var staticServe = async function (req, res) {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  var resolvedBase = path.resolve(staticBasePath);
  var safeSuffix = path.normalize(req.url).replace(/\/files\//, '');
  var fileLoc = path.join(resolvedBase, safeSuffix);

  fs.readFile(fileLoc, function (err, data) {
    if (err) {
      res.writeHead(404, 'Not Found');
      res.write('404: File Not Found!');
      return res.end();
    }

    res.statusCode = 200;

    res.write(data);
    return res.end();
  });
};

module.exports = staticServe;
