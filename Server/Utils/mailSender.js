const nodemailer = require("nodemailer");

let mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "process.env.MAIL_HOST",
      auth: {
        user: "process.env.MAIL_USER",
        pass: "process.env.MAIL_PASS",
      },
    });

    let info = await transporter.sendMail({
      from: "StudyNotion || Gobinda Gagan - xyz !",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error);
  }
};
module.exports = mailSender;