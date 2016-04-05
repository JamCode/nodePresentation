
//验证四个条件满足
function validation(data){
    validationA(data, function(err, data){
        if(err){
            return err;
        }else{
            validationB(data, function(err, data){
                if(err){
                    return err;
                }else{
                    validationC(data, function(err, data){
                        if(err){
                            return err;
                        }else{
                            validationD(data, function(err, data){
                                if(err){
                                    return err;
                                }else{
                                    return true;
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
