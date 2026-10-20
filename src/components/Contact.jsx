import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader, fadeUp } from './AnimationUtils';

const contactItems = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
];

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn', href: personalInfo.linkedin, color: '#0A66C2' },
  { icon: FaGithub, label: 'GitHub', href: personalInfo.github, color: '#F8FAFC' },
  { icon: FaCode, label: 'LeetCode', href: personalInfo.leetcode, color: '#F89F1B' },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeader
          badge="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind or want to collaborate? Let's talk."
          center
        />

        <div className="contact-wrapper">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="card contact-card">
              <h3 className="contact-card-title">
                Let's Connect
              </h3>
              <p className="contact-card-desc">
                I'm open to full-time roles, internships, and freelance projects. Feel free to reach out!
              </p>

              {/* Contact Items: Neat, evenly spaced rows */}
              <div className="contact-items-list">
                {contactItems.map(({ icon: Icon, label, value, href }) => {
                  const isLink = Boolean(href);
                  const Component = isLink ? 'a' : 'div';
                  return (
                    <Component
                      key={label}
                      {...(isLink ? { href } : {})}
                      className="contact-item-row"
                      style={!isLink ? { cursor: 'default' } : undefined}
                    >
                      <div className="contact-icon-box">
                        <Icon size={18} color="#60A5FA" />
                      </div>
                      <div className="contact-item-content">
                        <p className="contact-item-label">{label}</p>
                        <p className="contact-item-value">{value}</p>
                      </div>
                    </Component>
                  );
                })}
              </div>

              {/* Social Profiles: Clean horizontal row */}
              <div className="contact-social-section">
                <p className="contact-social-label">
                  Social Profiles
                </p>
                <div className="contact-social-list">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="contact-social-btn"
                    >
                      <Icon size={18} color={color} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-wrapper {
          width: 100%;
          max-width: 780px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .contact-card {
          padding: clamp(28px, 4vw, 40px) clamp(22px, 4vw, 36px);
          background: rgba(13, 19, 32, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(96, 165, 250, 0.20);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.55);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-sizing: border-box;
        }

        .contact-card:hover {
          border-color: rgba(96, 165, 250, 0.40);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.65), 0 0 20px rgba(37, 99, 235, 0.16);
          transform: translateY(-2px);
        }

        .contact-card-title {
          font-weight: 750;
          color: #F8FAFC;
          font-size: clamp(1.2rem, 2vw, 1.35rem);
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .contact-card-desc {
          color: #A7B2C5;
          font-size: clamp(0.875rem, 1.2vw, 0.95rem);
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .contact-items-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 28px;
        }

        .contact-item-row {
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid rgba(96, 165, 250, 0.20);
          background: rgba(8, 11, 18, 0.75);
          transition: all 0.22s ease;
          box-sizing: border-box;
        }

        a.contact-item-row:hover {
          border-color: rgba(96, 165, 250, 0.50);
          background: rgba(37, 99, 235, 0.12);
          transform: translateY(-2px);
        }

        .contact-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(96, 165, 250, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.22s ease;
        }

        a.contact-item-row:hover .contact-icon-box {
          background: rgba(37, 99, 235, 0.25);
          border-color: #60A5FA;
          transform: scale(1.05);
        }

        .contact-item-content {
          min-width: 0;
          flex: 1;
        }

        .contact-item-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #A7B2C5;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0;
          line-height: 1.2;
        }

        .contact-item-value {
          font-size: clamp(0.875rem, 1.2vw, 0.98rem);
          font-weight: 600;
          color: #F8FAFC;
          margin-top: 2px;
          margin-bottom: 0;
          line-height: 1.35;
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .contact-social-section {
          padding-top: 4px;
        }

        .contact-social-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #A7B2C5;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 14px;
        }

        .contact-social-list {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .contact-social-btn {
          width: 44px;
          height: 44px;
          border-radius: 11px;
          background: rgba(8, 11, 18, 0.75);
          border: 1px solid rgba(96, 165, 250, 0.20);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .contact-social-btn:hover {
          background: rgba(37, 99, 235, 0.20);
          border-color: #60A5FA;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.30);
        }

        @media (max-width: 640px) {
          .contact-wrapper {
            padding: 0 4px;
          }
          .contact-card {
            padding: 24px 18px;
          }
          .contact-item-row {
            padding: 12px 14px;
            gap: 12px;
          }
          .contact-icon-box {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </section>
  );
}
