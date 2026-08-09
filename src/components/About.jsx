import React from 'react';
import { MapPin, Cpu, Database, Sparkles, UserCheck } from 'lucide-react';
import { profile } from '../data/profile';

const iconMap = {
  MapPin: MapPin,
  Cpu: Cpu,
  Database: Database,
  Sparkles: Sparkles
};

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <UserCheck size={15} /> Background & Focus
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging theoretical Artificial Intelligence with practical Data Science engineering solutions.
          </p>
        </div>

        <div
          className="about-content-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Text Column */}
          <div className="glass-card reveal-left reveal-init" style={{ padding: '2.2rem' }}>
            <h3 style={{ marginBottom: '1.25rem', color: '#00c8ff', fontSize: '1.4rem' }}>
              Artificial Intelligence & Machine Learning Specialist
            </h3>

            {profile.fullAbout.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  marginBottom: '1.1rem',
                  lineHeight: 1.7,
                  fontSize: '1.02rem',
                  color: '#94a3b8'
                }}
              >
                {paragraph}
              </p>
            ))}

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1.2rem',
                borderTop: '1px solid rgba(56, 189, 248, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                color: '#38bdf8',
                fontSize: '0.92rem',
                fontWeight: 600
              }}
            >
              <Sparkles size={16} /> Seeking Internships, Entry-Level Roles & AI/ML Projects in Bengaluru or Remote.
            </div>
          </div>

          {/* Right Mini Cards Column */}
          <div className="reveal-right reveal-init" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div
              className="info-cards-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.2rem'
              }}
            >
              {profile.infoCards.map((card, idx) => {
                const IconComponent = iconMap[card.icon] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="glass-card skill-card-lift"
                    style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem'
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(0, 200, 255, 0.1)',
                        border: '1px solid rgba(0, 200, 255, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00c8ff'
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {card.label}
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 700 }}>
                      {card.value}
                    </strong>
                  </div>
                );
              })}
            </div>

            {/* Quick Tech Highlights Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.6rem',
                background: 'linear-gradient(135deg, rgba(8, 29, 56, 0.7), rgba(124, 58, 237, 0.12))',
                borderColor: 'rgba(139, 92, 246, 0.3)'
              }}
            >
              <h4 style={{ color: '#8b5cf6', marginBottom: '0.8rem', fontSize: '1.05rem' }}>
                Key Technical Domains
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Data Science', 'RDBMS', 'SQL'].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(10, 30, 55, 0.8)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      color: '#f8fafc',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
