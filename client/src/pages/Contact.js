import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, subject, message }
    axios.post('/send', data)
      .then(response => {
        console.log('Success:', response.data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Subject:
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
      <label>
        Message:
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
