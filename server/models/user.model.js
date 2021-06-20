const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema;

const userShema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        index:true
    },
    role:{
        type:String,
        default:"subscriber"
    },
    cart:{
        type:Array,
        default:[]
    },
    address:String,
    // wishlist:[{type:ObjectId,ref:"Product"}],
},{timestamp:true})

module.exports=mongoose.model('User',userShema)