const User=require('../models/user.model')
const Cart=require('../models/cart.model')
const Product=require('../models/product.model')
const Coupon=require('../models/coupon.model')
const stripe=require('stripe')(process.env.STRIPE_SECRET)

exports.createPaymentIntent=async(req,res)=>{
    console.log(req.body);
    const {couponApplied}=req.body

    //1. find user
    const user =await User.findOne({email:req.user.email}).exec()
    //2. get user cart total
    const {cartTotal,totalAfterDiscount}=await Cart.findOne({orderedBy:user._id}).exec()

    console.log('CART TOTAL CHARGED',cartTotal,"AFTER DISCOUNT ",totalAfterDiscount);

    let finalAmount=0;

    if(couponApplied&&totalAfterDiscount){
        finalAmount=(totalAfterDiscount*100)
    }else {
        finalAmount=(cartTotal*100)
    }
    console.log((finalAmount).toFixed(0));
    //create payment intent with order amount and currency
    const paymentIntent=await stripe.paymentIntents.create({
        amount:(finalAmount).toFixed(0),
        currency:"usd"
    });
    console.log("paymentIntent",paymentIntent,finalAmount);

    res.send({
        clientSecret:paymentIntent.client_secret,
        cartTotal,
        totalAfterDiscount,
        payable:finalAmount
    })
}