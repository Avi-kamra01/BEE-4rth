const express = require("express");
require("dotenv").config();

// const port = process.env.PORT || 3000;      

const app = express();

app.use((req, res, next)=>{
    console.log(`${req.method} request for ${req.url}`);
    console.log(`Request IP: ${req.ip}`);
    next();
})  

app.get("/",function(req,res){
    // console.log("Hello World");
    res.send("Hello World");
})

app.get("/profile/:commentID/:Id",function(req,res){
    const {commentID,Id} = req.params;

    res.status(200).json({
        "CommentID" : commentID,
        "Id": Id
    })
})

app.listen(3000);