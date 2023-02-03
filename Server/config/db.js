const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const connectDB = async() => {
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    await mongoose.connect(getUri);

    console.log("MongoDB connected")
};

module.exports = connectDB;