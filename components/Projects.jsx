"use client";
import React, { useState } from 'react';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('projects');

    const mainProjects = [
        {
            title: 'Street Level',
            description: 'An AI-powered Mandarin learning app that uses user personas and personalized feedback to help users learn Chinese.',
            tech: ['Next.js', 'Postgres', 'Prisma', 'Tailwind', 'Clerk'],
            link: 'https://mandarin-learning-app-ivory.vercel.app/'
        },
        {
            title: 'LectureGraph',
            description: 'Using Whisper and OpenAI, LectureGraph creates a visual representation of lectures videos via interconnected nodes and edges.',
            tech: ['Next.js', 'Postgres', 'Prisma', 'Cloudflare R2', 'FastAPI', 'Whisper', 'OpenAI'],
            link: 'https://github.com/JassehXia/LectureGraph'
        },
        {
            title: 'GrAIdescope - HackOHIO 2025',
            description: 'By uploading an answer key and rubric, GrAIdescope can grade the student assignments and provide feedback.',
            tech: ['React', 'Vite', 'Flask', 'PostgreSQL', 'NGINX', 'Amazon S3', 'Docker', 'OpenAI'],
            link: 'https://github.com/25kgozon/HackOHIO25'
        }
    ];

    const sideProjects = [
        {
            title: 'Food Recommendation System',
            description: 'A food recommendation system that uses machine learning to recommend food to users.',
            tech: ['Next.js', 'PyTorch', 'FastAPI', 'Python', 'Pandas', 'Scikit-learn', 'GitHub Actions'],
            link: 'https://github.com/JassehXia/tender-v2'
        },
        {
            title: 'StudyApp',
            description: 'A full-stack application that would turn uploaded pdfs into flashcards and quizzes.',
            tech: ['Next.js', 'Postgres', 'Prisma', 'Tailwind', 'Clerk'],
            link: 'https://github.com/JassehXia/study-app'
        },
        {
            title: 'AI Character Chatbot',
            description: 'Created a chatbot that can talk like any character by using OpenAI API.',
            tech: ['React.js', 'FastAPI', 'OpenAI API', 'Tailwind'],
            link: 'https://github.com/JassehXia/character-chatbot'
        },
        {
            title: 'Tender',
            description: 'A simple full stack application that\'s  like Tinder, but for food. Supports friending and auth.',
            tech: ['React.js', 'MongoDB', 'Node.js', 'Express.js', 'HTML', 'CSS'],
            link: 'https://github.com/JassehXia/tender'
        }
    ];

    const displayProjects = activeTab === 'projects' ? mainProjects : sideProjects;

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="text-gradient">Relevant Experiences</h2>

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
