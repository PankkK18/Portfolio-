const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'websnippest18@gmail.com',
    pass: 'Pankaj@18', // Replace with your App Password
  },
});

const mailOptions = {
  from: 'websnippest18@gmail.com',
  to: 'bapughuge81@gmail.com', // Change to your email
  subject: 'Test Email',
  text: 'This is a test email!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent: ' + info.response);
});
