const express = require('express')
const connectDB = require('./db/connect')
const dotenv = require('dotenv')
dotenv.config()


const app = express()


app.listen(3000, ()=>{
    connectDB(process.env.MONGO)
    console.log('server listening on port ')
})