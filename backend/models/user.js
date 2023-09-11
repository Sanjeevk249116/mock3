const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({

name:{type:String,required:true},
Description:{type:String,required:true},
Location:{type:String,required:true},
Category:{type:String,enum:["Clothing","Electronics","Furniture","Other"],required:true},
postedAt:{type:String,required:true},
Price:{type:String,required:true},
})


const UserModel=mongoose.model("olx",UserSchema);
module.exports={UserModel}

