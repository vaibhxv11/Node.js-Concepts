 const express=require("express");
 const app=express();

 const requestTimestampLogger=(req , res , next)=>{
    const timeStamp=new Date().toISOString();

    console.log(`${timeStamp} from ${req.method}  to ${req.url}`);
     next();
 }


 app.use(requestTimestampLogger)

 app.get('/' , (req , res)=>{
    res.send("HOME PAGE VAIBHAV")
})

app.get('/about' , (req , res)=>{
    res.send("ABOUT VAIBHAV")
})

app.listen(3000 , ()=>{
    console.log(`Server is running at port 3000`)
})