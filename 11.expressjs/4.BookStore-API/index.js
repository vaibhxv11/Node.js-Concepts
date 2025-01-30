const express=require('express');
const app=express();
const connecttoDB=require('./database/database')
require('dotenv').config();
const bookRoutes=require('./routes/book-routes')
const PORT=process.env.PORT || 3000;

connecttoDB();

//middlware -> express.json()

app.use(express.json());

//routes
app.use('/api/books', bookRoutes)

app.listen(PORT , ()=>{
    console.log(`Server is now running at port ${PORT}`)
})