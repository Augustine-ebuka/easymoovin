const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
    },
    photo:{
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gjE9WkZcU3X3GRwTQxUAL&ust=1707878121250000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJCfu_ujp4QDFQAAAAAdAAAAABAE"
    },
},
{timestamps:true},

)

const userModel = mongoose.model("User", userSchema)
module.exports = userModel