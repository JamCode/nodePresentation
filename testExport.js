var test5 = {};

test5.a = function(){
    console.log('call function a');
}

test5.b = function(){
    console.log('call function b');
}
//导出一个对象
module.exports = test5;
