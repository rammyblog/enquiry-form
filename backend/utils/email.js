require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const sendEmail = async (emailOptions) => {
  console.log(process.env.SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  try {
    await sgMail.send(emailOptions);
    console.log("Email sent");
  } catch (error) {
    console.error(error);
  }
};

const sendEmailOptions = ({ email, subject, name, message }) => {
  const senderMailOptions = {
    from: process.env.EMAIL, // sender address
    to: email, // list of receivers
    subject: `${subject} - [MERN Enquiry form]`, // Subject line
    html: `<p>We received your enquiry!🎉.</p> <p>Sender: ${name}</p> <p>email: ${email}</p> <p>Subject: ${subject}</p> <p>Message: ${message}</p>`, // plain text body
  };

  const receiverMailOptions = {
    from: process.env.EMAIL, // sender address
    to: process.env.EMAIL, // list of receivers
    subject: `${subject} - [MERN Enquiry form]`, // Subject line
    html: `<p>Sender: ${name}</p> <p>email: ${email}</p> <p>Subject: ${subject}</p> <p>Message: ${message}</p>`, // plain text body
  };
  sendEmail(senderMailOptions);
  sendEmail(receiverMailOptions);
};

module.exports = { sendEmailOptions };
