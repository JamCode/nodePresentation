var http = require('http');
http.createServer(function(req, res){
    //console.log(req.headers);
    res.end('hello node.js');
}).listen(3000);
console.log('http server running at http://127.0.0.1:3000');


//下面这种写法
// var http = require('http');
// var server = http.createServer();
// server.on('request', function(req, res){
//     res.end('hello node.js');
// });
// server.listen(3000);
// console.log('http server running at http://127.0.0.1:3000');
