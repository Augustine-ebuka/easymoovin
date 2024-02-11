const userModel = require('../models/user_model')
const bcrpytjs = require('bcryptjs')
const errorHandler = require('../utils/error.js')
const jwt = require('jsonwebtoken')

const signup = async(req,res,next)=>{
   const{username, email, password} = req.body;
   const hashedPassword = bcrpytjs.hashSync(password, 10);
   try {
    const newUser = new userModel({username, email, password:hashedPassword});
    await newUser.save();
    res.status(201).json('user created succesfully')
   } catch (error) {
    next(error)
   }
}

const signin = async(req,res, next)=>{
const {email, password} = req.body
try {
   const validUser = await userModel.findOne({email:email});
   if(!validUser) return next(errorHandler(404, 'user not found'));
   const validePass = bcrpytjs.compareSync(password, validUser.password)
   if(!validePass) return next(errorHandler(401, "wrong credentials"));
   const jwt_token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET)
   res.cookie('accessToken', jwt_token,{httOnly:true}).status(200).json(validUser)
} catch (error) {
   console.log(error)
}
}

module.exports = {signup, signin}