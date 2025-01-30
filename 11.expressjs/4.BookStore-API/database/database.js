require('dotenv').config();
const mongoose = require('mongoose');

const connecttoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is connected successfully");
    } catch (e) {
        console.log("MongoDB Connection Failed", e);
        process.exit(1);
    }
};

module.exports = connecttoDB;
