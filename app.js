const express = require("express");
const app = express();
const port =process.env.port ||3000;




app.get("/", (req,res)=>{
    res.send({message:"Hello"})
})



app.get("/test",(req,res)=>{
    res.send({message:"testing...."})
})

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);
})