const SubCategory=require('../models/subCategory.model')
const slugify=require('slugify')
const Product=require('../models/product.model')

exports.create=async(req,res)=>{
    try{
        const {name,parent}=req.body
        const subCategory=await new SubCategory({name,parent,slug:slugify(name)}).save()
        res.json(subCategory)
    }catch(err){
        res.status(400).send('Create sub faild')
    }
}

exports.list=async(req,res)=>{
    res.json(await SubCategory.find({}).sort({createdAt:-1}).exec())
    
}

exports.read=async(req,res)=>{
    let subCategory=await SubCategory.findOne({slug:req.params.slug}).exec()
    const products=await Product.find({subs:subCategory})
    .populate('category')
    .exec()
    res.json({
        subCategory,
        products
    })

    
}

exports.update=async(req,res)=>{
    const {name,parent}=req.body
    try {
        const updated=await SubCategory.findOneAndUpdate(
            {slug:req.params.slug},
            {name:name,parent,slug:slugify(name)},
            {new:true}
        )
        res.json(updated)
    } catch (error) {
        res.status(400).send("Sub Category Update Failed")
    }
}

exports.remove=async(req,res)=>{
    try {
        const deleted =await SubCategory.findOneAndDelete({slug:req.params.slug}).exec()
        res.json(deleted)
        
    } catch (error) {
        res.status(400).send("Sub Delete Failed")
        
    }
}

