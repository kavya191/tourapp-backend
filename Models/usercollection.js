const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
         trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true ,
        required:true
    },
    phonenum:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        minlength:10,
        maxlength:13
    },
    location:{
        type:String,
        trim:true,
        required:true
    },
    days:{
        type:String,
        trim:true,
        required:true
    },
    fromdate:{
        type:String,
        trim:true,
        required:true
    },
    todate:{
        type:String,
        trim:true,
        required:true
    }
})
const users=new mongoose.model('users',userSchema)
module.exports=users