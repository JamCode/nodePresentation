var redis = require("redis"),
client = redis.createClient();
client.on("error", function (err) {
    console.log("Error " + err);
});

client.get("missingkey", function(err, reply) {
    // reply is null when the key is missing
    if(err){
        console.log(err);
    }else{
        console.log(reply);
    }
});

client.set("missingkey", 'data', function(err, reply) {
    // reply is null when the key is missing
    if(err){
        console.log(err);
    }else{
        console.log(reply);
    }
});


//发布订阅
var pub = redis.createClient();

//对发布消息的响应
client.on('message', function(channel, message){
    console.log("sub channel " + channel + ": " + message);
});

//对自身订阅后的响应
client.on("subscribe", function (channel, count) {
    console.log("sub channel " + channel + ": " + count);
    pub.publish("first", "I am sending a message."); //向频道first发布信息
});


client.subscribe("first");
