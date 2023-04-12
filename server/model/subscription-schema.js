import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    website:{
        type:String,
        required:true,
    },
    username:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const subscription = mongoose.model('subscription',subscriptionSchema);

export default subscription;