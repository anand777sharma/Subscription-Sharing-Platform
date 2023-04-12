import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password:{
        type:String,
        required:true,
       
    },
    conformpassword:{
        type:String,
        required:true,
       
    },
    phone:{
        type:String,
        required:true,
    }
})

const user = mongoose.model('user',userSchema);

export default user;