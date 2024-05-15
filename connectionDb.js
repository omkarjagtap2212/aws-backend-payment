import mongoose from 'mongoose';


export const  connectMongoDB=async()=>{
    const {connection}  =await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongoDb connect with ${connection.host}`)


}