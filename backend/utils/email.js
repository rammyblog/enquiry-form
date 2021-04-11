const nodemailer = require("nodemailer");

const sendEmail = (emailOptions) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });
  transporter.sendMail(emailOptions, function (err, info) {
    if (err) {
      throw Error(err);
    }
  });
};

const sendEmailOptions = ({ email, subject, name, message }) => {
  const senderMailOptions = {
    from: process.env.email, // sender address
    to: email, // list of receivers
    subject: `${subject} - [MERN Enquiry form]`, // Subject line
    html: "<p>We received your enquiry!🎉.</p>", // plain text body
  };

  const receiverMailOptions = {
    from: process.env.email, // sender address
    to: process.env.email, // list of receivers
    subject: `${subject} - [MERN Enquiry form]`, // Subject line
    html: `<p>Sender: ${name}</p> <p>email: ${email}</p> <p>Subject: ${subject}</p> <p>Message: ${message}</p>`, // plain text body
  };
  sendEmail(senderMailOptions);
  sendEmail(receiverMailOptions);
};

module.exports = { sendEmailOptions };
