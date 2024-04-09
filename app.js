const express =require('express');
const connection = require('./db');
const bodyParser=require('body-parser')
const signupRoutes=require('./routes/signup')
const app=express();
const Port=3000;
const dotenv = require('dotenv');
dotenv.config()
connection()
app.use(bodyParser.json());
app.use(signupRoutes)
app.get("/",(req,res,next)=>{
    res.send('Hello world')
})
app.listen(Port,()=>{
    console.log("app is connected on ",Port);
})