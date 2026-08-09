import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Calendar, ChevronRight } from 'lucide-react';
import { internships } from '../data/portfolioData';
import { SectionHeader, fadeUp } from './AnimationUtils';

export default function Internships() {
  return (
    <section id="internships" className="section section-alt">
      <div className="container">
        <SectionHeader
          badge="Work Experience"
          title="Internships"
          subtitle="Real-world experience building enterprise applications and AI tools."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {internships.map((intern, i) => (
            <motion.div
              key={intern.id}
              className="card"
              style={{ overflow: 'hidden', padding: 0 }}
              variants={fadeUp}
              custom={i * 0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Color bar */}
              <div className="card-color-bar" style={{ background: intern.color }} />

              <div style={{ padding: '28px 28px 24px' }}>
                {/* Company */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: 'rgba(37,99,235,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid #E2E8F0',
                    }}>
                      <Building2 size={22} color="#2563EB" />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 800, color: '#0A192F', fontSize: '0.95rem', lineHeight: 1.2 }}>
                        {intern.company}
                      </h3>
                      <p style={{ color: '#2563EB', fontSize: '0.8rem', fontWeight: 600, marginTop: 2 }}>
                        {intern.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 18, color: '#64748b', fontSize: '0.82rem' }}>
                  <Calendar size={13} />
                  <span>{intern.duration}</span>
                </div>

                {/* Project */}
                <div style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: 10,
                  padding: '12px 14px',
                  marginBottom: 18,
                }}>
                  <p style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                    Project
                  </p>
                  <p style={{ color: '#0A192F', fontSize: '0.875rem', fontWeight: 600 }}>
                    {intern.project.title}
                  </p>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                  {intern.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* View Details Button */}
                <Link
                  to={`/internships/${intern.id}`}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  View Details
                  <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
