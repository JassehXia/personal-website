"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar glass-effect">
      <div className="container nav-content">
        <Link href="/" className="logo text-gradient">Portfolio</Link>
        <ul className="nav-links">
          <li><Link href="/#hero">About</Link></li>
          <li><Link href="/#technologies">Skills</Link></li>
          <li><Link href="/#projects">Work</Link></li>
          <li><Link href="/#resume">Resume</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: var(--transition-fast);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
        }
        .nav-links a {
          font-weight: 500;
          color: var(--text-secondary);
        }
        .nav-links a:hover {
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
