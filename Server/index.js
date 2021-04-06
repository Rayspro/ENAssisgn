require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const {MongoConnect} = require("./config");
const authentication=require('./middleware/auth');
const cors = require("cors");

//Connect DB..
MongoConnect();

//Import middleware..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Router import...
const Public = require("./Routes/public.route");
const User = require("./Routes/user.route");

app.use((req,res,next)=>{
    if(req.headers.token){
        authentication(req,res,((isAuth)=>{
            if(isAuth){
                if(req.user.admin){
                  app.use("/user", User);
                }
                //Here nOrmal User Route
                next();
            }else{
                res.status(401).send({message:"Unauthorized User"})
            }
        }))
    }else{
      next()
    }
})

//Route middleware...
app.use("/", Public);


app.listen(process.env.SERVER_PORT, (err) => {
  console.log("Server Started", err);
});
