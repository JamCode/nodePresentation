var express = require('express');
var app = express();
var user = require('./user');
var enty = require('./enty');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); //表单解析
app.use(bodyParser.json());//json数据解析
// view engine setup
app.set('views', './views'); //模板放置目录
app.set('view engine', 'ejs'); //使用的模板引擎

//挂载头部
app.use(function(req, res, next) {
    console.log(JSON.stringify(req.body));
	next();
});

app.use('/user', user); //挂载路由规则
app.use('/enty', enty); //挂载路由规则
app.use(express.static('static')); //静态文件


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at %s', port);
});
