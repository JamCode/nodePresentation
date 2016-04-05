var should = require('should');

function addUser(json, callback){
    console.log('addUser');
    var body = {
        code: 0
    };
    callback(null, body);
}

function modifyUser(json, callback){
    console.log('modifyUser');
    var body = {
        code: 0
    };
    callback(null, body);
}

function deleteUser(json, callback){
    console.log('deleteUser');
    var body = {
        code: 0
    };
    callback(null, body);
}

describe('UserTest', function(){
    it('addUser', function(done){
        addUser(null, function(err, body){
            should.not.exist(err);
            body.code.should.be.equal(0);
            done();
        });
    });

    it('modifyUser', function(done){
        modifyUser(null, function(err, body){
            should.not.exist(err);
            body.code.should.be.equal(0);
            done();
        });
    });

    it('deleteUser', function(done){
        deleteUser(null, function(err, body){
            should.not.exist(err);
            body.code.should.be.equal(0);
            done();
        });
    });
});
