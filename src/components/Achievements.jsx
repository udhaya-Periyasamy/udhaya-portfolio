import { motion } from 'framer-motion';
import { Trophy, Award, Users, Calendar } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { SectionHeader, fadeUp } from './AnimationUtils';

const iconMap = { Trophy, Award, Users };

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeader
          badge="Highlights"
          title="Achievements"
          subtitle="Academic excellence, leadership roles and recognition beyond the classroom."
        />

        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="timeline">
            {achievements.map((ach, i) => {
              const Icon = iconMap[ach.icon] || Trophy;
              return (
                <motion.div
                  key={ach.id}
                  className="timeline-item"
                  variants={fadeUp}
                  custom={i * 0.12}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="timeline-dot" style={{ background: ach.color }} />
                  <div className="card" style={{ padding: '24px 28px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: `rgba(${parseInt(ach.color.slice(1,3),16)},${parseInt(ach.color.slice(3,5),16)},${parseInt(ach.color.slice(5,7),16)},0.1)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={22} color={ach.color} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                          <h3 style={{ fontWeight: 800, color: '#0A192F', fontSize: '0.95rem' }}>{ach.title}</h3>
                          <span style={{
                            display: 'flex', alignItems: 'center', gap: 4,
                            color: '#94a3b8', fontSize: '0.78rem',
                          }}>
                            <Calendar size={12} />
                            {ach.date}
                          </span>
                        </div>
                        <p style={{ color: '#2563EB', fontSize: '0.82rem', fontWeight: 600, marginBottom: 8 }}>{ach.event}</p>
                        <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.65 }}>{ach.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
