"use client";
import React from 'react';

const Technologies = () => {
  const techs = [
    { name: 'JavaScript', icon: '/tech/javascript.svg' },
    { name: 'TypeScript', icon: '/tech/typescript.svg' },
    { name: 'Python', icon: '/tech/python.png' },
    { name: 'React', icon: '/tech/react.svg' },
    { name: 'Next.js', icon: '/tech/next.png' },
    { name: 'Node.js', icon: '/tech/nodejs.png' },
    { name: 'FastAPI', icon: '/tech/fastapi.png' },
    { name: 'Postgres', icon: '/tech/postgres.png' },
    { name: 'Prisma', icon: '/tech/prisma.png' },
    { name: 'MongoDB', icon: '/tech/mongodb.png' },
    { name: 'Cloudflare', icon: '/tech/cloudflare.png' },
    { name: 'Tailwind', icon: '/tech/tailwind.png' },
    { name: 'Git', icon: '/tech/git.svg' },
  ];

  // Split into two equal halves
  const half = Math.ceil(techs.length / 2);
  const firstHalf = techs.slice(0, half);
  const secondHalf = techs.slice(half);

  const row1 = [...firstHalf, ...firstHalf]; // Duplicate for seamless scroll
  const row2 = [...secondHalf, ...secondHalf];

  return (
    <section id="technologies" className="section" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient">Technologies</h2>
      </div>

      <div className="marquee-container">
        <div className="marquee-row scroll-right">
          {row1.map((tech, index) => (
            <div key={`${tech.name}-1-${index}`} className="tech-pill glass-effect">
              <img src={tech.icon} alt={tech.name} className="tech-icon-mid" onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=' + tech.name[0] }} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="marquee-row scroll-left">
          {row2.map((tech, index) => (
            <div key={`${tech.name}-2-${index}`} className="tech-pill glass-effect">
              <img src={tech.icon} alt={tech.name} className="tech-icon-mid" onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=' + tech.name[0] }} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .marquee-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }
        .marquee-row {
          display: flex;
          gap: 2rem;
          width: max-content;
        }
        .tech-pill {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1.2rem 2.5rem;
          border-radius: 16px;
          white-space: nowrap;
          transition: var(--transition-fast);
        }
        .tech-pill:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent-primary);
          transform: translateY(-5px);
        }
        .tech-icon-mid {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
        .tech-pill span {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .scroll-right {
          animation: slide-right 30s linear infinite;
        }
        .scroll-left {
          animation: slide-left 30s linear infinite;
        }

        @keyframes slide-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slide-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .marquee-container:hover .marquee-row {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .tech-pill { padding: 1rem 1.8rem; }
          .tech-icon-mid { width: 28px; height: 28px; }
          .tech-pill span { font-size: 1rem; }
        }
      `}} />
    </section>
  );
};

export default Technologies;
