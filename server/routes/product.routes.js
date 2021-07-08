const express = require('express');
const User=require('../models/user.model')
require('../config/db')
const router=express.Router()

//middlewares
const {authCheck,adminCheck}=require('../middleware/auth')
//controller
const {create}=require('../controllers/product.controller')
router.post('/product',authCheck, adminCheck,create)


    



module.exports=router