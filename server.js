import { app } from "./app.js";
import Razorpay  from "razorpay"
import { connectMongoDB } from "./connectionDb.js";



const PORT =process.env.PORT 

const KEY =process.env.RAZORPAY_API_KEY
const SECRET =process.env.RAZORPAY_API_SECRET



connectMongoDB()

 export const  instance = new Razorpay({
    key_id: KEY,
    key_secret:SECRET ,
  });

app.get("/",(req,res)=>{
    res.json({msg:"hello server"});

})


app.listen(PORT,(req,res)=>console.log(`server listening on port ${PORT}`))