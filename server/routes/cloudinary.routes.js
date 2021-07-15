
const express = require('express');
require('../config/db')
const router=express.Router()

//middlewares
const {authCheck,adminCheck}=require('../middleware/auth')

const {upload,remove}=require('../controllers/cloudinary.controller')

router.post('/uploadimages',authCheck,adminCheck,upload)
router.post('/removeimage',authCheck,adminCheck,remove)

module.exports=router