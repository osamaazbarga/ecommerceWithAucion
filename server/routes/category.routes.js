const express = require('express');
const User=require('../models/user.model')
require('../config/db')
const router=express.Router()

//middlewares
const {authCheck,adminCheck}=require('../middleware/auth')
//controller
const {create,read,update,remove,list,getSubs}=require('../controllers/category.controller')
router.post('/category',authCheck, adminCheck,create)
router.get('/category',list)
router.get('/category/:slug',read)
router.put('/category/:slug',authCheck, adminCheck,update)
router.delete('/category/:slug',authCheck, adminCheck,remove)
router.get('/category/subs/:_id',getSubs)


    
// })
router.post('/create',(req,res)=>{
    res.json({
        data:"you succsess"
    })
})

const myMiddleware=(req,res,next)=>{
    console.log('im a meddleware');
    next();
}

router.get('/testing',myMiddleware,(req,res)=>{
    res.json({
        data:"you succsess"
    })
})


module.exports=router