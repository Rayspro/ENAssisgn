require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const {MongoConnect} = require("./config");
const authentication=require('./middleware/auth');
const cors = require("cors");
const UserModel = require("./Model/User.model")
const UserService = require("./Service/User.service")

//Connect DB..
MongoConnect();

//Import middleware..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Router import...
const Public = require("./Routes/public.route");
const User = require("./Routes/user.route");
const { findOne } = require("./Model/User.model");

//Route middleware...
app.use("/", Public);

app.use((req,res,next)=>{
  console.log(req.headers)
    if(!!req.headers.token){
        authentication(req,res,((isAuth)=>{
            if(isAuth){
                if(req.user.admin){
                  app.use("/user", User);
                }
                //Here nOrmal User Route
                next();
            }else{
                res.status(401).send({message:"Unauthorized User2"})
            }
        }))
    }else{
      next()
    }
})




app.listen(process.env.SERVER_PORT, async (err) => {
  const user = await UserModel.findOne({uname:"root"})
  if(!!user){

  }else{

    const UService = new UserService();
    const newUser =await UService.CreateUser({
      uname:"root",
      lname:"",
      fname:"",
      email:"root@MediaList.com",
      admin:true, 
      password:"root"
    })

    console.log(`Superuser created name : root@MediaList.com and Password is root`)
  }

  console.log("Server Started", err);
});
