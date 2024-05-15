import express from 'express'
import { checkout, paymentsVerfication } from '../controllers/payments.controllers.js'


const router=express.Router()



router.route("/checkout").post(checkout)

router.route("/paymentVerification").post(paymentsVerfication)


export default router
