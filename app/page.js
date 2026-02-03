import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

const Footer = () => (
  <footer className="section" style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p className="text-secondary">© 2026 Jason Seh. Built with Next.js & React.</p>
      <div className="social-links" style={{ display: 'flex', gap: '2rem' }}>
        <a href="https://github.com/jassehxia" className="text-secondary">GitHub</a>
        <a href="https://linkedin.com/in/jason-seh" className="text-secondary">LinkedIn</a>
      </div>
    </div>
    <style dangerouslySetInnerHTML={{
      __html: `
      @media (max-width: 768px) {
        footer .container { flex-direction: column; gap: 2rem; text-align: center; }
      }
    `}} />
  </footer>
);
