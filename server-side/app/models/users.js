const db = require("./database");
module.exports={
    createUser :(params,callback)=>{
        var insertQuery = "INSERT INTO users(userName,email,role,password,phone)VALUES(?,?,'customer',?,?)";
        db.query(insertQuery,params,function(err,result){
            callback(err,result);
        })
    },
    logIn:(params,callback)=>{
        
        var loginQuery = "SELECT * FROM users WHERE email = ?";
        db.query(loginQuery,params,function(err,result){
            callback(err,result);
        })
    },
    createAdmin :(params,callback)=>{
        var insertQuery = "INSERT INTO users(userName,email,role,password,phone)VALUES(?,?,'Admin',?,?)";
        db.query(insertQuery,params,function(err,result){
            callback(err,result);
        })
    }
}