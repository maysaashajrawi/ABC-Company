const mysql = require("mysql");
// require db configurations to do the connection with db
const dbconfig = require("../db-config/db.config");

// connect with database 
const connection = mysql.createPool({
    host     : dbconfig.HOST,
    user     : dbconfig.USER,
    password : dbconfig.PASSWORD,
    database : dbconfig.DB
});
connection.query("select 1+1",(err,row)=>{
    if(err) throw err;
    console.log("connected! :)");
})
module.exports = connection;

