var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
    var time = new Date();
    fs.writeFileSync('./test1.json', JSON.stringify(req.headers) + '\n');
    fs.writeFileSync('./test1.json', JSON.stringify(req.headers) + '\n');
    var data = fs.readFileSync('./test1.json');
    res.end(data.toString());
    //console.log('out side finish');
}).listen(3000);
console.log('http server running at http://127.0.0.1:3000');


//ab -n 100 -c 10 127.0.0.1:3000/
//其中－n表示请求数，－c表示并发数
