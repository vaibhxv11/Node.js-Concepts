const express=require('express');
const app=express();

const myMiddleware=(req , res , next)=>{
    console.log('This is first middlware , it will run on each request');

     next();
}

const secMiddleware=(req , res , next)=>{
    console.log('second This is second  middlware , it will run on each request');

     next();
}

app.use(myMiddleware , secMiddleware );

app.get('/' , (req , res)=>{
    res.send("HOME PAGE VAIBHAV")
})

app.get('/about' , (req , res)=>{
    res.send("ABOUT VAIBHAV")
})

app.listen(3000 , ()=>{
    console.log(`Server is running at port 3000`)
})