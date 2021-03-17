require("dotenv").config();
const userModel = require("../models/users");
const bcrypt    = require('bcrypt');
const jwt       = require('jsonwebtoken')
module.exports={
    //sign up
    createUser:async(req,res)=>{
        try{
            //generate salt to change the hash passowrd every time 
            const salt = await bcrypt.genSalt();
            //hash password and merge it with salt 
            const hashedPassword = await bcrypt.hash(req.body.password,salt);

            let params =[req.body.userName,req.body.email,req.body.role,hashedPassword,req.body.phone];
            userModel.createUser(params,function(err,results){
                if(err) console.log("you are have an error in users controller", err);
                res.send(results)
            })
        }
        catch{
            res.status(500).send();
        }
    },
    // for login
    logIn:async(req,res)=>{
        //values came from body (form)
        
        var params = [req.body.email,req.body.password];
        var email = req.body.email;
        userModel.logIn(params , async function(err,result){
            //check if found the user on db    
            if(result.length>0){
                    //id from database
                    let dbUserId = result[0].userId;
                    // password from database
                    let dbPassword = result[0].password;
                    // take role from db 
                    let role = result[0].role;
                    // compare password came from client side or from user with password from db
                    let validPassowrd = await bcrypt.compare(req.body.password,dbPassword);
                    
                    //check if password not valid return an error
                    if(!validPassowrd) return res.status(400).send('Your password not correct');
                    

                    // if password valid have to generate token 
                    const user = { email : email};
                    const token =jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
                    res.header("token", token).send({"token": token , "role":role ,"userId" : dbUserId});
                    // res.header("role", role).send({"role": role});

                    // res.json({token:token,userName : userName, role : role});
                    
                    
                }else{
                    return res.status(400).send('Cannot find user');
                }
        })

    },
    

}