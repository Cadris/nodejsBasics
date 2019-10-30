var url = require('url');
var fs = require('fs');

function renderHTML(path,res) {
    fs.readFile(path, null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File Not Found');
        } else {
            res.write(data);
        }        
        res.end();
    });   
}

module.exports = {
    handleRequest: function (req,res) {
        console.log("A User Made a Request "+req.url);
        res.writeHead(200, {"Context-Type": "text/html"});

        var path = url.parse(req.url).pathname;
        
        switch (path) {
            case '/':
                renderHTML('./index.html',res)
                break;
            case '/login':
                renderHTML('./login.html',res);
                break;
            default:
                res.writeHead(404);
                res.write('Error 404 : Page Not found !!! ');
                res.write('          : By Sayan');
                res.end();
                break;
        }
    }
};