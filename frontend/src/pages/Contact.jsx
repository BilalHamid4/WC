import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit
    alert('Message sent!');
  };

  return (
    <section>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} value={form.name} />
        <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
        <textarea name="message" placeholder="Message" onChange={handleChange} value={form.message} />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
