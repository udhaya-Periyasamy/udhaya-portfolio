import { motion } from 'framer-motion';
import { Container, Cloud, Network, GitBranch } from 'lucide-react';
import { currentlyLearning } from '../data/portfolioData';
import { SectionHeader, fadeUp } from './AnimationUtils';

const iconMap = { Container, Cloud, Network, GitBranch };

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="section section-alt">
      <div className="container">
        <SectionHeader
          badge="Always Growing"
          title="Currently Learning"
          subtitle="Expanding my skill set with modern DevOps and architectural patterns."
          center
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {currentlyLearning.map((item, i) => {
            const Icon = iconMap[item.icon] || Container;
            return (
              <motion.div
                key={item.id}
                className="card"
                style={{ padding: '28px 24px' }}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `rgba(${parseInt(item.color.slice(1,3),16)},${parseInt(item.color.slice(3,5),16)},${parseInt(item.color.slice(5,7),16)},0.1)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <Icon size={24} color={item.color} />
                </div>

                <h3 style={{ fontWeight: 700, color: '#0A192F', fontSize: '1rem', marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 16 }}>
                  {item.description}
                </p>

                {/* Progress */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Progress</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: item.color }}>{item.progress}%</span>
                  </div>
                  <div className="skill-progress-track">
                    <motion.div
                      style={{ height: '100%', background: item.color, borderRadius: 3 }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
