const express = require('express');

const router=express.Router()

//middlewares
const {authCheck}=require('../middleware/auth')
//controllers
const {
        userCart,
        getUserCart,
        emptyCart,
        saveAddress,
        applyCouponToUserCart,
        createOrder,
        orders,
        addToWishlist,
        wishlist,
        removeFromWishlist,
        createCashOrder

      }=require("../controllers/user.controller")
router.post('/user/cart',authCheck,userCart)//save cart
router.get('/user/cart',authCheck,getUserCart)//get cart
router.delete('/user/cart',authCheck,emptyCart)//empty cart
router.post('/user/address',authCheck,saveAddress)

router.post('/user/order',authCheck,createOrder)//Stripe
router.post('/user/cash-order',authCheck,createCashOrder)//COD
router.get('/user/orders',authCheck,orders)

//coupon
router.post('/user/cart/coupon',authCheck,applyCouponToUserCart)

//wishlist 
router.post('/user/wishlist',authCheck,addToWishlist)
router.get('/user/wishlist',authCheck,wishlist)
router.put('/user/wishlist/:productId',authCheck,removeFromWishlist)



//
// router.get('/osa', (req, res) => {
//     const user = 'Evg2rr2eni';
//     res.json(user);
// })


module.exports=router