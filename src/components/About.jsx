import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function About() {
  const [logoErrors, setLogoErrors] = useState({});

  return (
    <section
      id="education"
      className="section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#080B12',
        color: '#F8FAFC',
        paddingTop: 'clamp(56px, 8vh, 88px)',
        paddingBottom: 'clamp(56px, 8vh, 88px)',
        boxSizing: 'border-box',
      }}
    >
      {/* ─── Subtle Background Grid & Ambient Lighting ────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '560px',
          height: '560px',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.10) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '920px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        {/* ─── Centered Education Section Header ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(36px, 5.5vw, 56px)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 14,
            }}
          >
            <GraduationCap
              size={42}
              style={{
                color: '#60A5FA',
                filter: 'drop-shadow(0 0 14px rgba(96, 165, 250, 0.45))',
              }}
            />
            <h2
              className="education-heading"
              style={{
                margin: 0,
                color: '#FFFFFF',
                fontWeight: 800,
                letterSpacing: '-0.025em',
              }}
            >
              Education
            </h2>
          </div>

          <p
            className="education-subtitle"
            style={{
              margin: '14px auto 0 auto',
              color: '#A7B2C5',
              maxWidth: 680,
              lineHeight: 1.65,
            }}
          >
            My academic journey has built a strong foundation in computer science, software engineering, and problem-solving.
          </p>
        </motion.div>

        {/* ─── Centered Vertical Education Cards Column ───────────────── */}
        <div className="education-cards-column">
          {education.map((item, index) => {
            const IconComponent = index === 0 ? GraduationCap : School;
            return (
              <motion.div
                key={item.id}
                variants={cardVariant}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="education-card"
              >
                {/* Left: Institution Logo / Emblem Container */}
                <div className="education-logo-box">
                  {item.logo && !logoErrors[item.id] ? (
                    <img
                      src={item.logo}
                      alt={item.alt || `${item.institution} logo`}
                      className="education-logo-img"
                      onError={() =>
                        setLogoErrors((prev) => ({ ...prev, [item.id]: true }))
                      }
                    />
                  ) : (
                    <IconComponent size={28} color="#60A5FA" />
                  )}
                </div>

                {/* Right: Academic Information */}
                <div className="education-content">
                  {/* Top Row: Institution Name & Status */}
                  <div className="education-top-row">
                    <h3 className="education-institution">{item.institution}</h3>
                    <span className="education-status-badge">{item.status}</span>
                  </div>

                  {/* Degree / Qualification */}
                  <div className="education-degree">{item.degree}</div>

                  {/* Meta Details Row: Period, Location, and Score */}
                  <div className="education-meta-row">
                    <div className="education-meta-group">
                      <div className="education-meta-item">
                        <Calendar size={15} color="#60A5FA" />
                        <span>{item.duration}</span>
                      </div>
                      <span className="education-meta-dot">•</span>
                      <div className="education-meta-item">
                        <MapPin size={15} color="#60A5FA" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="education-score-badge">
                      <span className="education-score-label">
                        {item.scoreLabel || (item.cgpa ? 'CGPA' : 'Percentage')}:
                      </span>
                      <span className="education-score-value">
                        {item.score || item.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─── Scoped Education Section Styles ─────────────────────────── */}
      <style>{`
        .education-heading {
          font-size: clamp(2.4rem, 4.2vw, 3.4rem);
        }

        .education-subtitle {
          font-size: clamp(1.02rem, 1.3vw, 1.22rem);
        }

        .education-cards-column {
          display: flex;
          flex-direction: column;
          gap: clamp(26px, 3.8vw, 38px);
          width: 100%;
          max-width: 820px;
          margin-inline: auto;
          box-sizing: border-box;
        }

        .education-card {
          background: rgba(13, 19, 32, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(96, 165, 250, 0.20);
          border-radius: 16px;
          padding: clamp(20px, 3vw, 28px);
          display: flex;
          align-items: center;
          gap: clamp(16px, 2.5vw, 24px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-sizing: border-box;
        }

        .education-card:hover {
          border-color: rgba(96, 165, 250, 0.50);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6), 0 0 22px rgba(37, 99, 235, 0.22);
          transform: translateY(-3px);
        }

        .education-logo-box {
          width: 68px;
          height: 68px;
          border-radius: 14px;
          background: #FFFFFF;
          border: 1.5px solid rgba(96, 165, 250, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 6px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
          transition: all 0.3s ease;
          overflow: hidden;
          box-sizing: border-box;
        }

        .education-card:hover .education-logo-box {
          border-color: rgba(96, 165, 250, 0.65);
          box-shadow: 0 0 18px rgba(37, 99, 235, 0.35);
          transform: scale(1.04);
        }

        .education-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .education-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .education-top-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .education-institution {
          margin: 0;
          color: #FFFFFF;
          font-weight: 750;
          font-size: clamp(1.15rem, 1.6vw, 1.35rem);
          line-height: 1.35;
          letter-spacing: -0.015em;
        }

        .education-status-badge {
          display: inline-block;
          background: rgba(37, 99, 235, 0.14);
          color: #60A5FA;
          font-size: 0.76rem;
          font-weight: 650;
          padding: 3px 12px;
          border-radius: 100px;
          border: 1px solid rgba(96, 165, 250, 0.28);
          white-space: nowrap;
          letter-spacing: 0.02em;
        }

        .education-degree {
          color: #E2E8F0;
          font-weight: 600;
          font-size: clamp(0.98rem, 1.2vw, 1.12rem);
          margin-top: 6px;
          margin-bottom: 14px;
          line-height: 1.45;
        }

        .education-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid rgba(96, 165, 250, 0.12);
        }

        .education-meta-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .education-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #A7B2C5;
          font-size: clamp(0.82rem, 1vw, 0.88rem);
        }

        .education-meta-dot {
          color: rgba(96, 165, 250, 0.4);
          font-size: 0.9rem;
          user-select: none;
        }

        .education-score-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(96, 165, 250, 0.08);
          border: 1px solid rgba(96, 165, 250, 0.22);
          padding: 4px 12px;
          border-radius: 8px;
        }

        .education-score-label {
          color: #A7B2C5;
          font-weight: 600;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .education-score-value {
          color: #60A5FA;
          font-weight: 800;
          font-size: 0.98rem;
        }

        @media (max-width: 600px) {
          .education-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .education-logo-box {
            width: 56px;
            height: 56px;
            border-radius: 12px;
            padding: 5px;
          }

          .education-top-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }

          .education-meta-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}