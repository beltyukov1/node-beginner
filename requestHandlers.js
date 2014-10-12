var querystring = require("querystring"),
    fs = require("fs");

function start(res, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>' +
    '<head>' +
    '<meta http=equiv="Content-Type" content="text/html"; ' +
    'charset=UTF-8 />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input type="file" name="upload" />' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(body);
}

function upload(res, postData) {
  console.log("Request handler 'upload' was called.");
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("You've sent: " + querystring.parse(postData).text);
}

function show(res) {
  console.log("Request handler 'show' was called.");
  res.writeHead(200, {"Content-Type": "image/png"});
  fs.createReadStream("/tmp/test.png").pipe(res);
}

exports.start = start;
exports.upload = upload;
