const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('conneted to db');
}).catch((error)=>{
    console.log("error connecting", error);
})


const app = express()


app.listen(3000, ()=>{
    console.log('server listening on port ')
})