import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader,
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa6';
import { personalInfo, emailjsConfig } from '../data/portfolioData';
import { SectionHeader, fadeUp, fadeLeft, fadeRight } from './AnimationUtils';

const contactItems = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
];

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn', href: personalInfo.linkedin, color: '#0A66C2' },
  { icon: FaGithub, label: 'GitHub', href: personalInfo.github, color: '#181717' },
  { icon: FaCode, label: 'LeetCode', href: personalInfo.leetcode, color: '#F89F1B' },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey,
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeader
          badge="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind or want to collaborate? Let's talk."
          center
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'start' }}>

          {/* ─── LEFT — Contact Info ─────────────────────────────── */}
          <motion.div
            variants={fadeLeft}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="card" style={{ padding: '32px 28px' }}>
              <h3 style={{ fontWeight: 700, color: '#0A192F', fontSize: '1.1rem', marginBottom: 8 }}>
                Let's Connect
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 28 }}>
                I'm open to full-time roles, internships, and freelance projects. Feel free to reach out!
              </p>

              {/* Contact Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', padding: '12px 16px', borderRadius: 12, border: '1px solid #E2E8F0', background: '#F8FAFC', transition: 'all 0.2s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'; e.currentTarget.style.background = 'rgba(37,99,235,0.02)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = '#F8FAFC'; }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={17} color="#2563EB" />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
                      <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1E293B', marginTop: 1 }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                  Social Profiles
                </p>
                <div style={{ display: 'flex', gap: 10 }}>
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      style={{
                        width: 40, height: 40,
                        borderRadius: 10,
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = color + '12'; e.currentTarget.style.borderColor = color + '40'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <Icon size={17} color={color} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT — Contact Form ────────────────────────────── */}
          <motion.div
            variants={fadeRight}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="card" style={{ padding: '32px 28px' }}>
              <h3 style={{ fontWeight: 700, color: '#0A192F', fontSize: '1.1rem', marginBottom: 24 }}>
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                {/* Name & Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 0 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      style={errors.name ? { borderColor: '#EF4444' } : {}}
                    />
                    {errors.name && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4 }}>{errors.name}</p>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      style={errors.email ? { borderColor: '#EF4444' } : {}}
                    />
                    {errors.email && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4 }}>{errors.email}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="Job Opportunity / Collaboration / Query"
                    value={form.subject}
                    onChange={handleChange}
                    style={errors.subject ? { borderColor: '#EF4444' } : {}}
                  />
                  {errors.subject && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4 }}>{errors.subject}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Tell me about the opportunity or how I can help you..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    style={errors.message ? { borderColor: '#EF4444' } : {}}
                  />
                  {errors.message && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4 }}>{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.8 : 1 }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <><Loader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, color: '#10B981', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 8, padding: '10px 14px', fontSize: '0.875rem' }}
                  >
                    <CheckCircle size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, color: '#EF4444', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 8, padding: '10px 14px', fontSize: '0.875rem' }}
                  >
                    <AlertCircle size={16} />
                    Failed to send. Please try emailing me directly at {personalInfo.email}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
