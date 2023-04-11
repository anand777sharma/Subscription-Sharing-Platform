import mongoose from "mongoose";

const Connection = ()=>{
    const URI = 'mongodb+srv://anand:anand123@cluster0.82p5mzf.mongodb.net/subshare?retryWrites=true&w=majority';
    mongoose.connect(URI,{useNewUrlParser:true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
    }
    
    export default Connection;