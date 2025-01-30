const mongoose=require("mongoose");

const connectToDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");

    } catch(e)
    {
        console.log("MongoDB Connection Failed");
        process.exit(1);

    }
}

module.exports=connectToDB;