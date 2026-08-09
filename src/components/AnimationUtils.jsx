import { motion } from 'framer-motion';

// ─── Reusable Animation Variants ─────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
  }),
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] },
  }),
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

// ─── Page Transition Wrapper ────────────────────────────────────
export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Section Header ──────────────────────────────────────────────
export function SectionHeader({ badge, title, subtitle, center = false }) {
  return (
    <motion.div
      style={{ textAlign: center ? 'center' : 'left', marginBottom: 56 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      custom={0}
    >
      {badge && (
        <span className="section-badge">{badge}</span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle" style={{ margin: center ? '0 auto' : undefined }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// ─── Animated Section ────────────────────────────────────────────
export function AnimatedSection({ children, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated Card ───────────────────────────────────────────────
export function AnimatedCard({ children, className = '', style = {}, delay = 0 }) {
  return (
    <motion.div
      className={`card ${className}`}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp}
      custom={delay}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}
