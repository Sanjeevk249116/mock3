const express = require("express");
var cors = require('cors')
const { UserModel } = require("../models/user");

const Router = express.Router();

Router.use(cors({
    origin: "*"
}))

Router.get("/", async(req, res) => {
    const data=await UserModel.find();
    res.send({ msg: data })
})


Router.post("/add", async (req, res) => {
    const { name, Description, Location, Category, Price, postedAt } = req.body;
    console.log(Description)
    const users_data = await UserModel.findOne({ name, Description, Location, Category, Price, postedAt })
    if (users_data) {
        res.send({ msg: "this item is already added" });
        return;
    }

    try {

        let new_obj = UserModel({
            name, Description, Location, Category, Price, postedAt
        })
        await new_obj.save();

        const data = await UserModel.find();
        res.send({ msg: data });

    } catch (err) {
        res.send({ msg: "failed to add" })
    }
})


Router.put("/put/:Id",async(req,res)=>{
    const {Id}=req.params;
  const{name, Description, Location, Category, Price, postedAt}=req.body
    const data_details=await UserModel.findOne({_id:Id});
    
    if(data_details){
        try{
            data_details.name=name,
            data_details.Description=Description;
            data_details.Location=Location;
            data_details.Category=Category;
            data_details.Price=Price;
            data_details.postedAt=postedAt;

        await data_details.save()
        res.send({msg:"updating data successfully"})
        }catch(err){
            res.send({msg:"fill all put data"})
        }

    }else{
        res.send({msg:"Something went wrong!"})
    }

})


Router.delete("/delete/:Id",async(req,res)=>{
    const{Id}=req.params;
    try{
        const data=await UserModel.findByIdAndDelete({_id:Id,})
        console.log(data)
    res.send({msg:"delete part succesfully"})
    }catch(err){
        res.send({msg:"something wrong in delete part"})
    }
})



module.exports = { Router }
