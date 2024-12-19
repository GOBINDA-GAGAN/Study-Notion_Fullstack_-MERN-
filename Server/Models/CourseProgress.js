const mongoose = require("mongoose");

const courseProgress = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  completedVide: [{
    type: mongoose.Schema.Types.ObjectId,
    red: "SubSection",
  }],
});

module.exports = mongoose.model("courseProgress", courseProgress);
