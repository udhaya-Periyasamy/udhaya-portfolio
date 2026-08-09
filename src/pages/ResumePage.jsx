import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { PageTransition } from '../components/AnimationUtils';

export default function ResumePage() {
  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', background: '#F8FAFC', paddingTop: 90 }}>
        {/* Header */}
        <div style={{ background: '#0A192F', padding: '40px 0' }}>
          <div className="container">
            <Link
              to="/"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#94a3b8', textDecoration: 'none', fontSize: '0.875rem', marginBottom: 20 }}
            >
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={22} color="#60a5fa" />
                </div>
                <div>
                  <h1 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.3rem' }}>Resume</h1>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Udhaya P — Java Full Stack Developer</p>
                </div>
              </div>
              <a href={personalInfo.resumeUrl} download className="btn-primary">
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="container" style={{ padding: '40px 24px' }}>
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(10,25,47,0.1)',
            minHeight: 800,
          }}>
            <iframe
              src={personalInfo.resumeUrl + '#toolbar=1'}
              title="Udhaya P Resume"
              style={{ width: '100%', height: '90vh', border: 'none', minHeight: 700 }}
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: 12 }}>
              Can't view the PDF? Download it directly.
            </p>
            <a href={personalInfo.resumeUrl} download className="btn-primary">
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
