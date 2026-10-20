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
    <section id="skills" className="section">
      <div className="container">
        {/* Simplified Header with no duplicate naming */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-badge" style={{ marginBottom: 8 }}>
            SKILLS
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: '#F8FAFC',
            marginBottom: 8,
          }}>
            Technical Skills
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: '#A7B2C5',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            Technologies I use to build modern and scalable applications.
          </p>
        </div>

        {/* 2-Row Desktop Grid (5 in Row 1 + 4 Centered in Row 2) */}
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
                background: '#0D1320',
                borderColor: 'rgba(96, 165, 250, 0.20)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
              }}
              whileHover={{
                y: -4,
                borderColor: 'rgba(96, 165, 250, 0.50)',
                boxShadow: '0 12px 28px rgba(0, 0, 0, 0.5), 0 0 20px rgba(37, 99, 235, 0.18)',
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
                color: '#F8FAFC',
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
