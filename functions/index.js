const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    }
});

exports.submit = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if(req.method !== 'POST') {
            return;
        }
        const mailOptions = {
            from : req.body.name,
            replyTo: req.body.email,
            to: gmailEmail,
            subject: `From my Website <${req.body.email}>`,
            text: req.body.message,
            html: `
                <h3>${req.body.subject}</h3>
                <br />
                <p>${req.body.message}</p>
            `
        };
        mailTransport.sendMail(mailOptions, (err, info) => {
            if(err) {
                return console.log(err)
            } else {
                return console.log("Email sent successfully!", info)
            }
        });
        res.status(200).send({ isEmailSend: true });
    });
});


// Remember to enable account access for gmail 
// also switch less secure apps on 