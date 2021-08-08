const Category=require('../models/category.model')
const slugify=require('slugify')
const Product=require('../models/product.model')
const SubCategory=require('../models/subCategory.model')



exports.create=async(req,res)=>{
    try{
        const {name}=req.body
        const category=await new Category({name,slug:slugify(name)}).save()
        res.json(category)
    }catch(err){
        res.status(400).send('Create category faild')
    }
}

exports.list=async(req,res)=>{
    res.json(await Category.find({}).sort({createdAt:-1}).exec())
    
}

exports.read=async(req,res)=>{
    let category=await Category.findOne({slug:req.params.slug}).exec()
    //res.json(category)
    const products=await Product.find({category})
    .populate('category')
    .exec()
    res.json({
        category,
        products
    })
    
}

exports.update=async(req,res)=>{
    const {name}=req.body
    try {
        const updated=await Category.findOneAndUpdate({slug:req.params.slug},{name:name,slug:slugify(name)},
            {new:true}
        )
        res.json(updated)
    } catch (error) {
        res.status(400).send("Create Update Failed")
    }
}

exports.remove=async(req,res)=>{
    try {
        const deleted =await Category.findOneAndDelete({slug:req.params.slug}).exec()
        res.json(deleted)
        
    } catch (error) {
        res.status(400).send("Create Delete Failed")
        
    }
}

exports.getSubs=(req,res)=>{
    SubCategory.find({parent:req.params._id}).exec((err,subs)=>{
        if(err) console.log(err);
        res.json(subs)
    })


}

