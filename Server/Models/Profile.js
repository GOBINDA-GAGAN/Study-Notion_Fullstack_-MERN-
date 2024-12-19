const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  gender: {
    type: String,
  },
  dateOFBirth: {
    type: String,
  },
  about: {
    type: String,
    trim: true,
  },
  PhoneNumber: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Profile", profileSchema);
