import React, { useEffect } from 'react';
import { X, ExternalLink, Award, Calendar } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return;

    // Prevent body scrolling while modal is active
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(2, 8, 23, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'hero-fade-up 0.3s ease'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          background: '#06142a',
          borderColor: 'rgba(56, 189, 248, 0.3)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
        }}
      >
        {/* Close X Button */}
        <button
          onClick={onClose}
          aria-label="Close certificate lightbox"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(10, 30, 55, 0.9)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Certificate Title Header */}
        <div style={{ marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="badge">{cert.issuer || cert.company}</span>
            {(cert.issued || cert.period) && (
              <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Calendar size={13} /> {cert.issued || cert.period}
              </span>
            )}
          </div>
          <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 800 }}>
            {cert.name || cert.title}
          </h3>
        </div>

        {/* Large Image Preview */}
        <div
          style={{
            width: '100%',
            maxHeight: '520px',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#020817',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}
        >
          <img
            src={cert.image}
            alt={cert.name || cert.title}
            style={{
              maxWidth: '100%',
              maxHeight: '520px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Footer info & verify action */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          {cert.skills && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {cert.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    background: 'rgba(0, 200, 255, 0.1)',
                    color: '#00c8ff',
                    border: '1px solid rgba(0, 200, 255, 0.2)'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.8rem', marginLeft: 'auto' }}>
            <button onClick={onClose} className="btn btn-secondary btn-sm">
              Close
            </button>

            {cert.verificationUrl && (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={15} /> Verify Credential
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
