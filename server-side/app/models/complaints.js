const db = require("./database");
module.exports = {
    getUserComplaints:(params,callback)=>{
        const getQuery = "SELECT * FROM complaints where user_ID = ?";
        
        db.query(getQuery,params,(err,result)=>{
            callback(err,result)
        })
    },
    getAllComplaints:(callback)=>{
        const getQuery = "select * FROM complaints where status != 'Resolved' and status != 'Dismissed'";
        
        db.query(getQuery,(err,result)=>{
            callback(err,result)
        })
    },
    
    createComplaint:(params,callback)=>{
        const insertQuery = "INSERT INTO complaints (title,description,date,type,status,user_ID)VALUES(?,?,?,?,'pending resolution',?)";
        db.query(insertQuery,params,(err,result)=>{
            callback(err,result)
        })
    },
    updateComplaint:(params,callback)=>{
        const updateQuery = "UPDATE complaints SET status=? WHERE complaintId = ? ";
        db.query(updateQuery,params,function(err,result){
            callback(err,result)
        })
    }
}