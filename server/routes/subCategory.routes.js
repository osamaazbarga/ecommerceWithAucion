const express = require('express');
const User=require('../models/user.model')
require('../config/db')
const router=express.Router()

//middlewares
const {authCheck,adminCheck}=require('../middleware/auth')
//controller
const {create,read,update,remove,list}=require('../controllers/subCategory.controller')
//routes
router.post('/sub',authCheck, adminCheck,create)
router.get('/sub',list)
router.get('/sub/:slug',read)
router.put('/sub/:slug',authCheck, adminCheck,update)
router.delete('/sub/:slug',authCheck, adminCheck,remove)


    



module.exports=router