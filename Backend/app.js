const express = require('express')
const connectDB = require('./db/connect')
const dotenv = require('dotenv')
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')
dotenv.config()


const app = express()
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message||"internal server error"
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

app.listen(3000, ()=>{
    connectDB(process.env.MONGO)
    console.log('server listening on port ')
})