var express = require('express');
var router = express.Router();

// 定义网站主页的路由
router.get('/list', function(req, res) {
    res.send('get enty list');
});

// 定义 about 页面的路由
router.get('/about', function(req, res) {
    res.send('get enty about');
});

module.exports = router;
