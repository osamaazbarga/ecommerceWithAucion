const express = require('express');
const User=require('../models/user.model')
require('../config/db')
const router=express.Router()

//middlewares
const {authCheck,adminCheck}=require('../middleware/auth')
//controller
const {
        create,
        listAll,
        remove,
        read,
        update,
        list,
        productsCount,
        productStar,
        listRelated,
        searchFilters,
    }=require('../controllers/product.controller')
router.post('/product',authCheck, adminCheck,create)
router.get('/products/total',productsCount)

router.get('/products/:count',listAll)
router.delete('/product/:slug',authCheck,adminCheck,remove)
router.get('/product/:slug',read)
router.put('/product/:slug',authCheck,adminCheck,update)

router.post('/products',list)

//rating
router.put("/product/star/:productid",authCheck,productStar)

//related
router.get('/product/related/:productId',listRelated)
//search
router.post('/search/filters',searchFilters)




module.exports=router