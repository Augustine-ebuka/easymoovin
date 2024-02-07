const express = require('express')
const connectDB = require('./db/connect')
const dotenv = require('dotenv')
const userRouter = require('./routes/usser.route')
dotenv.config()


const app = express()

app.use(userRouter)

app.get('/',(req, res)=>{
    res.send('hello worldgf5')
})


app.listen(3000, ()=>{
    connectDB(process.env.MONGO)
    console.log('server listening on port ')
})