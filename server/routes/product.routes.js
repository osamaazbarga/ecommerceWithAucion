const express = require('express');
const User=require('../models/user.model')
require('../config/db')
const router=express.Router()

//middlewares
const {authCheck,adminCheck}=require('../middleware/auth')
//controller
const {create,listAll,remove}=require('../controllers/product.controller')
router.post('/product',authCheck, adminCheck,create)
router.get('/products/:count',listAll)
router.delete('/product/:slug',authCheck,adminCheck,remove)



    



module.exports=router