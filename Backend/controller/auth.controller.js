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
   if(!validePass) return next(errorHandler(401, "wrong password"));
   const jwt_token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET)
   const {password:pass, ...rest} = validUser._doc
   res.cookie('accessToken', jwt_token,{httOnly:true}).status(200).json(rest)
} catch (error) {
   console.log(error)
   next(error)
}
}


const google = async (req, res, next) => {
   try {
      // Check if the user exists
      const validateUser = await userModel.findOne({ email: req.body.email }).exec();

      if (validateUser) {
         const jwt_token = jwt.sign({ id: validateUser._id }, process.env.JWT_SECRET);
         const { password: pass, ...rest } = validateUser._doc;
         res.cookie('accessToken', jwt_token, { httpOnly: true }).status(200).json(rest);
      } else {
         // Create a default password
         const defaultPass = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
         const hashPass = bcrpytjs.hashSync(defaultPass, 10);
         
         const newUser = new userModel({
            username: req.body.name.split(" ").join('').toLowerCase() + Math.random().toString(36).slice(-4),
            email: req.body.email,
            password: hashPass,
            photo: req.body.photo
         });

         await newUser.save();

         const jwt_token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
         const { password: pass, ...rest } = newUser._doc;
         res.cookie('accessToken', jwt_token, { httpOnly: true }).status(200).json(rest);
      }
   } catch (error) {
      console.error(error);
      next(error);
   }
};


module.exports = {signup, signin, google}