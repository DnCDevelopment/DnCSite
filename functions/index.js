/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const email = (functions.config() || {}).mail.email || 'email';
const password = (functions.config() || {}).mail.password || 'password';

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  const data = JSON.parse(req.body);

  const template = Object.keys(data).reduce((acc, key) => {
    acc += `<p><b>${key}: </b>${data[key]}</p>`;
    return acc;
  }, '');

  const mailOptions = {
    from: `Заявка с сайта`,
    to: email,
    subject: 'Заявка с сайта',
    html: template,
  };

  mailTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(JSON.stringify({ error: error.message }));
    }
    return res.status(200).send(info.envelope.to);
  });
});
