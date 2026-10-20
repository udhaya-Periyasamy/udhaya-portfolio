import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, CheckCircle, Lightbulb, BookOpen, Building2 } from 'lucide-react';
import { internships } from '../data/portfolioData';
import { PageTransition, fadeUp } from '../components/AnimationUtils';

export default function InternshipDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logoError, setLogoError] = useState(false);
  const intern = internships.find(i => i.id === id);

  if (!intern) {
    return (
      <PageTransition>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <h1 style={{ color: '#F8FAFC', fontWeight: 800, fontSize: '2rem' }}>Internship not found</h1>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* ─── Hero Banner ──────────────────────────────────────── */}
      <div className="detail-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="btn-ghost"
            style={{ color: '#94a3b8', marginBottom: 28, padding: 0, display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
            {/* Company Logo */}
            <div style={{
              width: 72, height: 72, borderRadius: 16,
              background: '#FFFFFF',
              border: '1.5px solid rgba(96,165,250,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 8,
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              {!logoError && intern.logo ? (
                <img
                  src={intern.logo}
                  alt={intern.alt || `${intern.company} logo`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Building2 size={32} color="#2563EB" />
              )}
            </div>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                {intern.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(37,99,235,0.15)',
                    border: '1px solid rgba(37,99,235,0.3)',
                    color: '#93c5fd',
                    fontSize: '0.75rem', fontWeight: 600,
                    padding: '3px 10px', borderRadius: 6,
                  }}>{tag}</span>
                ))}
              </div>
              <h1 style={{ color: '#FFFFFF', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', lineHeight: 1.1, marginBottom: 8 }}>
                {intern.company}
              </h1>
              <p style={{ color: '#60a5fa', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{intern.role}</p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: '0.85rem' }}>
                  <Calendar size={14} />{intern.duration}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: '0.85rem' }}>
                  <MapPin size={14} />{intern.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Content ──────────────────────────────────────────── */}
      <div className="container" style={{ padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: 40, alignItems: 'start' }}>
          
          {/* Main Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Overview */}
            <motion.div className="card" style={{ padding: '28px 28px' }} variants={fadeUp} custom={0} initial="hidden" animate="visible">
              <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 14 }}>Company Overview</h2>
              <p style={{ color: '#A7B2C5', lineHeight: 1.75 }}>{intern.overview}</p>
            </motion.div>

            {/* Project */}
            <motion.div className="card" style={{ padding: '28px 28px' }} variants={fadeUp} custom={0.05} initial="hidden" animate="visible">
              <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 14 }}>Project</h2>
              <div style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.12)', borderRadius: 12, padding: '16px 18px', marginBottom: 14 }}>
                <p style={{ color: '#2563EB', fontWeight: 700, fontSize: '0.95rem', marginBottom: 6 }}>{intern.project.title}</p>
                <p style={{ color: '#A7B2C5', fontSize: '0.875rem', lineHeight: 1.7 }}>{intern.project.description}</p>
              </div>
              {intern.problem && (
                <>
                  <h3 style={{ fontWeight: 700, color: '#F8FAFC', fontSize: '0.9rem', marginBottom: 8, marginTop: 16 }}>Problem</h3>
                  <p style={{ color: '#A7B2C5', fontSize: '0.875rem', lineHeight: 1.7 }}>{intern.problem}</p>
                </>
              )}
              {intern.solution && (
                <>
                  <h3 style={{ fontWeight: 700, color: '#F8FAFC', fontSize: '0.9rem', marginBottom: 8, marginTop: 16 }}>Solution</h3>
                  <p style={{ color: '#A7B2C5', fontSize: '0.875rem', lineHeight: 1.7 }}>{intern.solution}</p>
                </>
              )}
            </motion.div>

            {/* Responsibilities */}
            {intern.responsibilities && (
              <motion.div className="card" style={{ padding: '28px 28px' }} variants={fadeUp} custom={0.1} initial="hidden" animate="visible">
                <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 16 }}>Responsibilities</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {intern.responsibilities.map((r, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#A7B2C5', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      <CheckCircle size={15} color="#2563EB" style={{ marginTop: 2, flexShrink: 0 }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Features (for Approtech) */}
            {intern.features && (
              <motion.div className="card" style={{ padding: '28px 28px' }} variants={fadeUp} custom={0.1} initial="hidden" animate="visible">
                <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 16 }}>Key Features</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {intern.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#A7B2C5', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      <CheckCircle size={15} color="#2563EB" style={{ marginTop: 2, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Key Contributions */}
            {intern.keyContributions && (
              <motion.div className="card" style={{ padding: '28px 28px' }} variants={fadeUp} custom={0.15} initial="hidden" animate="visible">
                <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 16 }}>Key Contributions</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {intern.keyContributions.map((kc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#A7B2C5', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      <span style={{ color: '#F59E0B', marginTop: 2, flexShrink: 0 }}>★</span>
                      {kc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Challenges & Solutions */}
            {intern.challenges && (
              <motion.div className="card" style={{ padding: '28px 28px' }} variants={fadeUp} custom={0.2} initial="hidden" animate="visible">
                <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 16 }}>Challenges & Solutions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {intern.challenges.map((c, i) => (
                    <div key={i} style={{ background: '#080B12', border: '1px solid rgba(96, 165, 250, 0.20)', borderRadius: 10, padding: '16px 18px' }}>
                      <p style={{ fontWeight: 700, color: '#F8FAFC', fontSize: '0.875rem', marginBottom: 4 }}>
                        🔴 {c.challenge}
                      </p>
                      <p style={{ color: '#A7B2C5', fontSize: '0.85rem', lineHeight: 1.65 }}>
                        ✅ {c.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Learning Outcomes */}
            {intern.learningOutcomes && (
              <motion.div className="card" style={{ padding: '28px 28px' }} variants={fadeUp} custom={0.25} initial="hidden" animate="visible">
                <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <BookOpen size={18} color="#2563EB" />
                  Learning Outcomes
                </h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {intern.learningOutcomes.map((lo, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#A7B2C5', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      <span style={{ color: '#10B981', marginTop: 2, flexShrink: 0 }}>▸</span>
                      {lo}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Outcome (Approtech) */}
            {intern.outcome && (
              <motion.div className="card" style={{ padding: '28px 28px', background: 'rgba(37,99,235,0.06)' }} variants={fadeUp} custom={0.25} initial="hidden" animate="visible">
                <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 14 }}>Outcome</h2>
                <p style={{ color: '#A7B2C5', lineHeight: 1.75 }}>{intern.outcome}</p>
              </motion.div>
            )}

          </div>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Tech Stack */}
            <motion.div className="card" style={{ padding: '24px' }} variants={fadeUp} custom={0} initial="hidden" animate="visible">
              <h3 style={{ fontWeight: 700, color: '#F8FAFC', fontSize: '0.9rem', marginBottom: 14 }}>Tech Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {intern.techStack.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div className="card" style={{ padding: '24px' }} variants={fadeUp} custom={0.05} initial="hidden" animate="visible">
              <h3 style={{ fontWeight: 700, color: '#F8FAFC', fontSize: '0.9rem', marginBottom: 14 }}>Details</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'Company', value: intern.company },
                  { label: 'Role', value: intern.role },
                  { label: 'Duration', value: intern.duration },
                  { label: 'Location', value: intern.location },
                ].map(d => (
                  <div key={d.label}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#A7B2C5', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{d.label}</p>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>{d.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Back Button */}
            <Link to="/#internships" className="btn-outline" style={{ justifyContent: 'center' }}>
              <ArrowLeft size={16} />
              All Internships
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
