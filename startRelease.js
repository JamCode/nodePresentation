require('shelljs/global');
var fs = require('fs');
var path = require('path');

if (process.argv.length !== 3) {
    console.log(process.argv);
    console.log('parameter should include version number');
    return;
}

if(exec('git flow release start '+process.argv[2])!==0){
    console.log('create release branch '+ process.argv[2]+' failed');
    return;
}

if(exec('checkout release/'+process.argv[2])!==0){
    return;
}

var fileData = JSON.parse(fs.readFileSync('../package.json', 'utf8'));
console.log(fileData.version);
fileData.version = process.argv[2];
if(!fs.writeFileSync('../package.json', JSON.stringify(fileData)){
    console.log('release branch '+ process.argv[2]+' version update failed');
    return;
}
