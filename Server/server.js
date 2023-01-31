require("dotenv").config({path: "./config/.env"});
const express = require("express");
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error')
const cors = require("cors");



connectDB();
const app = express()
app.use(express.json());
app.use(cors());

// middleWare
app.use('/api/auth', require("./routes/auth"));
app.use('/api/private', require("./routes/private"));



// error Handler should be last piece of middleware
app.use(errorHandler);


// START SERVER ONLY WHEN WE HAVE VALID CONNECTION
const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => {
    console.log(`The server is connected to http://localhost:${PORT}`)
})

process.on("unhandledRejection", (err, promise) => {
    console.log(`log Error: ${err}`);
    server.close(() => process.exit(1));

})
