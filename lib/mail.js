import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport({
	host: 'smtp.yandex.ru',
	port: 465,
	secure: true,
	auth: {
		user: 'Evgeniy9286@yandex.ru',
		pass: 'M13e06n82'
	},
	tls: {rejectUnauthorized: false},
}, {
	from: 'Portfolio <Evgeniy9286@yandex.ru>'
});

const sendEmail = (message) => {
    smtpTransport.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        smtpTransport.close();
    });
}

export default sendEmail;