"use client";
import React from 'react';

const Resume = () => {
    const experience = [
        {
            role: 'Summer Camp Counselor',
            company: 'Countryside YMCA',
            period: 'May 2024 - Aug 2024',
            details: 'Led a team of campers in various activities and programs, including sports, arts, and outdoor activities.'
        },
        {
            role: 'Motion Zone Attendant',
            company: 'Countryside YMCA',
            period: 'Oct 2024 - April 2025',
            details: 'Managed upwards of 20 kids, auditing and ensuring safety'
        },
        {
            role: 'Software Engineer',
            company: 'MTC - Luma Consulting',
            period: 'Feb 2026 - Present',
            details: 'Architecting a centralized hub for 100+ concurrent visitors using Next.js, React, and Supabase. Building high-performance UIs with Framer Motion and managing the end-to-end SDLC via GitHub and Vercel.'
        }
    ];

    return (
        <section id="resume" className="section">
            <div className="container">
                <h2 className="text-gradient"></h2>
                <div className="resume-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="resume-column">
                        <h3 style={{ marginBottom: '2rem', color: 'var(--accent-primary)' }}>Experience</h3>
                        {experience.map((exp, i) => (
                            <div key={i} className="resume-item" style={{ marginBottom: '2.5rem', position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--accent-primary)' }}>
                                <span className="period" style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)' }}>{exp.period}</span>
                                <h4 style={{ margin: '0.5rem 0' }}>{exp.role}</h4>
                                <p className="text-secondary">{exp.company}</p>
                                <p style={{ marginTop: '0.8rem' }}>{exp.details}</p>
                            </div>
                        ))}
                    </div>
                    <div className="resume-column">
                        <h3 style={{ marginBottom: '2rem', color: 'var(--accent-primary)' }}>Education</h3>
                        <div className="resume-item" style={{ marginBottom: '2.5rem', position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--accent-primary)' }}>
                            <span className="period" style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)' }}>2025 - 2029</span>
                            <h4 style={{ margin: '0.5rem 0' }}>B.S. in Computer Science & Engineering</h4>
                            <p className="text-secondary">The Ohio State University</p>
                        </div>
                        <div className="download-area glass-effect" style={{ padding: '2rem', borderRadius: '16px', marginTop: '2rem', textAlign: 'center' }}>
                            <h3>Want the full PDF?</h3>
                            <p className="text-secondary" style={{ margin: '1rem 0' }}>Get a detailed version of my career path.</p>
                            <a href="/resume/resume.pdf" download="Jason_Seh_Resume.pdf" className="btn btn-primary">Download Resume</a>
                        </div>
                    </div>
                </div>
            </div >
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (max-width: 768px) {
          .resume-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}} />
        </section >
    );
};

export default Resume;
