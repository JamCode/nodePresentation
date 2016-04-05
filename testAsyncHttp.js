var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
    var time = new Date();
    fs.writeFile('./test1.json', time+'\n'+JSON.stringify(req.headers), function(err, data){
        if(!err){
            fs.writeFile('./test1.json', time+'\n'+JSON.stringify(req.headers), function(err, data){
                fs.readFile('./test1.json', function(err, data){
                    if(!err){
                        res.end(data.toString());
                    }
                });
            });
        }
    });
}).listen(3000);
console.log('http server running at http://127.0.0.1:3000');


//ab -n 100 -c 10 127.0.0.1:3000/
//其中－n表示请求数，－c表示并发数


//10000 100 3599/sec
