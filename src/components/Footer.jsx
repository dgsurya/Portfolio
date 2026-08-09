import React from 'react';
import { Linkedin, Github, Heart } from 'lucide-react';
import { profile } from '../data/profile';

const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#020817',
        borderTop: '1px solid rgba(56, 189, 248, 0.15)',
        padding: '4rem 0 2rem 0',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div 
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(0, 200, 255, 0.2), rgba(124, 58, 237, 0.2))',
                border: '1px solid rgba(0, 200, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                color: '#00c8ff'
              }}
            >
              S
            </div>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em' }}>
              SURYA <span style={{ color: '#00c8ff' }}>D G</span>
            </span>
          </div>

          <p style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>
            AI & Machine Learning | Data Science
          </p>

          <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '450px', margin: 0 }}>
            {profile.tagline}
          </p>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
            {footerNav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.target.style.color = '#00c8ff')}
                onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Surya D G LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(10, 30, 55, 0.8)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}
              >
                <Linkedin size={18} />
              </a>
            )}

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Surya D G GitHub"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(10, 30, 55, 0.8)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '1.5rem',
            textAlign: 'center',
            color: '#64748b',
            fontSize: '0.85rem'
          }}
        >
          <p style={{ margin: '0 0 0.4rem 0' }}>
            © {currentYear} Surya D G. All rights reserved.
          </p>
          <p style={{ margin: 0, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            Built with React & passion for AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
