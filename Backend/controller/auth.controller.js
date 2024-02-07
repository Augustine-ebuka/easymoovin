const userModel = require('../models/user_model')
const bcrpytjs = require('bcryptjs')
const errorHandler = require('../utils/error.js')

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

module.exports = {signup}