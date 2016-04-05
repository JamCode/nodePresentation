//和http服务器绑定
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


//响应connection事件
io.on('connection', function(socket){
    console.log(socket.id+' connected');
    socket.emit('register', socket.id);

    //响应自定义的事件
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    //响应断开连接事件
    socket.on('disconnect', function(msg){
        console.log(socket.id+' disconnect with msg:'+msg);
    });
});

app.get('/', function(req, res){
    res.sendfile('index.html');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});



//独立服务
// var io = require('socket.io')();
// io.on('connection', function(socket){});
// io.listen(3000);
