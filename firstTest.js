//异步程序
var fs = require('fs');

fs.readFile('./test1.json', function(err, data){
    if(!err){
        console.log(data.toString());
        console.log('finish read data');
    }
});

console.log('finish outside');
