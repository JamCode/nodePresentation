var cpus = require('os').cpus().length;
var http = require('http');
var cluster = require('cluster');

if (cluster.isMaster) {
    console.log('fork '+cpus+' slaves');
    for (var i = 0; i < cpus; i++) {
        cluster.fork();
    }
    //监控子进程退出
    cluster.on('exit', function(worker, code, signal) {
        console.log(worker.process.pid+' exit');
        cluster.fork();
    });

    //子进程监听后发出的事件
    cluster.on('listening', function(worker, address) {
        console.log('A server worker with pid#' + worker.process
            .pid + ' is now listening to:' + address.port);
    });
} else {
    http.createServer(function(req, res){
        console.log(process.pid);
        console.log('hello node.js');
        res.end('hello node.js');
    }).listen(3000);
}
