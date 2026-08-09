import { motion } from 'framer-motion';
import { GraduationCap, Zap } from 'lucide-react';
import { education, strengths } from '../data/portfolioData';
import { SectionHeader, fadeUp } from './AnimationUtils';

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{
        minHeight: 'calc(100vh - 80px)',
        paddingTop: 40,
        paddingBottom: 40,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
        }}
      >

        {/* ─── SECTION HEADER ─────────────────────────────── */}
        <SectionHeader
          eyebrow="ABOUT ME"
          title="Who I Am"
          subtitle="A passionate engineer turning ideas into scalable software solutions."
        />

        {/* ─── MAIN TWO COLUMN LAYOUT ─────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'start',
            marginTop: 32,
          }}
        >

          {/* ═══════════════════════════════════════════════
              LEFT SIDE
              WHO I AM + STRENGTHS
          ═══════════════════════════════════════════════ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              gap: 28,
            }}
          >

            {/* ─── WHO I AM ──────────────────────────────── */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p
                style={{
                  color: '#475569',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                  margin: 0,
                }}
              >
                I'm{' '}
                <strong style={{ color: '#0A192F' }}>
                  Udhaya P
                </strong>
                , a Computer Science Engineering student at Sri Sairam
                Institute of Technology, Chennai. I specialise in building
                enterprise-grade Java applications using Spring Boot and
                React — combining robust backend architecture with clean,
                responsive frontends.
              </p>

              <p
                style={{
                  color: '#475569',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                  marginTop: 22,
                  marginBottom: 0,
                }}
              >
                I've completed internships at{' '}
                <strong style={{ color: '#0A192F' }}>
                  Airports Authority of India
                </strong>{' '}
                and{' '}
                <strong style={{ color: '#0A192F' }}>
                  Approtech R&D Solutions
                </strong>
                , where I worked on full-stack systems and AI-powered tools
                respectively.
              </p>
            </motion.div>


            {/* ─── STRENGTHS ─────────────────────────────── */}
            <motion.div
              className="card"
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                padding: '24px',
                marginTop: 8,
              }}
            >

              {/* Strengths Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'rgba(245,158,11,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Zap size={18} color="#F59E0B" />
                </div>

                <h3
                  style={{
                    fontWeight: 700,
                    color: '#0A192F',
                    fontSize: '0.95rem',
                    margin: 0,
                  }}
                >
                  Strengths
                </h3>
              </div>


              {/* Strengths List */}
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 9,
                  margin: 0,
                  padding: 0,
                }}
              >

                {/* Existing strengths */}
                {strengths.map((item, i) => (
                  <li
                    key={`strength-${i}`}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 8,
                      color: '#475569',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        color: '#F59E0B',
                        marginTop: 1,
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>

                    {item}
                  </li>
                ))}

                {/* Additional relevant strengths */}
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    color: '#475569',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: '#F59E0B',
                      marginTop: 1,
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>

                  Strong interest in building scalable backend systems with
                  Spring Boot
                </li>

                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    color: '#475569',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: '#F59E0B',
                      marginTop: 1,
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>

                  Good understanding of system design and scalable
                  architecture
                </li>

                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    color: '#475569',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: '#F59E0B',
                      marginTop: 1,
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>

                  Passionate about continuous learning and clean code
                </li>

              </ul>
            </motion.div>

          </div>


          {/* ═══════════════════════════════════════════════
              RIGHT SIDE
              EDUCATION
          ═══════════════════════════════════════════════ */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {/* Education Heading */}
            <motion.h3
              variants={fadeUp}
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#0A192F',
                fontWeight: 700,
                marginBottom: 20,
                fontSize: '1rem',
              }}
            >
              <GraduationCap size={18} color="#2563EB" />
              Education
            </motion.h3>


            {/* Education Timeline */}
            <div className="timeline">

              {/* ─── COLLEGE ─────────────────────────────── */}
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  className="timeline-item"
                  variants={fadeUp}
                  custom={0.2 + i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="timeline-dot" />

                  <div
                    className="card"
                    style={{
                      padding: '20px 24px',
                    }}
                  >

                    {/* College Main Details */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: 8,
                      }}
                    >
                      <div>

                        <p
                          style={{
                            fontWeight: 700,
                            color: '#0A192F',
                            fontSize: '0.95rem',
                            margin: 0,
                          }}
                        >
                          {edu.degree}
                        </p>

                        <p
                          style={{
                            color: '#2563EB',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            marginTop: 5,
                            marginBottom: 0,
                          }}
                        >
                          {edu.institution}
                        </p>

                        <p
                          style={{
                            color: '#64748b',
                            fontSize: '0.8rem',
                            marginTop: 3,
                            marginBottom: 0,
                          }}
                        >
                          {edu.location}
                        </p>

                      </div>


                      {/* Status + Duration */}
                      <div
                        style={{
                          textAlign: 'right',
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-block',
                            background: 'rgba(37,99,235,0.08)',
                            color: '#2563EB',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            padding: '3px 10px',
                            borderRadius: 100,
                          }}
                        >
                          {edu.status}
                        </span>

                        <p
                          style={{
                            color: '#94a3b8',
                            fontSize: '0.78rem',
                            marginTop: 4,
                            marginBottom: 0,
                          }}
                        >
                          {edu.duration}
                        </p>
                      </div>

                    </div>


                    {/* College CGPA */}
                    <div
                      style={{
                        marginTop: 12,
                        paddingTop: 12,
                        borderTop: '1px solid #E2E8F0',
                      }}
                    >
                      <p
                        style={{
                          color: '#64748b',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          margin: 0,
                        }}
                      >
                        CGPA
                      </p>

                      <p
                        style={{
                          color: '#0A192F',
                          fontWeight: 800,
                          fontSize: '1.1rem',
                          margin: '2px 0 0',
                        }}
                      >
                        {edu.cgpa}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}


              {/* ─── 12TH STANDARD ───────────────────────── */}
              <motion.div
                className="timeline-item"
                variants={fadeUp}
                custom={0.35}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="timeline-dot" />

                <div
                  className="card"
                  style={{
                    padding: '20px 24px',
                  }}
                >

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >

                    <div>

                      <p
                        style={{
                          fontWeight: 700,
                          color: '#0A192F',
                          fontSize: '0.95rem',
                          margin: 0,
                        }}
                      >
                        Higher Secondary Education
                      </p>

                      <p
                        style={{
                          color: '#2563EB',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          marginTop: 5,
                          marginBottom: 0,
                        }}
                      >
                        De Britto Hr. Sec. School
                      </p>

                      <p
                        style={{
                          color: '#64748b',
                          fontSize: '0.8rem',
                          marginTop: 3,
                          marginBottom: 0,
                        }}
                      >
                        Devakottai, Tamil Nadu
                      </p>

                    </div>

                  </div>


                  {/* 12th Percentage */}
                  <div
                    style={{
                      marginTop: 12,
                      paddingTop: 12,
                      borderTop: '1px solid #E2E8F0',
                    }}
                  >

                    <p
                      style={{
                        color: '#64748b',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        margin: 0,
                      }}
                    >
                      Percentage
                    </p>

                    <p
                      style={{
                        color: '#0A192F',
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        margin: '2px 0 0',
                      }}
                    >
                      87%
                    </p>

                  </div>

                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}