const express=require('express')
const router=express.Router()

const {createPaymentIntent}=require('../controllers/stripe.controller')
const {authCheck}=require('../middleware/auth')

router.post('/create-payment-intent',authCheck,createPaymentIntent)

module.exports=router