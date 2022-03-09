const router = require("express").Router();

router.post("/api/contact", (req, res) => {
    const nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "skidamda@gmail.com",
          pass: "dfrTTz663",
        },
    });
    transporter.sendMail({
        from: req.body.name,
        to: "skidamda@gmail.com",
        subject: req.body.subject, 
        text: `Sent from: ${req.body.email}\nText: ${req.body.description}`
    });
});

module.exports = {
    router
};