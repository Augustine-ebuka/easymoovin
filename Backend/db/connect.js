const mongoose = require('mongoose')

const connectDB = (str)=>{
    mongoose.connect(str).then(()=>{
        console.log('conneted to db');
    }).catch((error)=>{
        console.log("error connecting", error);
    })
    
}
module.exports = connectDB