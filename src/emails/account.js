const sgMail = require("@sendgrid/mail");
const e = require("express");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "utkarshsonkar03@gmail.com",
    subject: "Thanks for joining in!",
    text: "Welcome to the app,${name}. let me know you get along with tha app",
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "utkarshsonkar03@gmail.com",
    subject: "Sorry to see you go!",
    text: "Welcome to the app,${name}. let me know you get along with tha app",
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
