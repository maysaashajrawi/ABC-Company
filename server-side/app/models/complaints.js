const db = require("./database");
module.exports = {
    getUserComplaints:(params,callback)=>{
        const getQuery = "SELECT * FROM complaints where user_ID = ?";
        
        db.query(getQuery,params,(err,result)=>{
            callback(err,result)
        })
    },
    getAllComplaints:(callback)=>{
        const getQuery = "select complaints.complaintId,complaints.type,complaints.description,complaints.title, complaints.status,complaints.country,users.userName FROM complaints  inner join users  on complaints.user_ID = users.userId  where status != 'Resolved' and status != 'Dismissed'";
        
        db.query(getQuery,(err,result)=>{
            callback(err,result)
        })
    },
    
    createComplaint:(params,callback)=>{
        const insertQuery = "INSERT INTO complaints (title,description,date,type,status,user_ID,country)VALUES(?,?,?,?,'pending resolution',?,?)";
        db.query(insertQuery,params,(err,result)=>{
            callback(err,result)
        })
    },
    updateComplaint:(params,callback)=>{
        console.log("helloooooooooo")
        const updateQuery = "UPDATE complaints SET status=? WHERE complaintId = ? ";
        db.query(updateQuery,params,function(err,result){
            callback(err,result)
        })
    }
}