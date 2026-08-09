import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { SectionHeader, fadeUp } from './AnimationUtils';

export default function Certifications() {
  const openCertificates = (cert) => {
    const newWindow = window.open('', '_blank');

    if (!newWindow) {
      alert('Please allow pop-ups to view the certificate.');
      return;
    }

    const imagesHtml = cert.images
      .map(
        (image, index) => `
          <div class="certificate-item">
            <div class="certificate-number">
              Certificate ${index + 1}
            </div>
            <img
              src="${image}"
              alt="${cert.title} Certificate ${index + 1}"
            />
          </div>
        `
      )
      .join('');

    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${cert.title} - Certificate</title>

          <style>
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 40px 20px;
              background: #f8fafc;
              font-family: Arial, Helvetica, sans-serif;
              color: #0A192F;
            }

            .header {
              text-align: center;
              margin-bottom: 35px;
            }

            .header h1 {
              margin: 0 0 8px;
              font-size: 30px;
              font-weight: 800;
            }

            .header p {
              margin: 4px 0;
              color: #64748b;
              font-size: 15px;
            }

            .certificate-container {
              max-width: 1000px;
              margin: 0 auto;
            }

            .certificate-item {
              background: white;
              padding: 20px;
              margin-bottom: 30px;
              border-radius: 14px;
              box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
              border: 1px solid #e2e8f0;
            }

            .certificate-number {
              text-align: center;
              font-size: 14px;
              font-weight: 700;
              color: #2563EB;
              margin-bottom: 15px;
            }

            .certificate-item img {
              display: block;
              width: 100%;
              max-width: 900px;
              height: auto;
              margin: 0 auto;
              border-radius: 8px;
            }

            .back-button {
              display: inline-block;
              margin-top: 25px;
              padding: 10px 18px;
              background: #2563EB;
              color: white;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
            }

            @media (max-width: 600px) {
              body {
                padding: 25px 12px;
              }

              .header h1 {
                font-size: 24px;
              }

              .certificate-item {
                padding: 12px;
              }
            }
          </style>
        </head>

        <body>

          <div class="header">
            <h1>${cert.title}</h1>
            <p>${cert.issuer}</p>
            <p>${cert.date}</p>
          </div>

          <div class="certificate-container">
            ${imagesHtml}

            <div style="text-align:center;">
              <a
                href="#"
                class="back-button"
                onclick="window.close(); return false;"
              >
                Close Certificate
              </a>
            </div>
          </div>

        </body>
      </html>
    `);

    newWindow.document.close();
  };

  return (
    <section id="certifications" className="section">
      <div className="container">

        <SectionHeader
          eyebrow="CREDENTIALS"
          title="Certifications"
          description="Industry-recognised certifications and academic achievements."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="card"
              style={{
                padding: '28px 24px',
                textAlign: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
              variants={fadeUp}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
            >

              {/* Accent bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 48,
                  height: 3,
                  background: cert.color,
                  borderRadius: '0 0 3px 3px',
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: `rgba(
                    ${parseInt(cert.color.slice(1, 3), 16)},
                    ${parseInt(cert.color.slice(3, 5), 16)},
                    ${parseInt(cert.color.slice(5, 7), 16)},
                    0.08
                  )`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '8px auto 20px',
                  border: `1px solid rgba(
                    ${parseInt(cert.color.slice(1, 3), 16)},
                    ${parseInt(cert.color.slice(3, 5), 16)},
                    ${parseInt(cert.color.slice(5, 7), 16)},
                    0.15
                  )`,
                }}
              >
                <Award size={26} color={cert.color} />
              </div>

              {/* Category */}
              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(37,99,235,0.07)',
                  color: '#2563EB',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '3px 10px',
                  borderRadius: 100,
                  marginBottom: 10,
                }}
              >
                {cert.category}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontWeight: 800,
                  color: '#0A192F',
                  fontSize: '1rem',
                  marginBottom: 4,
                  lineHeight: 1.3,
                }}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <p
                style={{
                  color: '#2563EB',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: 2,
                }}
              >
                {cert.issuer}
              </p>

              {/* Date */}
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.78rem',
                  marginBottom: 20,
                }}
              >
                {cert.date}
              </p>

              {/* View Certificate */}
              <button
                type="button"
                onClick={() => openCertificates(cert)}
                className="btn-outline"
                style={{
                  fontSize: '0.82rem',
                  padding: '8px 18px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                }}
              >
                <ExternalLink size={13} />
                View Certificate
              </button>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}