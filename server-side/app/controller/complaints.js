const complaintModel = require('../models/complaints');
module.exports = {
    getAllComplaints :(req,res)=>{
        // get all complaints for all user to admin to resolve them
        complaintModel.getAllComplaints(function(err,result){

            if(err) console.log(err)
            res.json(result);
        })
    },
    //get one user complaints
    getUserComplaints :(req,res)=>{
        //req.params : thats mean we get value  from url 
        const params =[req.params.id];
        // get all user complaints 
        complaintModel.getUserComplaints(params,function(err,result){
            if(err) console.log(err)
            res.json(result);
        })
    },
    //create new complaint
    createComplaint :(req,res)=>{
        //params here get data from body (form)
        const params =[req.body.title,req.body.description,req.body.date,req.body.type,req.params.id,req.body.country];
        complaintModel.createComplaint(params,function(err,result){
            if(err) console.log(err)
            res.send(result)
        })
    },
    //update the complaint status
    updateComplaint:(req,res)=>{
        const params =[req.params.status,req.params.id];
        complaintModel.updateComplaint(params,function(err,result){
            if(err) console.log(err)
            res.send("status updated")
        })}
}