"use client";
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="container grid grid-2">
        <div className="hero-content">
          <h4 className="text-secondary" style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Welcome to my portfolio
          </h4>
          <h1>
            Hi, I'm <span className="text-gradient">Jason Seh</span><br />

          </h1>
          <p className="text-secondary" style={{ fontSize: '1.2rem', margin: '1.5rem 0 2.5rem 0' }}>
            I am a student at The Ohio State University with a passion for software engineering specializing in applied AI/ML.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/#projects" className="btn btn-primary">View Projects</Link>
            <a href="/resume/resume.pdf" download="Jason_Seh_Resume.pdf" className="btn" style={{ border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>Download CV</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-blob">
            <img src="/headshot.jpeg" alt="Profile" className="hero-img" />
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-section {
          padding-top: 6rem;
          padding-bottom: 2rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .hero-image-blob {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          overflow: hidden;
          animation: blob 10s infinite ease-in-out;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          box-shadow: 0 20px 40px hsla(250, 89%, 67%, 0.2);
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.1);
        }
        @keyframes blob {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          33% { border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%; }
          66% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
        }
        @media (max-width: 768px) {
          .hero-section { padding-top: 8rem; text-align: center; }
          .hero-btns { justify-content: center; }
          .hero-image-blob { width: 300px; height: 300px; margin-top: 3rem; }
        }
      `}} />
    </section>
  );
};

export default Hero;
