import { Link } from 'react-router-dom';
import { Mail, Download, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

const footerLinks = [
  { label: 'GitHub', href: personalInfo.github, icon: FaGithub, external: true },
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: FaLinkedin, external: true },
  { label: 'LeetCode', href: personalInfo.leetcode, icon: FaCode, external: true },
  { label: 'Resume', href: personalInfo.resumeUrl, icon: Download, external: false },
  { label: 'Contact', href: '#contact', icon: Mail, external: false },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleFooterLink = (link) => {
    if (!link.external && link.href.startsWith('#')) {
      const el = document.getElementById(link.href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          
          {/* Brand */}
          <div>
            <button onClick={scrollToTop} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'rgba(37,99,235,0.18)',
                border: '1.5px solid rgba(96,165,250,0.30)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '0.9rem', color: '#60A5FA',
              }}>
                UP
              </div>
              <span style={{ color: '#F8FAFC', fontWeight: 800, fontSize: '1.05rem' }}>
                Udhaya <span style={{ color: '#60A5FA' }}>P</span>
              </span>
            </button>

            <p style={{ color: '#A7B2C5', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 260 }}>
              "{personalInfo.quote}"
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[
                { href: personalInfo.github, icon: FaGithub, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
                { href: personalInfo.leetcode, icon: FaCode, label: 'LeetCode' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  style={{
                    width: 36, height: 36,
                    borderRadius: 9,
                    background: 'rgba(13, 19, 32, 0.8)',
                    border: '1px solid rgba(96, 165, 250, 0.20)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#A7B2C5',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.2)'; e.currentTarget.style.color = '#60A5FA'; e.currentTarget.style.borderColor = '#60A5FA'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(13, 19, 32, 0.8)'; e.currentTarget.style.color = '#A7B2C5'; e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.20)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {footerLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#A7B2C5', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s', width: 'fit-content' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
                    onMouseLeave={e => e.currentTarget.style.color = '#A7B2C5'}
                  >
                    <link.icon size={13} />
                    {link.label}
                    <ArrowUpRight size={11} />
                  </a>
                ) : link.href.startsWith('#') ? (
                  <button
                    key={link.label}
                    onClick={() => handleFooterLink(link)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#A7B2C5', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}
                    onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
                    onMouseLeave={e => e.currentTarget.style.color = '#A7B2C5'}
                  >
                    <link.icon size={13} />
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    download="Udhaya_P_Resume.pdf"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#A7B2C5', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s', width: 'fit-content' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
                    onMouseLeave={e => e.currentTarget.style.color = '#A7B2C5'}
                  >
                    <link.icon size={13} />
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={`mailto:${personalInfo.email}`} style={{ color: '#A7B2C5', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
                onMouseLeave={e => e.currentTarget.style.color = '#A7B2C5'}
              >
                {personalInfo.email}
              </a>
              <span style={{ color: '#A7B2C5', fontSize: '0.875rem' }}>{personalInfo.phone}</span>
              <span style={{ color: '#A7B2C5', fontSize: '0.875rem' }}>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(96, 165, 250, 0.15)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ color: '#A7B2C5', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Udhaya P. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
