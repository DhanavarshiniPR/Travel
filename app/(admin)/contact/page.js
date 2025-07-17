"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="contact-wrapper">
      <div className="container">
        <h1> Contact Us</h1>
        <p className="intro">
          Have questions, feedback, or collaboration ideas? We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />

          <button type="submit">Send Message</button>
          {submitted && <p className="success">Message sent successfully!</p>}
        </form>
      </div>

      <style jsx>{`
        .contact-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px 20px;
          background: linear-gradient(to right, #cccbfa, #e3e3ff);
          min-height: 100vh;
        }

        .container {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
          text-align: center;
        }

        h1 {
          margin-bottom: 10px;
          color: #2c3e50;
        }

        .intro {
          color: #555;
          margin-bottom: 30px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        input,
        textarea {
          padding: 12px 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
          width: 100%;
          transition: border 0.3s ease;
        }

        input:focus,
        textarea:focus {
          border-color: #5c5cff;
          outline: none;
        }

        button {
          background: #5c5cff;
          color: white;
          padding: 14px;
          border: none;
          font-size: 16px;
          font-weight: bold;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        button:hover {
          background: #3d3dcf;
          transform: translateY(-2px);
        }

        .success {
          color: green;
          font-weight: 500;
          margin-top: 10px;
        }

        @media (max-width: 600px) {
          .container {
            padding: 30px 20px;
          }

          h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </main>
  );
}
