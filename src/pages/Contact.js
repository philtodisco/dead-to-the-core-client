import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new URLSearchParams();
    formData.append('form-name', 'contact');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const getHeading = () => {
    switch (status) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Your email has been sent!';
      case 'error':
        return 'Something went wrong. Please try again.';
      default:
        return 'Interested in booking us?';
    }
  };

  return (
    <div className='contact-page'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot field to prevent spam */}
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>
          <h1>{getHeading()}</h1>
          <label>
            Name:
            <input 
              type="text" 
              name="name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
              disabled={status === 'sending'}
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              disabled={status === 'sending'}
            />
          </label>
          <label>
            Subject:
            <input 
              type="text" 
              name="subject"
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              required
              disabled={status === 'sending'}
            />
          </label>
          <label>
            Message:
            <textarea 
              name="message"
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
              disabled={status === 'sending'}
            />
          </label>
          <button id='submit-btn' type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
