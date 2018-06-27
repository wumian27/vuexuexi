let http = require('http');

http.createServer(function(req, res) {
    if (req.url == '/index') {
        res.end('show()');
    }

}).listen(6060, function() {
    console.log('http://localhost:6060');
});