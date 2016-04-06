require('shelljs/global');
var fs = require('fs');
var path = require('path');

if (process.argv.length !== 3) {
    console.log(process.argv);
    console.log('parameter should include version number');
    return;
}

exec('git flow release finish ' + process.argv[2], {}, function(code){
    // dev流更新到远程仓库
    if(code!==0){
        console.log(code);
        return;
    }
    exec('git push origin dev');
    //master流更新到远程仓库
    exec('git push origin master');
    //发布版本号git
    exec('git push --tags');
});
