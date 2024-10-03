// Database/database.js
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        
        await mongoose.connect('mongodb://localhost:27017/Student-Records', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error in connecting to MongoDB:", err);
    }
};

connectDB(); // Connect to the database immediately
module.exports = connectDB; // Export the connection function
