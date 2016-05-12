// an example using an object instead of an array
var async = require('async');

async.series({
    one: function(callback){
        //update
        callback(err, null);
        callback(null, data);

    },
    two: function(callback){
        setTimeout(function(){
            callback(null, 2);
        }, 100);
    }
    three: function(callback){
        
    }
},
function(err, results) {
    // results is now equal to: {one: 1, two: 2}
    if(err){
        res.send(errmsg);
    }else {
        res.send(results);
    }
});


// an example using an object instead of an array
async.parallel({
    one: function(callback){
        setTimeout(function(){
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function(){
            callback(null, 2);
        }, 100);
    }
},
function(err, results) {
    // results is now equals to: {one: 1, two: 2}
});


async.each(convertImages, function(file, callback) {
    //do some thing;
    //
    callback();
}, function(err){
    // if any of the file processing produced an error, err would equal that error
    if( err ) {
      // One of the iterations produced an error.
      // All processing will now stop.
      console.log('A file failed to process');
    } else {
      console.log('All files have been processed successfully');
    }
});


async.eachSeries(hugeArray, function iteratee(item, callback) {
    //do some thing series
    callback(null);
}, function done(err) {
    //...
});
