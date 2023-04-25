import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, subject, message }
    axios.post('https://dttc-api.herokuapp.com/email', data)
      .then(response => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setEmailSent(true)
        setTimeout(() => {
          setEmailSent(false)
        }, 3000)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  return (
    <div className='contact-page'>
      <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h2>{emailSent ? 'Your email has been sent!' : 'Interested in booking us?'}</h2>
        <label>
         Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </label>
        <label>
         Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
        </label>
        <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required/>
      </label>
        <button id='submit-btn' type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}
