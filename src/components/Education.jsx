import React from 'react';
import { GraduationCap, BookOpen, CheckCircle, Award } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={15} /> Academic Foundation
          </div>
          <h2 className="section-title">Education & Academic Focus</h2>
          <p className="section-subtitle">
            Formal engineering studies specializing in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        <div
          className="glass-card education-card reveal-up reveal-init"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(10, 30, 55, 0.85), rgba(6, 20, 42, 0.95))',
            borderColor: 'rgba(56, 189, 248, 0.3)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'rgba(0, 200, 255, 0.12)',
                border: '1px solid rgba(0, 200, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00c8ff'
              }}
            >
              <GraduationCap size={28} />
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#00c8ff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.2rem'
                }}
              >
                {educationData.department}
              </div>

              <h3 style={{ fontSize: '1.45rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.4rem' }}>
                {educationData.degree}
              </h3>

              {educationData.institution && (
                <div style={{ fontSize: '1rem', color: '#38bdf8', fontWeight: 600 }}>
                  {educationData.institution} • {educationData.location}
                </div>
              )}
            </div>
          </div>

          <p style={{ fontSize: '1.02rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>
            {educationData.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(56, 189, 248, 0.15)'
            }}
          >
            {/* Academic Activities */}
            <div>
              <h4 style={{ color: '#00c8ff', fontSize: '1.05rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={16} /> Key Academic Activities
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {educationData.activities.map((act) => (
                  <li key={act} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.92rem' }}>
                    <CheckCircle size={14} style={{ color: '#38bdf8' }} /> {act}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Academic Competencies */}
            <div>
              <h4 style={{ color: '#8b5cf6', fontSize: '1.05rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={16} /> Specialized Competencies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {educationData.skills.map((sk) => (
                  <span
                    key={sk}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(124, 58, 237, 0.12)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      color: '#f8fafc',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}
                  >
                    {sk}
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
