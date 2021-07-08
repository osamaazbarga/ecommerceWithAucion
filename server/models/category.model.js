const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
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

    }
},{timestamps:true})

module.exports=mongoose.model('Category',categorySchema)