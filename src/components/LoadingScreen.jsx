import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Animated dots background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <motion.div
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Logo */}
        <div className="loading-logo" style={{ marginBottom: 8 }}>
          U<span className="loading-logo-accent">P</span>
        </div>

        {/* Subtitle */}
        <p style={{ color: '#64748b', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 40 }}>
          Java Full Stack Developer
        </p>

        {/* Progress Bar */}
        <div className="loading-progress-track">
          <motion.div
            className="loading-progress-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Progress Text */}
        <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: 12 }}>
          {Math.min(Math.round(progress), 100)}%
        </p>
      </motion.div>
    </motion.div>
  );
}
