const nodemailer = require("nodemailer");
module.exports=async function sendMail ({ from, to, subject, text, html}) {
        let transporter = nodemailer.createTransport({
            // host: process.env.SMTP_HOST,
            service: 'gmail',
            // port: process.env.SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER, // generated ethereal user
                pass: process.env.MAIL_PASS, // generated ethereal password
            },
        });

        // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `inShare <${from}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}
// module.exports=sendMail;
