import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/portfolioData';
import { PageTransition, fadeUp } from '../components/AnimationUtils';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <PageTransition>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <h1 style={{ color: '#F8FAFC', fontWeight: 800, fontSize: '2rem' }}>Project not found</h1>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      </PageTransition>
    );
  }

  const methodColor = (method) => {
    const map = { GET: 'method-GET', POST: 'method-POST', PUT: 'method-PUT', DELETE: 'method-DELETE' };
    return map[method] || '';
  };

  return (
    <PageTransition>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <div className="detail-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <button
            onClick={() => navigate(-1)}
            className="btn-ghost"
            style={{ color: '#94a3b8', marginBottom: 28, padding: 0, display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <ArrowLeft size={16} /> Back
          </button>

          {project.featured && (
            <span style={{
              display: 'inline-block', marginBottom: 12,
              background: 'rgba(37,99,235,0.15)',
              border: '1px solid rgba(37,99,235,0.3)',
              color: '#93c5fd', fontSize: '0.72rem', fontWeight: 700,
              padding: '3px 10px', borderRadius: 100, letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              Featured Project
            </span>
          )}

          <h1 style={{ color: '#FFFFFF', fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 3rem)', lineHeight: 1.1, marginBottom: 8 }}>
            {project.title}
          </h1>
          <p style={{ color: '#60a5fa', fontWeight: 600, fontSize: '1rem', marginBottom: 16 }}>{project.subtitle}</p>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 560, marginBottom: 24 }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                background: 'rgba(37,99,235,0.12)',
                border: '1px solid rgba(37,99,235,0.25)',
                color: '#93c5fd',
                fontSize: '0.75rem', fontWeight: 600,
                padding: '3px 10px', borderRadius: 6,
              }}>{tag}</span>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaGithub size={16} /> View on GitHub
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.15)', color: '#e2e8f0' }}>
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ─── Content ─────────────────────────────────────────── */}
      <div className="container" style={{ padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: 40, alignItems: 'start' }}>
          
          {/* Main Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Overview */}
            <motion.div className="card" style={{ padding: '28px' }} variants={fadeUp} custom={0} initial="hidden" animate="visible">
              <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 14 }}>Overview</h2>
              <p style={{ color: '#A7B2C5', lineHeight: 1.75 }}>{project.overview}</p>
            </motion.div>

            {/* Features */}
            <motion.div className="card" style={{ padding: '28px' }} variants={fadeUp} custom={0.05} initial="hidden" animate="visible">
              <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 18 }}>Key Features</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                {project.features.map((f, i) => (
                  <div key={i} style={{ background: '#080B12', border: '1px solid rgba(96, 165, 250, 0.20)', borderRadius: 10, padding: '16px' }}>
                    <p style={{ fontWeight: 700, color: '#F8FAFC', fontSize: '0.875rem', marginBottom: 6 }}>{f.title}</p>
                    <p style={{ color: '#A7B2C5', fontSize: '0.82rem', lineHeight: 1.6 }}>{f.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Folder Structure */}
            {project.folderStructure && (
              <motion.div className="card" style={{ padding: '28px' }} variants={fadeUp} custom={0.1} initial="hidden" animate="visible">
                <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Code2 size={18} color="#2563EB" />
                  Folder Structure
                </h2>
                <pre style={{
                  background: '#0F172A',
                  color: '#94a3b8',
                  padding: '20px 24px',
                  borderRadius: 10,
                  fontSize: '0.78rem',
                  lineHeight: 1.7,
                  overflowX: 'auto',
                  fontFamily: 'Consolas, "Courier New", monospace',
                }}>
                  {project.folderStructure}
                </pre>
              </motion.div>
            )}

            {/* API Endpoints */}
            {project.apiEndpoints && (
              <motion.div className="card" style={{ padding: '28px' }} variants={fadeUp} custom={0.15} initial="hidden" animate="visible">
                <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 18 }}>API Endpoints</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table className="api-table">
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.apiEndpoints.map((ep, i) => (
                        <tr key={i}>
                          <td><span className={`method-badge ${methodColor(ep.method)}`}>{ep.method}</span></td>
                          <td style={{ fontFamily: 'Consolas, monospace', fontSize: '0.8rem', color: '#2563EB' }}>{ep.path}</td>
                          <td>{ep.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Future Enhancements */}
            {project.futureEnhancements && (
              <motion.div className="card" style={{ padding: '28px' }} variants={fadeUp} custom={0.2} initial="hidden" animate="visible">
                <h2 style={{ fontWeight: 800, color: '#F8FAFC', fontSize: '1.1rem', marginBottom: 16 }}>Future Enhancements</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {project.futureEnhancements.map((fe, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#A7B2C5', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      <span style={{ color: '#2563EB', marginTop: 2, flexShrink: 0 }}>→</span>
                      {fe}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Tech Stack breakdown */}
            <motion.div className="card" style={{ padding: '24px' }} variants={fadeUp} custom={0} initial="hidden" animate="visible">
              <h3 style={{ fontWeight: 700, color: '#F8FAFC', fontSize: '0.9rem', marginBottom: 16 }}>Tech Stack</h3>
              {Object.entries(project.techStack).map(([layer, techs]) => (
                <div key={layer} style={{ marginBottom: 14 }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                    {layer}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {techs.map(tech => (
                      <span key={tech} className="tag" style={{ fontSize: '0.72rem' }}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Links */}
            <motion.div className="card" style={{ padding: '24px' }} variants={fadeUp} custom={0.05} initial="hidden" animate="visible">
              <h3 style={{ fontWeight: 700, color: '#F8FAFC', fontSize: '0.9rem', marginBottom: 12 }}>Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ justifyContent: 'center' }}>
                    <FaGithub size={15} /> GitHub Repository
                  </a>
                )}
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center' }}>
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>

            <Link to="/#projects" className="btn-outline" style={{ justifyContent: 'center' }}>
              <ArrowLeft size={16} />
              All Projects
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
