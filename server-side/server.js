const express    = require("express");
const cors       = require('cors');
const connection = require("./app/models/database")
require("dotenv").config();
// To support URL-encoded bodies
const cookieParser = require('cookie-parser');
const users   = require("./app/routes/users");
const complaint   = require("./app/routes/complaint");


// const admin      = require("./app/routes/admin")
const app = express();
//define Cross-origin resource sharing
app.use(cors());

// To parse cookies from the HTTP Request
app.use(cookieParser());





// allow app to accept json
app.use(express.json())

//define customer route(middleware)  
app.use("/users" , users);

// define complaint route(middleware)  
app.use("/complaint" , complaint);



// set the port
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send({message:"we did it!"});
})
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})
