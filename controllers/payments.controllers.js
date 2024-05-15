import { Payment } from "../models/payment.model.js";
import { instance } from "../server.js";

import crypto from "crypto"



export const checkout = async (req, res) => {
    console.log(req.body.amount)

    const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };

    const order = await instance.orders.create(options)

    res.status(200).json({
        success: true,
        order: order

    })

}


export const paymentsVerfication = async (req, res) => {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest("hex")


    const isAuthenticatd = expectedSignature === razorpay_signature

    if (isAuthenticatd) {

        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature

        })




        return res.redirect(`http://localhost:5173/paymentSuccess?refrence=${razorpay_payment_id}`)


    }

    else {
        return res.status(200).json({
            message: "Success"
        })
    }





}

