import mongoose from "mongoose";

 export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://jijojacob:87654321@cluster0.nshwj.mongodb.net/tomato').then(()=>console.log("DB Connected"));
    
}