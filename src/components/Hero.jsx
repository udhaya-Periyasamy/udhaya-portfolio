import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Eye, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa6';

import { personalInfo, typingRoles } from '../data/portfolioData';
import { fadeUp, fadeRight } from './AnimationUtils';


// ============================================================
// SOCIAL LINKS
// ============================================================

const socialLinks = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/udhaya-Periyasamy',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/udhaya-periyasamy',
  },
  {
    icon: FaCode,
    label: 'LeetCode',
    href: 'https://leetcode.com/u/udhaya__16/',
  },
];


// ============================================================
// TYPING ANIMATION
// ============================================================

const typingSequence = typingRoles.flatMap((role) => [
  role,
  2000,
]);


// ============================================================
// HERO
// ============================================================

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      {/* Grid background
          IMPORTANT:
          pointerEvents: none prevents this layer from
          blocking buttons and links.
      */}
      <div
        className="hero-bg-grid"
        style={{
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Left glow */}
      <div
        className="hero-bg-glow blob"
        style={{
          top: '-10%',
          left: '-10%',
          animationDelay: '0s',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Right glow */}
      <div
        className="hero-bg-glow blob"
        style={{
          bottom: '-10%',
          right: '-10%',
          animationDelay: '3s',
          opacity: 0.08,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />


      {/* ======================================================
          MAIN CONTENT
          IMPORTANT:
          position + zIndex makes sure the content is above
          background layers.
      ====================================================== */}

      <div
        className="container"
        style={{
          paddingTop: 120,
          paddingBottom: 100,
          position: 'relative',
          zIndex: 10,
        }}
      >

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 64,
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >


          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              position: 'relative',
              zIndex: 20,
            }}
          >

            {/* ------------------------------------------------
                NAME
            ------------------------------------------------ */}

            <motion.h1
              className="hero-name"
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              animate="visible"
            >
              UDHAYA{' '}
              <span className="hero-name-accent">
                P
              </span>
            </motion.h1>


            {/* ------------------------------------------------
                JOB TITLE
            ------------------------------------------------ */}

            <motion.p
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              animate="visible"
              style={{
                fontSize:
                  'clamp(1.1rem, 2.5vw, 1.35rem)',
                color: '#60a5fa',
                fontWeight: 600,
                letterSpacing: '0.02em',
                marginTop: 4,
              }}
            >
              Java Full Stack Developer
            </motion.p>


            {/* ------------------------------------------------
                TYPING TEXT
            ------------------------------------------------ */}

            <motion.div
              variants={fadeUp}
              custom={0.25}
              initial="hidden"
              animate="visible"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginTop: -4,
                marginBottom: 8,
              }}
            >

              <span
                style={{
                  color: '#64748b',
                  fontSize: '0.95rem',
                  fontFamily: 'monospace',
                }}
              >
                &gt;
              </span>

              <span
                className="hero-typing"
                style={{
                  fontSize: '1rem',
                  color: '#94a3b8',
                  fontWeight: 500,
                }}
              >
                <TypeAnimation
                  sequence={typingSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>

            </motion.div>


            {/* ------------------------------------------------
                DESCRIPTION
            ------------------------------------------------ */}

            <motion.p
              className="hero-desc"
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: '1.05rem',
                color: '#94a3b8',
                lineHeight: 1.8,
                maxWidth: '540px',
                marginTop: 4,
                marginBottom: 20,
              }}
            >
              {personalInfo.bio}
            </motion.p>


            {/* =================================================
                VIEW RESUME
                ONLY ONE BUTTON
            ================================================= */}

            <motion.div
              variants={fadeUp}
              custom={0.4}
              initial="hidden"
              animate="visible"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                marginBottom: 8,
                position: 'relative',
                zIndex: 30,
              }}
            >

              <motion.button
                type="button"
                className="btn-outline"
                onClick={() => {
                  setShowResume(true);
                }}
                aria-label="View Udhaya P resume"
                style={{
                  background:
                    'rgba(255, 255, 255, 0.03)',
                  border:
                    '1.5px solid rgba(255, 255, 255, 0.15)',
                  color: '#e2e8f0',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 30,
                  pointerEvents: 'auto',
                }}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                  borderColor: '#2563EB',
                  color: '#60a5fa',
                  background:
                    'rgba(37, 99, 235, 0.08)',
                  boxShadow:
                    '0 8px 30px rgba(37, 99, 235, 0.20)',
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 12,
                }}
              >
                <Eye size={18} />
                View Resume
              </motion.button>

            </motion.div>


            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <motion.div
              variants={fadeUp}
              custom={0.45}
              initial="hidden"
              animate="visible"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                position: 'relative',
                zIndex: 30,
              }}
            >

              {socialLinks.map(
                ({ icon: Icon, label, href }) => (

                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    aria-label={`Open ${label} profile`}
                    title={`Open ${label}`}
                    style={{
                      background:
                        'rgba(255, 255, 255, 0.03)',
                      border:
                        '1.5px solid rgba(255, 255, 255, 0.15)',
                      color: '#e2e8f0',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      position: 'relative',
                      zIndex: 30,
                      pointerEvents: 'auto',

                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.04,
                      borderColor: '#2563EB',
                      color: '#60a5fa',
                      background:
                        'rgba(37, 99, 235, 0.08)',
                      boxShadow:
                        '0 8px 30px rgba(37, 99, 235, 0.20)',
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 12,
                    }}
                  >

                    <Icon size={18} />

                    <span>
                      {label}
                    </span>

                  </motion.a>

                )
              )}

            </motion.div>

          </div>


          {/* ==================================================
              RIGHT — PROFILE PHOTO
          ================================================== */}

          <motion.div
            variants={fadeRight}
            custom={0.3}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10,
            }}
          >

            <div
              style={{
                position: 'relative',
                zIndex: 10,
              }}
            >

              {/* Soft blue glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
                  filter: 'blur(12px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Profile ring */}
              <div
                className="profile-ring"
                style={{
                  boxShadow:
                    '0 20px 40px rgba(10, 25, 47, 0.35)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >

                <div className="profile-img-wrapper">

                  <img
                    src={personalInfo.profileImage}
                    alt="Udhaya P"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.35s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>


      {/* ======================================================
          RESUME MODAL
      ====================================================== */}

      <AnimatePresence>

        {showResume && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => {
              setShowResume(false);
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background:
                'rgba(2, 6, 23, 0.88)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
            }}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{
                width: 'min(1000px, 95vw)',
                height: '90vh',
                background: '#ffffff',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow:
                  '0 25px 80px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >

              {/* Modal header */}

              <div
                style={{
                  height: 56,
                  minHeight: 56,
                  background: '#0A192F',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 18px',
                }}
              >

                <span
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                  }}
                >
                  Udhaya P — Resume
                </span>


                <button
                  type="button"
                  onClick={() => {
                    setShowResume(false);
                  }}
                  aria-label="Close resume"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    border:
                      '1px solid rgba(255,255,255,0.15)',
                    background:
                      'rgba(255,255,255,0.08)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <X size={20} />
                </button>

              </div>


              {/* PDF */}

              <iframe
                src={personalInfo.resumeUrl}
                title="Udhaya P Resume"
                style={{
                  width: '100%',
                  flex: 1,
                  border: 'none',
                  background: '#f1f5f9',
                }}
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}
