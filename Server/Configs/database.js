const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("Connected to MongoDB Successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  })
}