"use client";
import React, { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const message = formData.get('message');

        const mailtoUrl = `mailto:jassehxia@gmail.com?subject=Contact from Portfolio&body=${encodeURIComponent(message)}`;

        setStatus('Redirecting...');

        window.location.href = mailtoUrl;

        setTimeout(() => {
            setStatus('Check your email client! 🧧');
            e.target.reset();
        }, 2000);
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="text-gradient">Get in Touch</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                            I'm always open to new opportunities and collaborations.
                            Drop me a message and I'll get back to you!
                        </p>
                        <div className="contact-methods" style={{ display: 'flex', gap: '2rem' }}>
                            <div className="method">
                                <h4 style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Email</h4>
                                <a href="mailto:jassehxia@gmail.com" className="text-primary">jassehxia@gmail.com</a>
                            </div>
                            <div className="method">
                                <h4 style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Location</h4>
                                <p className="text-primary">Columbus, Ohio</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container glass-effect" style={{ padding: '2rem', borderRadius: '16px', marginTop: '2rem' }}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Your message here..."
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '8px',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'inherit',
                                        resize: 'none'
                                    }}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                {status || 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}} />
        </section>
    );
};

export default Contact;
