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
			
         alert ('Ваша заявка отправлена!')
		} catch (error) {
			console.log('Sending error', error);
		}
	
	}
	
	
  return (
  <>
  <form className = 'form'>
	<input type='text'
	 required
    minLength="1"
    maxLength="20" 
	 value={name} placeholder="Ваше имя" onChange={event => setName(event.target.value)}/>
	<input type='email'
	required
    minLength="5"
	 pattern="[a-z]{0,9}{@}"
	value={email}
	placeholder="Ваш e-mail"
	onChange={event => setEmail(event.target.value)}/>
	<input type='tel'
	required
    minLength="11"
    maxLength="12"
	  pattern="{0,9}{+}"
	value={phone}
	placeholder="Ваш телефон"
	onChange={event => setPhone(event.target.value)}/>
	<textarea type='textarea' placeholder='Опишите ваш проект' pattern="{0,9}{a-z}{а-я}" value={message} onChange={event => setMessage(event.target.value)} className="textarea"/>
	<button type='submit' onClick={sendForm} className="send-form">Отправить</button>
  </form>
	 </>
  )
}

export default Form
