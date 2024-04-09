const express=require('express');
const {signUp,updatePassword,login}=require('../controllers/signup')
const expressvalidator=require('express-validator')
const routes=express.Router();
routes.post('/signUp',expressvalidator.body('email').isEmail(),signUp)
routes.post('/forgotpassword',expressvalidator.body('email').isEmail(),updatePassword)
routes.post('/login',expressvalidator.body('email').isEmail(),login)
module.exports =routes