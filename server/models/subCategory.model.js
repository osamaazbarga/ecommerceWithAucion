const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema;

const subCategorySchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:'Name Is required',
        minlength:[3,'too Short'],
        maxlength:[300,"Too long"],
    },
    slug:{
        type:String,
        unique:true,
        lowercase:true,
        index:true,

    },
    parent:{
        type:ObjectId,
        ref:'Category',
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model('SubCategory',subCategorySchema)