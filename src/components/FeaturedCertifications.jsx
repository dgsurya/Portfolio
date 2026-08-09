import React from 'react';
import { Award, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function FeaturedCertifications({ onOpenModal }) {
  const featuredList = certifications.filter((c) => c.featured);

  return (
    <section style={{ paddingBottom: '2rem', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
          <Sparkles size={20} style={{ color: '#00c8ff' }} />
          <h3 style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: 800 }}>
            Featured Professional Credentials
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {featuredList.map((cert) => (
            <div
              key={cert.id}
              className="glass-card certificate-card-hover reveal-up reveal-init"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, rgba(8, 29, 56, 0.95), rgba(6, 20, 42, 0.95))',
                border: '1px solid rgba(0, 200, 255, 0.35)',
                boxShadow: '0 10px 30px rgba(0, 200, 255, 0.15)'
              }}
            >
              <div>
                {/* Certificate Preview Image */}
                <div
                  onClick={() => onOpenModal(cert)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '190px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginBottom: '1.25rem',
                    cursor: 'pointer',
                    background: '#020817',
                    border: '1px solid rgba(56, 189, 248, 0.2)'
                  }}
                >
                  <img
                    src={cert.image}
                    alt={`Surya D G ${cert.name} Certificate`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(2, 8, 23, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                    className="img-overlay"
                  >
                    <span
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        background: 'rgba(0, 200, 255, 0.9)',
                        color: '#020817',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Eye size={16} /> Click to View Full Image
                    </span>
                  </div>
                </div>

                {/* Badge & Issuer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span className="badge badge-purple">{cert.issuer}</span>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{cert.issued}</span>
                </div>

                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.6rem', lineHeight: 1.3 }}>
                  {cert.name}
                </h4>

                {/* Skills tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#38bdf8'
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button
                  onClick={() => onOpenModal(cert)}
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  <Eye size={14} /> Preview
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <ExternalLink size={14} /> Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
