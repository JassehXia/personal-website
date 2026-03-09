"use client";
import React, { useState } from 'react';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('projects');

    const mainProjects = [

        {
            title: 'AceIt - HackAI 2026',
            description: 'Developed a high-performance, AI-driven mock interview platform providing real-time multimodal analysis (computer vision and audio) to evaluate candidate performance across behavioral and technical tracks. Placed 7th out of 100s of participants',
            tech: ['Next.js', 'FastAPI', 'WebRTC', 'PyTorch', 'Librosa', 'Whisper', 'Gemini 3.0', 'Supabase'],
            link: 'https://github.com/OSU-Hackathon-Team/HackAI2026'
        },
        {
            title: 'OncoPath',
            description: 'Engineered a predictive pipeline via XGBoost, analyzing 25,000+ patient records and 100+ feature sets from the MSK-MET dataset to quantify organ-specific metastatic risks with an average of  0.72 AUC-ROC score across all organ sites.',
            tech: ['Next.js', 'FastAPI', 'XGBoost', 'SHAP', 'Scikit-learn', 'Tailwind CSS', 'Three.js'],
            link: 'https://github.com/JassehXia/CancerPrediction'
        },
        {
            title: 'Buckeye Sense - MakeOhio 2026',
            description: 'Architected an asynchronous, end-to-end realtime pipeline that ingests high-frequency hashed Wi-Fi telemetry from a distributed ESP32 sensor network to visualize campus-wide human density in a 3D environment for fire rescue situations',
            tech: ['React', 'Vite', 'Supabase', 'Postgis', 'Deck.gl', 'MapLibre', 'ESP32'],
            link: 'https://github.com/OSU-Hackathon-Team/MakeOhio26'
        },
        {
            title: 'LectureGraph',
            description: 'Using Whisper and OpenAI, LectureGraph creates a visual representation of lectures videos via interconnected nodes and edges.',
            tech: ['Next.js', 'Postgres', 'Prisma', 'Cloudflare R2', 'FastAPI', 'Whisper', 'OpenAI'],
            link: 'https://github.com/JassehXia/LectureGraph'
        },

    ];

    const sideProjects = [
        {
            title: 'Street Level',
            description: 'An AI-powered Mandarin learning app that uses user personas and personalized feedback to help users learn Chinese.',
            tech: ['Next.js', 'Postgres', 'Prisma', 'Tailwind', 'Clerk'],
            link: 'https://mandarin-learning-app-ivory.vercel.app/'
        },
        {
            title: 'GrAIdescope - HackOHIO 2025',
            description: 'By uploading an answer key and rubric, GrAIdescope can grade the student assignments and provide feedback.',
            tech: ['React', 'Vite', 'Flask', 'PostgreSQL', 'NGINX', 'Amazon S3', 'Docker', 'OpenAI'],
            link: 'https://github.com/25kgozon/HackOHIO25'
        }

    ];

    const displayProjects = activeTab === 'projects' ? mainProjects : sideProjects;

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="text-gradient">Projects</h2>

                <div className="tabs-container">
                    <button
                        className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        Main Projects
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'side-projects' ? 'active' : ''}`}
                        onClick={() => setActiveTab('side-projects')}
                    >
                        Side Projects
                    </button>
                </div>

                <div className="grid grid-2 project-list">
                    {displayProjects.map((project, index) => (
                        <div key={index} className="project-card glass-effect">
                            <h3>{project.title}</h3>
                            <p className="text-secondary" style={{ margin: '1rem 0' }}>{project.description}</p>
                            <div className="project-tech" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                {project.tech.map(t => (
                                    <span key={t} className="tech-tag">{t}</span>
                                ))}
                            </div>
                            <a href={project.link} className="text-gradient" style={{ fontWeight: '600' }}>Visit →</a>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .tabs-container {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          background: var(--bg-card);
          padding: 0.5rem;
          border-radius: 12px;
          width: fit-content;
        }
        .tab-btn {
          padding: 0.8rem 2rem;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .tab-btn.active {
          background: var(--accent-primary);
          color: white;
          box-shadow: 0 4px 12px hsla(250, 89%, 67%, 0.3);
        }
        .project-card {
          padding: 2.5rem;
          border-radius: 20px;
          transition: var(--transition-fast);
        }
        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-primary);
        }
        .tech-tag {
          font-size: 0.8rem;
          padding: 0.3rem 0.8rem;
          background: hsla(210, 40%, 98%, 0.05);
          border-radius: 20px;
          color: var(--accent-secondary);
        }
      `}} />
        </section>
    );
};

export default Projects;
