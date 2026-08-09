import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Internships', href: '#internships' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    if (!isHome) {
      window.location.href = '/' + href;
      return;
    }
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-blur' : 'navbar-solid'}`}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'rgba(37,99,235,0.2)',
                border: '1.5px solid rgba(37,99,235,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: '0.95rem', color: '#60a5fa',
                letterSpacing: '-0.5px',
              }}>
                UP
              </div>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.3px' }}>
                Udhaya<span style={{ color: '#60a5fa' }}>.dev</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', alignItems: 'center', gap: 4 }}
            className="hidden md:flex"
          >
            {isHome && navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: isActive ? 'rgba(37,99,235,0.15)' : 'transparent',
                    color: isActive ? '#60a5fa' : '#94a3b8',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '6px 14px',
                    borderRadius: 8,
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 500,
                    fontFamily: 'inherit',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { if (!isActive) e.target.style.color = '#e2e8f0'; }}
                  onMouseLeave={e => { if (!isActive) e.target.style.color = '#94a3b8'; }}
                >
                  {link.label}
                </button>
              );
            })}
          </motion.div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <Download size={14} />
              <span className="hidden sm:inline">Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#e2e8f0',
                borderRadius: 8,
                padding: '6px 8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginLeft: 8,
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              background: 'rgba(10,25,47,0.97)',
              backdropFilter: 'blur(20px)',
              zIndex: 999,
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#94a3b8',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    fontFamily: 'inherit',
                    textAlign: 'left',
                    padding: '12px 0',
                    cursor: 'pointer',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
