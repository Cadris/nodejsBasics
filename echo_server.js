var net = require('net');
var port = 3000;

var server = net.createServer(function(socket){
    socket.on('data',function(data){
        socket.write('Server Reply :: '+data);
    });
});

server.listen(port);
console.log('listening on port :: '+port);  