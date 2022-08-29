import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();


// const toEmail = 'info@artandloom.com';
const toEmail = 'fiocchigabriel@gmail.com';
const mailerConfig = {
    host: "smtp.office365.com",
    secureConnection: true,
    port: 587,
    auth: {
        user: "no-reply@artandloom.com",
        pass: "@Gallacher452"
    }
};
const transporter = nodemailer.createTransport(mailerConfig);


const sendEmail = (res, options) => {
    const mailOptions = {
        from: mailerConfig.auth.user,
        ...options
    };

    transporter.sendMail(mailOptions, (error) => {
        res.setHeader('Content-Type', 'application/json')

        if (error) {
            console.log('error:', error);

            res.writeHead(400);
            res.json({
                status: 'error',
            });
        } else {
            console.log('good');
            res.json({
                status: 'success',
            });
        }
    });
};

router.post('/contact', (req, res) => {
    const mailOptions = {
        from: mailerConfig.auth.user,
        to: toEmail,
        subject: `New Contact | ${req.body.name}`,
        replyTo: `${req.body.name}<${req.body.email}>`,
        html: `<body>` +
            `<p>Hey! you have a new contact from the website <a href="https://artandloom.com/" target="_blank">Art+Loom</a>.</p>` +
            `<p style="margin-bottom: 16px;">
                <span style="text-decoration: underline;">Name:</span> ${req.body.name}
            </p>` +
            `<p style="margin-bottom: 16px;">
                <span style="text-decoration: underline;">Phone:</span> ${req.body.phone}
            </p>` +
            `<p>
                <span style="text-decoration: underline;">Comments:</span>
            </p>` +
            `<p>${req.body.comments}</p>` +
            `</body>`
    };

    sendEmail(res, mailOptions);
});

router.post('/trade', (req, res) => {
    const name = `${req.body.firstName} ${req.body.lastName}`;
    const mailOptions = {
        from: mailerConfig.auth.user,
        to: toEmail,
        subject: `New Trade Contact | ${name}`,
        replyTo: `${name}<${req.body.email}>`,
        html: `<body>` +
            `<p>Hey! you have a new contact for trade from the website <a href="https://artandloom.com/" target="_blank">Art+Loom</a>.</p>` +
            `<p style="margin-bottom: 16px;">
                <span style="text-decoration: underline;">Name:</span> ${name}
            </p>` +
            `<p style="margin-bottom: 16px;">
                <span style="text-decoration: underline;">Company Website:</span> ${req.body.companyWebsite}
            </p>` +
            `<p style="margin-bottom: 16px;">
                <span style="text-decoration: underline;">Company Type:</span> ${req.body.companyType}
            </p>` +
            `<p style="margin-bottom: 16px;">
                <span style="text-decoration: underline;">Resale Certificate Number:</span> ${req.body.resaleCertificateNumber}
            </p>` +
            `<p style="margin-bottom: 16px;">
            <span style="text-decoration: underline;">Phone:</span> ${req.body.phone}
            </p>` +
            `<p style="margin-bottom: 16px;">
                <span style="text-decoration: underline;">State:</span> ${req.body.state}
            </p>` +
            `</body>`
    };

    sendEmail(res, mailOptions);
});

router.post('/request-information', (req, res) => {
    const mailOptions = {
        from: mailerConfig.auth.user,
        to: toEmail,
        subject: `New Product Request Information | ${req.body.name}`,
        replyTo: `${req.body.name}<${req.body.email}>`,
        html: `<body>` +
            `<p>Hey! you have a new product request information from the website <a href="https://artandloom.com/" target="_blank">Art+Loom</a>.</p>` +
            `<p style="margin-bottom: 16px;">
                <span style="text-decoration: underline;">Product:</span> ${req.body.product.name}
            </p>` +
            `<p style="margin-bottom: 16px;">
                <a target="_blank" href="${req.body.product.path}">
                <img src="${req.body.product.image}" alt="${req.body.product.name}" />
                </a>
            </p>` +
            `<p style="margin-bottom: 16px;">
                <a target="_blank" href="${req.body.product.path}">View Product</a>
            </p>` +
            `<p style="margin-bottom: 16px;">
                <span style="text-decoration: underline;">Name:</span> ${req.body.name}
            </p>` +
            `<p>
                <span style="text-decoration: underline;">Message:</span>
            </p>` +
            `<p>${req.body.message}</p>` +
            `</body>`
    };

    sendEmail(res, mailOptions);
});

module.exports = router;