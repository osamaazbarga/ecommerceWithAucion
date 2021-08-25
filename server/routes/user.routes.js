const express = require('express');

const router=express.Router()

//middlewares
const {authCheck,adminCheck}=require('../middleware/auth')
//controllers
const {userCart,getUserCart,emptyCart,saveAddress}=require("../controllers/user.controller")
router.post('/user/cart',authCheck,userCart)//save cart
router.get('/user/cart',authCheck,getUserCart)//get cart
router.delete('/user/cart',authCheck,emptyCart)//empty cart
router.post('/user/address',authCheck,saveAddress)

// router.get('/osa', (req, res) => {
//     const user = 'Evg2rr2eni';
//     res.json(user);
// })


module.exports=router