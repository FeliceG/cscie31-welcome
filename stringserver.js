var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.write("Hello Larry and TA Team,
               This is the first assignment in cscie31.
               Looking forward to the class!");
    res.end();
});
server.listen(8080);
console.log("Listening on http://127.0.0.1:8080/");
