import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/portfolioData';
import { SectionHeader, fadeUp } from './AnimationUtils';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          badge="My Work"
          title="Projects"
          subtitle="End-to-end full-stack applications built with production-grade architecture."
          center
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="card"
              style={{ overflow: 'hidden', padding: 0 }}
              variants={fadeUp}
              custom={i * 0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              {/* Banner */}
              <div style={{
                height: 140,
                background: 'linear-gradient(135deg, #0A192F 0%, #1e3a5f 50%, #0A192F 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Grid overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }} />
                
                {project.featured && (
                  <span style={{
                    position: 'absolute', top: 12, right: 12,
                    background: 'rgba(37,99,235,0.2)',
                    border: '1px solid rgba(37,99,235,0.4)',
                    color: '#60a5fa',
                    fontSize: '0.7rem', fontWeight: 700,
                    padding: '3px 10px', borderRadius: 100,
                  }}>
                    Featured
                  </span>
                )}

                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <p style={{ color: '#60a5fa', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-1px' }}>
                    {project.title}
                  </p>
                  <p style={{ color: '#A7B2C5', fontSize: '0.75rem', marginTop: 4 }}>{project.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px 24px 20px' }}>
                <p style={{ color: '#A7B2C5', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 18 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                  {project.tags.slice(0, 6).map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                  {project.tags.length > 6 && (
                    <span className="tag" style={{ background: 'rgba(37, 99, 235, 0.12)', color: '#60a5fa', border: '1px solid rgba(96, 165, 250, 0.20)' }}>
                      +{project.tags.length - 6}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: 'center', minWidth: 120 }}
                  >
                    View Project
                    <ChevronRight size={15} />
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ padding: '10px 14px' }}
                      title="View on GitHub"
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ padding: '10px 14px' }}
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
