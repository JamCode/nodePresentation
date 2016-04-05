//单个连接
var oracledb = require('oracledb');

oracledb.getConnection({
    user          : "hr",
    password      : "welcome",
    connectString : "localhost/XE"
    },
    function(err, connection){
      if (err) { console.error(err.message); return; }
      connection.execute(
          "SELECT department_id, department_name " +
          "FROM departments " +
          "WHERE manager_id < :id",
          [110],  // bind value for :id
          function(err, result){
              if (err) { console.error(err.message); return; }
              console.log(result.rows);
          }
      );
  });

//连接池
var oracledb = require('oracledb');

var pool = oracledb.createPool ({
    user          : "hr"
    password      : "welcome"
    connectString : "localhost/XE"
});


pool.getConnection (function(err, connection){
    if(err){
        throw err;
    }else{
        connection.execute('select *from baseinfo', function(err, result){
            if(!err){
                console.log(result);
            }
            connection.release();
        });
    }
});
