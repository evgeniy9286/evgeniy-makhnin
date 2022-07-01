import { useState } from 'react';
import axios from 'axios';


function Form() {

   const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	
	async function sendForm() {
	
		try {
			
			await axios.post('https://evgeniy-makhnin.vercel.app/api/send-request', {
				name, email, phone, message
			});
			
		setName('');
			setEmail('');
			setPhone('');
			setMessage('');
			
			alert('Ваша заявка отправлена')

		} catch (error) {
			console.log('Sending error', error);
		}
	
	}
	
	
  return (
  <>
  <Form className="form">
	<input type='text' value={name} onChange={event => setName(event.target.value)} placeholder="Ваше имя"/>
	<input type='text' value={email} onChange={event => setEmail(event.target.value)} placeholder="Ваш E-mail"/>
	<input type='text' value={phone} onChange={event => setPhone(event.target.value)} placeholder="Ваш телефон"/>
	<textarea type='text' className='textarea' value={message} onChange={event => setMessage(event.target.value)} placeholder="Опишите ваш проект"/>
	<button type='button' className='send-form' onClick={sendForm}>Отправить</button>
   </Form>
	 </>
  )
}

export default Form
