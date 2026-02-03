"use client";
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:jassehxia@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus('Redirecting to your email client...');

    // Trigger mailto redirect
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus('Success! Your email client should have opened.');
      e.target.reset();
    }, 2000);
  };

  return (
    <main className="app">
      <Navbar />

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h1 className="text-gradient" style={{ marginBottom: '1.5rem' }}>Get in Touch</h1>
              <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
                I'm always open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="contact-methods">
                <div className="method-card glass-effect">
                  <h3>Email</h3>
                  <a href="mailto:jassehxia@gmail.com" className="text-gradient">jassehxia@gmail.com</a>
                </div>
                <div className="method-card glass-effect">
                  <h3>Location</h3>
                  <p className="text-primary">Columbus, Ohio</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container glass-effect">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required placeholder="What's this about?" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  {status || 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          padding-top: 10rem;
          min-height: 100vh;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .method-card {
          padding: 1.5rem;
          border-radius: 12px;
        }
        .method-card h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .contact-form-container {
          padding: 3rem;
          border-radius: 24px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .form-group input, 
        .form-group textarea {
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }
        .form-group input:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .contact-section { padding-top: 8rem; }
        }
      `}</style>
    </main>
  );
}
