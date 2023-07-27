import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import Login from "./models/LoginModel.js";

 
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/om',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
 
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.post("/register",(req,res)=>{
    console.log(req.body) 
   const {firstName,lastName,email,password,repassword} = req.body;
   Login.findOne({email: email},(err,user)=>{
           if(user){
               res.send({message : "This email id already Register"})
           }
           else{
               const user = new Login({
                   firstName,
                   lastName,
                   email,
                   password,
                   repassword,
               })
               user.save();
               res.send({message : "Successfull Register"})
           }
   })

})

app.post("/login",(req,res)=>{
   console.log(req.body)
   const {email,password} = req.body
   Login.findOne({email : email},(err,user)=>{
           if(user){
               if(password == user.password){
                   res.send({message : "Login SuccessFull",user})
               }
               else{
                   res.send({message : "Password didn't match"})
               }
               
            }
           else{
               res.send({message : "This email id is not register"})
           }
   })
})
app.listen(5000, ()=> console.log('Server up and running...'));