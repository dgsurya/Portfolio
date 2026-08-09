import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Eye, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience({ onOpenModal }) {
  return (
    <section id="experience" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={15} /> Practical Training & Work
          </div>
          <h2 className="section-title">Experience & Internship Training</h2>
          <p className="section-subtitle">
            Hands-on technical internships and professional training programs completed across AI, ML, Data Science and Python.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div
          className="timeline-container"
          style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '2rem 0'
          }}
        >
          {/* Vertical Center Axis Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '2px',
              background: 'linear-gradient(180deg, #00c8ff 0%, #7c3aed 50%, rgba(56, 189, 248, 0.1) 100%)',
              transform: 'translateX(-50%)',
              borderRadius: '2px'
            }}
          />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`timeline-item ${isEven ? 'timeline-item-left' : 'timeline-item-right'} reveal-up reveal-init`}
                style={{
                  position: 'relative',
                  width: '50%',
                  padding: isEven ? '0 2.5rem 2.5rem 0' : '0 0 2.5rem 2.5rem',
                  left: isEven ? '0' : '50%',
                  textAlign: 'left'
                }}
              >
                {/* Center Node Dot */}
                <div
                  className="timeline-dot"
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: isEven ? 'auto' : '-13px',
                    right: isEven ? '-13px' : 'auto',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: '#020817',
                    border: '3px solid #00c8ff',
                    boxShadow: '0 0 12px #00c8ff',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff' }} />
                </div>

                {/* Experience Card */}
                <div
                  className="glass-card skill-card-lift"
                  style={{
                    padding: '1.75rem',
                    position: 'relative'
                  }}
                >
                  {/* Period Badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#00c8ff',
                      background: 'rgba(0, 200, 255, 0.08)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '6px',
                      marginBottom: '0.8rem',
                      border: '1px solid rgba(0, 200, 255, 0.2)'
                    }}
                  >
                    <Calendar size={14} /> {exp.period}
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.2rem' }}>
                    {exp.role}
                  </h3>

                  <div
                    style={{
                      fontSize: '1rem',
                      color: '#38bdf8',
                      fontWeight: 700,
                      marginBottom: '0.8rem'
                    }}
                  >
                    {exp.company}
                    {exp.internId && <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 500 }}> • ID: {exp.internId}</span>}
                  </div>

                  <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                    {exp.description}
                  </p>

                  {/* Skills Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#f8fafc',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Action */}
                  {exp.certificateImage && (
                    <button
                      onClick={() => onOpenModal({
                        title: exp.role + " — " + exp.company,
                        issuer: exp.company,
                        issued: exp.issuedDate || exp.period,
                        image: exp.certificateImage
                      })}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Eye size={15} /> View Internship Certificate
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
