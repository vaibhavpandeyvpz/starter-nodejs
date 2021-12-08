const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport(process.env.MAILER_URL);
