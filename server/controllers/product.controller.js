const Product=require('../models/product.model')
const slugify=require('slugify')

exports.create=async(req,res)=>{
    try {
        
        req.body.slug=slugify(req.body.title)
        const newProduct=await new Product(req.body).save()
        res.json(newProduct)
    } catch (err) {
        //res.status(400).send('Create product faild')
        res.status(400).json({
            err:err.message,
        })
    }
}

exports.listAll=async(req,res)=>{
    let products=await Product.find({})
    .limit(parseInt(req.params.count))
    .populate("category")
    .populate("subs")
    .sort([['createdAt',"desc"]])
    .exec()


    res.json(products)
}