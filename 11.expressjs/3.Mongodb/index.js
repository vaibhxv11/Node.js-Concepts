const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vaibhavdudhal:Pass123@cluster0.lj09mvc.mongodb.net/myDatabaseName", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,  // Increase the timeout for selecting a server
    socketTimeoutMS: 30000,           // Increase the socket timeout for sending/receiving data
    retryWrites: true,                 // Enable automatic retries on writes
})
.then(() => {
    console.log("Database Connected Successfully");
})
.catch((e) => {
    console.log("Error connecting to MongoDB:", e);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number, // Ensure this is passed as a number
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

async function runQueryExamples() {
    try {
        const newUser = await User.create({
            name: "Vaibhav Dudhal",
            email: "vd@gmail.com",
            age: 21,  // Ensure this is passed as a number
            isActive: true,
            tags: ['Developer', 'Designer'],
        });

        console.log('Created new user', newUser);
    } catch (e) {
        console.log('Error ->', e);
    } 
    // No need to close the connection here if you're not opening multiple connections.
    // await mongoose.connection.close(); // Remove this unless needed.
}

runQueryExamples();
