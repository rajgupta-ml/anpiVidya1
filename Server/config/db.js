const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
  await mongoose.connect(process.env.DB);

  console.log("MongoDB connected");
};

module.exports = connectDB;
