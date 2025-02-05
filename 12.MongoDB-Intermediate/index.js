const express=require("express");
const app=express();
const mongoose=require('mongoose');
const productRoutes=require('./routes/product-routes')
const PORT=3000;
const bookRoutes=require("./routes/book-routes")
require('dotenv').config();

app.use(express.json())

// app.use('/' , (req ,res)=>{
//     res.send("Heallo , I am Vaibhav")
// });

app.use('/products' , productRoutes)
app.use('/book', bookRoutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Connected Successfully")
})
 .catch((e)=>{
    console.log(e);
 })

 app.listen(PORT , ()=>{
    console.log('Server Connected Successfully')
 })