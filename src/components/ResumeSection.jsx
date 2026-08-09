import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader, fadeUp } from './AnimationUtils';

export default function ResumeSection() {
  return (
    <section id="resume" className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <SectionHeader
          badge="Resume"
          title="My Resume"
          subtitle="View or download my latest resume."
          center
        />

        {/* Resume Preview Card */}
        <motion.div
          className="card"
          style={{ padding: 0, overflow: 'hidden' }}
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <div style={{
            background: '#0A192F',
            padding: '28px 32px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(37,99,235,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FileText size={22} color="#60a5fa" />
              </div>
              <div>
                <h3 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem' }}>Udhaya P — Resume</h3>
                <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: 2 }}>Java Full Stack Developer · PDF</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <a
                href="/resume"
                className="btn-outline"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.15)', color: '#e2e8f0', padding: '9px 20px', fontSize: '0.85rem' }}
              >
                <Eye size={15} />
                View
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary"
                style={{ padding: '9px 20px', fontSize: '0.85rem' }}
              >
                <Download size={15} />
                Download
              </a>
            </div>
          </div>

          {/* Preview area */}
          <div style={{
            height: 340,
            background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 16,
            borderTop: '1px solid #E2E8F0',
          }}>
            <div style={{
              width: 80, height: 100, borderRadius: 8,
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 6,
            }}>
              <FileText size={28} color="#2563EB" />
              <div style={{ width: 40, height: 3, background: '#E2E8F0', borderRadius: 2 }} />
              <div style={{ width: 32, height: 3, background: '#E2E8F0', borderRadius: 2 }} />
              <div style={{ width: 36, height: 3, background: '#E2E8F0', borderRadius: 2 }} />
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>PDF preview · Add your resume to /public/resume/</p>
            <a href="/resume" className="btn-primary" style={{ padding: '10px 24px' }}>
              <Eye size={16} />
              Open PDF Viewer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
