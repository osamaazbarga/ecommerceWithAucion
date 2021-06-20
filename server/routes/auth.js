const express = require('express');
const {createOrUpdateUser}=require('../controllers/auth')

const router=express.Router()
router.get('/osama', createOrUpdateUser)


module.exports=router