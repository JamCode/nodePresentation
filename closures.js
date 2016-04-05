
var redis = require("redis"),
client = redis.createClient();
client.on("error", function (err) {
    console.log("Error " + err);
});


for (var i = 0; i < 10; i++) {
    client.get('aaa', function(err, reply){
        console.log(i);
    });
}



// for (var i = 0; i < 10; i++) {
//     if (i === 5) {
//         (function(i){
//             client.get('aaa', function(err, reply){
//                 console.log(i);
//             });
//         })(i);
//     }
// }
