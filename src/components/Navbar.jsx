import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Internships', href: '#internships' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 120) {
        setActive('about');
        return;
      }

      const headerOffset = 80;
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - headerOffset) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    if (!isHome) {
      window.location.href = '/' + href;
      return;
    }
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 68;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-blur' : 'navbar-solid'}`}>
      <div className="navbar-inner">
        {/* ─── Far Left: Brand Logo & Name ──────────────────────── */}
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ display: 'flex', alignItems: 'center', gap: 11 }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: 'rgba(37,99,235,0.20)',
                border: '1.5px solid rgba(96,165,250,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.95rem',
                color: '#60A5FA',
                letterSpacing: '-0.5px',
              }}
            >
              UP
            </div>
            <span className="navbar-brand-name">
              Udhaya P
            </span>
          </motion.div>
        </Link>

        {/* ─── Far Right: All 7 Navigation Links ───────────────── */}
        <motion.nav
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="nav-links-container"
        >
          {isHome &&
            navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`nav-item-btn ${isActive ? 'nav-item-active' : ''}`}
                >
                  {link.label}
                </button>
              );
            })}
        </motion.nav>
      </div>

      <style>{`
        .navbar-inner {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 0 clamp(20px, 3.5vw, 44px);
          box-sizing: border-box;
          gap: 16px;
        }

        .navbar-brand-name {
          color: #FFFFFF;
          font-weight: 800;
          font-size: clamp(1.2rem, 1.6vw, 1.35rem);
          font-family: var(--font-main);
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .nav-links-container {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1vw, 14px);
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .nav-item-btn {
          background: transparent;
          color: #FFFFFF;
          border: 1px solid transparent;
          cursor: pointer;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 15.5px;
          font-weight: 650;
          font-family: var(--font-main);
          transition: all 0.22s ease;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }

        .nav-item-btn:hover {
          color: #60A5FA;
          background: rgba(37, 99, 235, 0.10);
        }

        .nav-item-active {
          background: rgba(37, 99, 235, 0.18) !important;
          color: #60A5FA !important;
          border: 1px solid rgba(96, 165, 250, 0.35) !important;
          font-weight: 700 !important;
        }

        @media (max-width: 900px) {
          .nav-item-btn {
            font-size: 14.5px;
            padding: 6px 11px;
          }
        }

        @media (max-width: 768px) {
          .navbar-inner {
            padding: 0 16px;
          }
          .navbar-brand-name {
            font-size: 1.15rem;
          }
          .nav-links-container {
            overflow-x: auto;
            flex-wrap: nowrap;
            gap: 4px;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            max-width: calc(100vw - 160px);
          }
          .nav-links-container::-webkit-scrollbar {
            display: none;
          }
          .nav-item-btn {
            padding: 5px 10px;
            font-size: 13.5px;
            font-weight: 600;
          }
        }
      `}</style>
    </header>
  );
}
