import { motion } from 'framer-motion';
import { githubConfig, personalInfo } from '../data/portfolioData';
import { SectionHeader, fadeUp } from './AnimationUtils';
import { FaGithub } from 'react-icons/fa6';

export default function GitHubStats() {
  return (
    <section id="github" className="section section-alt">
      <div className="container">
        <SectionHeader
          badge="GitHub Activity"
          title="Open Source & Contributions"
          subtitle="Building in public — consistent coding and continuous improvement."
          center
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 24 }}>
          {/* Stats Card */}
          <motion.div
            className="github-card"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div style={{ padding: '16px 16px 8px', borderBottom: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                GitHub Stats
              </h3>
            </div>
            <div style={{ padding: 16 }}>
              <img
                src={githubConfig.statsUrl}
                alt="GitHub Stats"
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            className="github-card"
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div style={{ padding: '16px 16px 8px', borderBottom: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Top Languages
              </h3>
            </div>
            <div style={{ padding: 16 }}>
              <img
                src={githubConfig.topLangsUrl}
                alt="Top Languages"
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Streak */}
        <motion.div
          className="github-card"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: 32 }}
        >
          <div style={{ padding: '16px 16px 8px', borderBottom: '1px solid #E2E8F0' }}>
            <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contribution Streak
            </h3>
          </div>
          <div style={{ padding: 16 }}>
            <img
              src={githubConfig.streakUrl}
              alt="GitHub Streak"
              style={{ width: '100%', maxWidth: 600, height: 'auto', borderRadius: 8, display: 'block', margin: '0 auto' }}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ gap: 8 }}
          >
            <FaGithub size={18} />
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
