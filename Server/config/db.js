const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');
mongoose.set("strictQuery", true);
const  DB ='mongodb+srv://Adi2256:Adirj2256@cluster0.1jkn4q8.mongodb.net/apnividha?retryWrites=true&w=majority'
const connectDB = async() => {
   
    await mongoose.connect(DB);

    console.log("MongoDB connected")
};

module.exports = connectDB;