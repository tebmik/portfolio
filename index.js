const { USER, PASS } = require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <ul>
                <li>Name: ${req.body.name}</li>
                <br>
                <li>Email: ${req.body.email}</li>
            </ul>
            <br>
            <br>
            <h3>${req.body.subject}</h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: USER,
                pass: PASS
            }
        })

        let mailOptions = {
            from: `${req.body.name}, <${req.body.email}>`,
            to: USER,
            replyTo: req.body.email,
            subject: req.body.subject,
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                return console.log(err)
            } else {
                return console.log("Email sent successfully!", info)
            }
            
        })
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});