const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

transporter.sendMail({
  from: 'Slicks Slices <slicks@example.com>',
  to: 'orders@example.com',
  subject: 'new order!',
  html: `<p>Your new pizza is here!</p>`,
});

exports.handler = async (event, context) => {
  const info = await transporter.sendMail({
    from: 'Slicks Slices <slicks@example.com>',
    to: 'orders@example.com',
    subject: 'new order!',
    html: `<p>Your new pizza is here!</p>`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
