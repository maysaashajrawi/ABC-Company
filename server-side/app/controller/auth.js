
function verifyToken(req,res,next){
    const bearerHeader = req.headers['token'];
    if(typeof(bearerHeader) !== 'undefined'){
        const bearer = bearerHeader.split('');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
    // Get auth token from the cookies
    // const authToken = req.cookies['AuthToken'];

    // if(!authToken){
    //     res.status(403);
    //     res.redirect('/logIn');
    // }
    // next();   
}



    
function authRole(role){
    return (req,res,next)=>{
        if(req.user.role !== role){
            res.status(401);
            return res.send('Not allowed')

        }else{
            console.log("you can go!!!!!!")
        }
    }
}
module.exports={verifyToken,authRole}