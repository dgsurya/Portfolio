import React, { useState } from 'react';
import { Award, ExternalLink, Eye, Filter, CheckCircle } from 'lucide-react';
import { certifications, certCategories } from '../data/certifications';
import FeaturedCertifications from './FeaturedCertifications';

export default function Certifications({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCerts = selectedCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === selectedCategory);

  return (
    <section id="certifications" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={15} /> Verified Credentials
          </div>
          <h2 className="section-title">Licenses & Certifications</h2>
          <p className="section-subtitle">
            Professional learning credentials earned through IBM SkillsBuild, IBM Career Education and IBM Developer Skills Network powered programs.
          </p>
        </div>

        {/* Featured Spotlight Component */}
        <FeaturedCertifications onOpenModal={onOpenModal} />

        {/* Category Filters Bar */}
        <div
          className="cert-filter-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            margin: '2.5rem 0 3rem 0'
          }}
        >
          {certCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="cert-filter-btn"
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '9999px',
                  border: isActive ? '1px solid #00c8ff' : '1px solid rgba(56, 189, 248, 0.2)',
                  background: isActive ? 'linear-gradient(135deg, rgba(0, 200, 255, 0.2), rgba(124, 58, 237, 0.2))' : 'rgba(10, 30, 55, 0.6)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 0 15px rgba(0, 200, 255, 0.3)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Full Grid of Certificates */}
        <div
          className="cert-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="glass-card certificate-card-hover reveal-up reveal-init"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Image Lightbox Trigger */}
                <div
                  onClick={() => onOpenModal(cert)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '180px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginBottom: '1.2rem',
                    cursor: 'pointer',
                    background: '#020817',
                    border: '1px solid rgba(56, 189, 248, 0.2)'
                  }}
                >
                  <img
                    src={cert.image}
                    alt={`Surya D G ${cert.name} certificate`}
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
                      background: 'rgba(2, 8, 23, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <span
                      style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        background: '#00c8ff',
                        color: '#020817',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Eye size={14} /> View Certificate
                    </span>
                  </div>
                </div>

                {/* Issuer & Date */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="badge">{cert.issuer}</span>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{cert.issued}</span>
                </div>

                {/* Name & Metadata */}
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.35 }}>
                  {cert.name}
                </h3>

                {cert.courseCode && (
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-code)', marginBottom: '0.6rem' }}>
                    Course Code: {cert.courseCode} {cert.issuedBy ? `• ${cert.issuedBy}` : ''}
                  </div>
                )}

                {/* Skills tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.18rem 0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#94a3b8'
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
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
                    <ExternalLink size={14} /> Verify Credential
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
