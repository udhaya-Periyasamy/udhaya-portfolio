import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa6';
import {
  SiSpring, SiReact, SiMysql, SiGit,
  SiGithub, SiHibernate, SiJsonwebtokens, SiPostman,
} from 'react-icons/si';
import { SectionHeader, fadeUp } from './AnimationUtils';

const techs = [
  { name: 'Java', Icon: FaJava, color: '#007396', bg: '#EBF5FB' },
  { name: 'Spring Boot', Icon: SiSpring, color: '#6DB33F', bg: '#F0FFF4' },
  { name: 'React', Icon: SiReact, color: '#61DAFB', bg: '#E8F9FE' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1', bg: '#EBF4FF' },
  { name: 'Git', Icon: SiGit, color: '#F05032', bg: '#FFF0ED' },
  { name: 'GitHub', Icon: SiGithub, color: '#181717', bg: '#F1F5F9' },
  { name: 'Hibernate', Icon: SiHibernate, color: '#59666C', bg: '#F1F5F9' },
  { name: 'JWT', Icon: SiJsonwebtokens, color: '#000000', bg: '#F8FAFC' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37', bg: '#FFF4F0' },
];

export default function TechStack() {
  return (
    <section id="techstack" className="section">
      <div className="container">
        <SectionHeader
          badge="Core Technologies"
          title="Tech Stack"
          subtitle="Technologies I use daily to build production-ready applications."
          center
        />

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 16,
          maxWidth: 800,
          margin: '0 auto',
        }}>
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              variants={fadeUp}
              custom={i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.2 } }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: 14,
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                cursor: 'default',
                boxShadow: '0 2px 16px rgba(10,25,47,0.06)',
                minWidth: 90,
                transition: 'box-shadow 0.2s ease',
              }}
              onHoverStart={e => e.target.style?.boxShadow === undefined ? null : null}
            >
              <div style={{
                width: 48, height: 48,
                borderRadius: 12,
                background: tech.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <tech.Icon size={26} color={tech.color} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E293B', textAlign: 'center' }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
