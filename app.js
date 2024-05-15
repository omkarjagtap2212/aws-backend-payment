import { config } from 'dotenv';
import cors from 'cors';
import express from 'express';

import router from './routes/Payment.routes.js';



config({path:".env"})



export const app=express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/api/getkey", (req, res) =>res.status(200).json({key:process.env.RAZORPAY_API_KEY}))

app.use("/api",router)



