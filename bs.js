var http = require('http');
var app = require('./app');

var host = '192.168.1.100' ;
var port = 3000;

http.createServer(app.handleRequest).listen(port,host);

console.log("Server is Running on "+host+" : "+port);
