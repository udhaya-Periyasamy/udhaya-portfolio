import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Calendar, ChevronRight } from 'lucide-react';
import { internships } from '../data/portfolioData';
import { SectionHeader, fadeUp } from './AnimationUtils';

export default function Internships() {
  const [logoErrors, setLogoErrors] = useState({});

  return (
    <section id="internships" className="section section-alt">
      <div className="container">
        <SectionHeader
          badge="Work Experience"
          title="Internships"
          subtitle="Real-world experience building enterprise applications and AI tools."
          center
        />

        <div className="internships-grid">
          {internships.map((intern, i) => (
            <motion.div
              key={intern.id}
              className="internship-card"
              variants={fadeUp}
              custom={i * 0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Accent color bar */}
              <div className="card-color-bar" style={{ background: intern.color }} />

              <div className="internship-card-body">
                {/* Header: Company Logo & Titles */}
                <div className="internship-header">
                  <div className="internship-logo-box">
                    {!logoErrors[intern.id] && intern.logo ? (
                      <img
                        src={intern.logo}
                        alt={intern.alt || `${intern.company} logo`}
                        className="internship-logo-img"
                        onError={() =>
                          setLogoErrors((prev) => ({ ...prev, [intern.id]: true }))
                        }
                      />
                    ) : (
                      <Building2 size={24} color="#60a5fa" />
                    )}
                  </div>
                  <div className="internship-title-group">
                    <h3 className="internship-company-name">
                      {intern.company}
                    </h3>
                    <p className="internship-role">
                      {intern.role}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="internship-duration">
                  <Calendar size={13} />
                  <span>{intern.duration}</span>
                </div>

                {/* Project */}
                {intern.project && (
                  <div className="internship-project-box">
                    <p className="internship-project-label">
                      Project
                    </p>
                    <p className="internship-project-title">
                      {intern.project.title}
                    </p>
                  </div>
                )}

                {/* Responsibilities Bullet Points */}
                {intern.responsibilities && intern.responsibilities.length > 0 && (
                  <div className="internship-responsibilities-box">
                    <p className="internship-responsibilities-label">
                      Key Responsibilities
                    </p>
                    <ul className="internship-responsibilities-list">
                      {intern.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="internship-responsibility-item">
                          <span className="internship-bullet">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Tags */}
                <div className="internship-tags">
                  {intern.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button aligned to bottom */}
                <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                  <Link
                    to={`/internships/${intern.id}`}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    View Details
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
