const express = require('express')
const connectDB = require('./db/connect')
const dotenv = require('dotenv')
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')
const globalErrorHandling = require('./middleware/globalErrorHandling')
dotenv.config()


const app = express()
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use(globalErrorHandling)

app.listen(3000, ()=>{
    connectDB(process.env.MONGO)
    console.log('server listening on port ')
})