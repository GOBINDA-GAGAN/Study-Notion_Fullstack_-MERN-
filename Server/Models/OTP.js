const mongoose = require("mongoose");
const mailSender = require("../Utils/mailSender");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});

// a function ->to send emails

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "verification Email from StudyNotion",
      otp
    );
    console.log("Verification email sent successfully");
  } catch (error) {
    console.log("error sending verification email", error);
    throw error;
  }
}

OTPSchema.pre("save", async function (next) {
  await sendVerificationEmail(this.email, this.otp);
  next();
});

module.exports = mongoose.model("OTP", OTPSchema);
