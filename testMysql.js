//单次连接
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:process.env.dbhost,
    user:process.env.dbuser,
    password:process.env.dbpassword,
    database:process.env.database
});

connection.connect(function(err) {
    if(!err){
        connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
            if (err) throw err;
            console.log('The solution is: ', rows[0].solution);
            connection.end();
        });
    }else{
        throw err;
    }
});

//连接池
var mysql = require('mysql');
var pool  = mysql.createPool({
    host:process.env.dbhost,
    user:process.env.dbuser,
    password:process.env.dbpassword,
    database:process.env.database
});

pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query( 'SELECT something FROM sometable', function(err, rows) {
        // And done with the connection.
        connection.release();
        // Don't use the connection here, it has been returned to the pool.
    });
});


//获取大量数据fetch
var query = connection.query('SELECT * FROM posts');
query.on('error', function(err) {
    // Handle error, an 'end' event will be emitted after this as well
    })
    .on('fields', function(fields) {
        // the field packets for the rows to follow
    })
    .on('result', function(row) {
        // Pausing the connnection is useful if your processing involves I/O
        connection.pause();
        processRow(row, function() {
            connection.resume();
        });
    })
    .on('end', function() {
        // all rows have been received
});
