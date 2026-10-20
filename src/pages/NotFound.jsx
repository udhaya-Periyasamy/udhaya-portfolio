import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { PageTransition } from '../components/AnimationUtils';

export default function NotFound() {
  return (
    <PageTransition>
      <div style={{
        minHeight: '100vh',
        background: '#080B12',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* 404 */}
          <p style={{
            fontSize: 'clamp(6rem, 20vw, 12rem)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #1e3a5f, #2563EB40)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            marginBottom: 8,
          }}>
            404
          </p>

          <h1 style={{ color: '#F8FAFC', fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: 12 }}>
            Page Not Found
          </h1>
          <p style={{ color: '#A7B2C5', fontSize: '1rem', maxWidth: 400, margin: '0 auto 40px', lineHeight: 1.65 }}>
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-primary">
              <Home size={16} />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(96,165,250,0.20)', color: '#F8FAFC' }}
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
