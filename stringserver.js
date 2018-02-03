var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<strong>Hello Larry and TA Team,</strong><br><br>');
    res.write('<i>This is the first assignment in cscie31.</i><br><br>');
    res.write('<i>Looking forward to the class!</i><br><br>');
    res.write('<strong>Felice (Gardner) Napolitano</strong>');
    res.end();
});
server.listen(8080);
console.log("Listening on http://127.0.0.1:8080/");
