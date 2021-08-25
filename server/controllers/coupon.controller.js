const Coupon=require('../models/coupon.model')

exports.create=async(req,res)=>{
    try{
        const {name,expiry,discount}=req.body.coupon
        const coupon=await new Coupon({name,expiry,discount}).save()
        res.json(coupon)
    }catch(err){
        console.log(err);
    }
}

exports.list=async(req,res)=>{
    try {
        const coupons=await Coupon.find({}).sort({createdAt:-1}).exec()
        res.json(coupons)
    } catch (err) {
        console.log(err);
    }
    
}


exports.remove=async(req,res)=>{
    try {
        const deleted =await Coupon.findByIdAndDelete(req.params.couponId).exec()
        res.json(deleted)
        
    } catch (error) {
        // res.status(400).send("Sub Delete Failed")
        console.log(err);
        
    }
}

