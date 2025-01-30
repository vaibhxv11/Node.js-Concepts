const express=require("express");

const app=express();

//application level settings

app.set('view engine','ejs');

app.get('/' , (res , req)=>{
    res.send('HOme page');
})


app.post("/api/data" , (req , res)=>{
    res.json({
        message :"Data Received " ,
        data:req.body
    })
})

app.use((err , req , res, next)=>{
      console.log(err.stack)
      res.status(500).send("Something went wrong")
})