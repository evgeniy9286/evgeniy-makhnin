import sendEmail from './../../lib/mail';

export default async function handler(req, res) {
	const message = {
		to: 'evgeniymakhnin@gmail.com',
		subject: `Письмо с сайта Portfolio от ${req.body.name}`,
		text: `
			Имя: ${req.body.name}, 
        	Телефон: ${req.body.phone},
        	E-mail: ${req.body.email},
        	Сообщение: ${req.body.message},
        `,
	};
	sendEmail(message);
	console.log(message);
	res.send(`Спасибо за заявку, ${req.body.name}!`);
}