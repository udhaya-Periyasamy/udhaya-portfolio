import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const logoVariants = {
  hover: { scale: 1.05 },
};

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Simplified Header with no duplicate naming */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-badge" style={{ marginBottom: 8 }}>
            SKILLS
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: 8,
          }}>
            Technical Skills
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: '#64748B',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            Technologies I use to build modern and scalable applications.
          </p>
        </div>

        {/* 3x3 Compact Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card-new"
              variants={cardVariants}
              whileHover="hover"
              style={{
                borderColor: '#E2E8F0',
                boxShadow: '0 4px 12px rgba(10, 25, 47, 0.05)',
              }}
              whileHover={{
                y: -4,
                borderColor: '#2563EB',
                boxShadow: '0 12px 24px rgba(37, 99, 235, 0.12), 0 4px 12px rgba(10, 25, 47, 0.08)',
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Official Brand Logo (approx 60px) */}
              <motion.div
                variants={logoVariants}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{
                  width: 60,
                  height: 60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} official logo`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  loading="lazy"
                />
              </motion.div>

              {/* Technology Name */}
              <h3 style={{
                fontWeight: 700,
                color: '#0A192F',
                fontSize: '1rem',
                margin: 0,
                fontFamily: 'var(--font-main)',
              }}>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
