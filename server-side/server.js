const express    = require("express");
const cors       = require('cors');

const connection = require("./app/models/database")
require("dotenv").config();

const users   = require("./app/routes/users");
const complaint   = require("./app/routes/complaint");


const app = express();
//define Cross-origin resource sharing
app.use(cors());





// allow app to accept json
app.use(express.json())

//define customer route(middleware)  
app.use("/users" , users);

// define complaint route(middleware)  
app.use("/complaint" , complaint);





// set the port
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})
