import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, typingRoles } from '../data/portfolioData';

export default function Hero() {
  const titles = typingRoles && typingRoles.length > 0 ? typingRoles : [
    'Java Full Stack Developer',
    'Java Frontend Developer',
    'Spring Boot Developer',
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [titles.length]);

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        scrollMarginTop: 68,
        position: 'relative',
        overflow: 'hidden',
        background: '#080B12',
        color: '#F8FAFC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'calc(68px + clamp(16px, 2.5vh, 32px))',
        paddingBottom: 'clamp(16px, 2.5vh, 32px)',
        paddingLeft: 'clamp(16px, 3.5vw, 40px)',
        paddingRight: 'clamp(16px, 3.5vw, 40px)',
        boxSizing: 'border-box',
      }}
    >
      {/* ─── Subtle Background Grid ────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ─── Ambient Blue Glow (Restrained) ───────────────────── */}
      <div
        style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          top: '-10%',
          left: '-5%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.14) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '480px',
          height: '480px',
          bottom: '-10%',
          right: '-5%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.10) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ─── Centered Two-Column Hero Content ──────────────────── */}
      <div className="hero-centered-container">
        <div className="hero-grid">
          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN — Circular Profile Photo
          ═══════════════════════════════════════════════════════ */}
          <motion.div
            className="hero-photo-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="hero-profile-frame">
              <img
                src={personalInfo.profileImage || '/assets/profile/profile.jpeg'}
                alt="Udhaya P"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN — Intro, Titles, Bio & Actions
          ═══════════════════════════════════════════════════════ */}
          <motion.div
            className="hero-text-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Status Pill / Availability Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '7px 16px',
                borderRadius: 100,
                background: 'rgba(37, 99, 235, 0.12)',
                border: '1px solid rgba(96, 165, 250, 0.28)',
                marginBottom: 16,
                width: 'fit-content',
                userSelect: 'none',
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#60A5FA',
                  boxShadow: '0 0 8px #60A5FA',
                }}
              />
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#60A5FA',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Available for Opportunities
              </span>
            </div>

            {/* Name Heading (Target 64-76px on desktop, single line) */}
            <h1
              className="hero-name-heading"
              style={{
                margin: 0,
                fontWeight: 900,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                color: '#F8FAFC',
              }}
            >
              Udhaya <span style={{ color: '#60A5FA' }}>P</span>
            </h1>

            {/* Rotating Professional Title (Target 25-30px on desktop) */}
            <div
              style={{
                minHeight: 48,
                display: 'flex',
                alignItems: 'center',
                marginTop: 12,
                marginBottom: 20,
                overflow: 'hidden',
              }}
            >
              <span
                style={{
                  color: '#2563EB',
                  marginRight: 12,
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  userSelect: 'none',
                }}
              >
                ›
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={titles[currentTitleIndex]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  className="hero-title-text"
                  style={{
                    fontWeight: 700,
                    color: '#60A5FA',
                    letterSpacing: '-0.015em',
                    lineHeight: 1.25,
                  }}
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Introductory Paragraph (Target 17-19px on desktop with bold tech accents) */}
            <p
              className="hero-paragraph"
              style={{
                color: '#CBD5E1',
                lineHeight: 1.72,
                maxWidth: 720,
                margin: '0 0 30px 0',
              }}
            >
              Passionate Computer Science Engineering student with hands-on experience in{' '}
              <strong style={{ color: '#F8FAFC', fontWeight: 700 }}>Java Full Stack Development</strong>,{' '}
              <strong style={{ color: '#60A5FA', fontWeight: 700 }}>Spring Boot</strong>,{' '}
              <strong style={{ color: '#F8FAFC', fontWeight: 700 }}>MySQL</strong>, REST APIs,{' '}
              <strong style={{ color: '#60A5FA', fontWeight: 700 }}>React</strong>, and enterprise applications.
              Dedicated to building scalable software with clean architecture and robust engineering.
            </p>

            {/* Action Row: Social Media Icons + Blue Resume Button */}
            <div
              className="hero-actions-row"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="hero-social-icon-btn"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="hero-social-icon-btn"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                title="LeetCode Profile"
                className="hero-social-icon-btn"
              >
                <SiLeetcode size={21} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                title="View Resume in New Tab"
                className="hero-btn-primary hero-resume-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  height: 48,
                  padding: '0 22px',
                  borderRadius: 12,
                  fontSize: '0.98rem',
                  fontWeight: 650,
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                  boxShadow: '0 4px 18px rgba(37, 99, 235, 0.40)',
                  border: '1px solid rgba(96, 165, 250, 0.35)',
                  transition: 'all 0.25s ease',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                }}
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Responsive Grid & Centering Styles ─────────────────── */}
      <style>{`
        .hero-centered-container {
          width: 100%;
          max-width: 1200px;
          margin-inline: auto;
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 380px minmax(0, 1fr);
          align-items: center;
          justify-content: center;
          gap: clamp(36px, 4.5vw, 64px);
          width: 100%;
          max-width: 1140px;
          margin-inline: auto;
        }

        .hero-photo-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-text-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .hero-name-heading {
          font-size: clamp(3.2rem, 5vw, 4.6rem);
          white-space: nowrap;
        }

        .hero-title-text {
          font-size: clamp(1.45rem, 2.1vw, 1.85rem);
        }

        .hero-paragraph {
          font-size: clamp(1.06rem, 1.25vw, 1.18rem);
        }

        .hero-btn-primary:hover {
          background: linear-gradient(135deg, #1D4ED8, #1E40AF) !important;
          box-shadow: 0 6px 28px rgba(37, 99, 235, 0.55) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 1280px) {
          .hero-grid {
            grid-template-columns: 340px minmax(0, 1fr);
            gap: 40px;
            max-width: 1040px;
          }
          .hero-profile-frame {
            width: 340px;
            height: 340px;
          }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 300px minmax(0, 1fr);
            gap: 32px;
            max-width: 920px;
          }
          .hero-profile-frame {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            text-align: center;
            max-width: 580px;
          }

          .hero-text-col {
            align-items: center;
          }

          .hero-name-heading {
            white-space: normal;
            font-size: 2.8rem;
          }

          .hero-title-text {
            font-size: 1.35rem;
          }

          .hero-paragraph {
            font-size: 1rem;
            text-align: center;
            margin-inline: auto;
          }

          .hero-profile-frame {
            width: 260px;
            height: 260px;
            margin: 0 auto;
          }

          .hero-actions-row {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-profile-frame {
            width: 220px;
            height: 220px;
          }
          .hero-name-heading {
            font-size: 2.25rem;
          }
          .hero-actions-row {
            justify-content: center;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}