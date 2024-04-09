const { error } = require('console');
const user=require('../models/user');
const jwt=require('jsonwebtoken');
const { where } = require('sequelize');
const signUp=async(req,res,next)=>{
  try{
    console.log("hiii");
    const {firstname,lastname,email,password}=req.body;
       
    console.log('firstname,lastname,email,password :>> ', firstname,lastname,email,password);
    
    const userCreate=await user.create({firstname,lastname,email,password});
    console.log('userCreate :>> ', userCreate);
    res.json(userCreate)

  }
  catch(err){
res.send(err)
  }
}
const updatePassword=async(req,res,next)=>{
    try{
const {email}=req.body;
if(!email){
    throw error ("Please enter an email")
}
const ifEMailExist=user.findOne({where :{email:email}})
if(!ifEMailExist){
    throw new error ("email does not exist please signup first ");

}
if(ifEMailExist){
    ifEMailExist.email=email
   await  user.save();
   res.json(ifEMailExist);
}

    }
    catch(err){
res.send(err)
    }
}

const login=async(req,res,next)=>{
try{
    const {email,password}=req.body;
    const userExists= await user.findOne({where:{email:email,password,password}});
    if(userExists){
        const jwtToken=await jwt.sign(email,'codesforTomorrow',{ expiresIn: 60 * 60 });
        res.json({message:"loged in successfully",token:jwtToken})
    }
}
catch(err){
res.send(err)
}
}
module.exports={signUp,updatePassword,login}