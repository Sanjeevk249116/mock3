const express=require("express");
const { connection } = require("./config/connection");
const { Router } = require("./Routes/router");
require("dotenv").config()


const app=express();


app.use(express.json())
app.use("/olx",Router)

app.listen(process.env.PORT,async(req,res)=>{
    try{
        await connection
        console.log("connect")
    }catch(err){
        console.log("not connect")
    }
    console.log("connect to port 8090 url")
})


