const jwt  = require('jsonwebtoken')
//middleware function to check if the user did the login 
function authUser(req,res,next){
    const token = req.header('token')
    if(!token) return res.status(401).send("Access Denied")
    try{
        const verified = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;
    }
    catch(err){
        res.redirect('/login');
        // res.status(400).send('invalid Token')
    }
    next()
}
//middleware function to check the role 
function authRole(role){
    return (req,res,next)=>{
        const userRole = req.header('role')
        if(userRole !== role){
            res.status(401)
            return res.send('Not allowed')
        }
        next()
    }
    

}


module.exports = {
    authUser,
    authRole
}
