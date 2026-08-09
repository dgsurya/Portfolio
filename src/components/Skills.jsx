import React from 'react';
import { Cpu, Brain, Code2, Database, Terminal, Users, Sparkles, Star } from 'lucide-react';
import { topSkills, skillCategories } from '../data/skills';

const categoryIconMap = {
  Brain: Brain,
  Code2: Code2,
  Database: Database,
  Terminal: Terminal,
  Users: Users
};

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={15} /> Capabilities & Tech Stack
          </div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Technologies and professional skills developed through academic learning, certifications and internship experience.
          </p>
        </div>

        {/* TOP 5 FEATURED SKILLS BANNER */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1.25rem'
            }}
          >
            <Star size={18} style={{ color: '#00c8ff', fill: '#00c8ff' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', fontWeight: 700 }}>
              Core Specialization Pillars
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {topSkills.map((skill) => (
              <div
                key={skill.name}
                className="glass-card skill-card-lift reveal-up reveal-init"
                style={{
                  padding: '1.6rem 1.4rem',
                  background: 'linear-gradient(135deg, rgba(8, 29, 56, 0.9), rgba(124, 58, 237, 0.15))',
                  border: '1px solid rgba(0, 200, 255, 0.35)',
                  boxShadow: '0 8px 25px rgba(0, 200, 255, 0.12)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.8rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      background: 'rgba(0, 200, 255, 0.18)',
                      color: '#00c8ff',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {skill.status}
                  </span>
                  <Sparkles size={16} style={{ color: '#8b5cf6' }} />
                </div>

                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.4rem' }}>
                  {skill.name}
                </h4>

                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORIZED SKILLS GRID */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {skillCategories.map((category) => {
            const IconComp = categoryIconMap[category.icon] || Cpu;
            return (
              <div
                key={category.name}
                className="glass-card skill-card-lift reveal-up reveal-init"
                style={{
                  padding: '1.8rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(0, 200, 255, 0.1)',
                      border: '1px solid rgba(0, 200, 255, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00c8ff'
                    }}
                  >
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700 }}>
                      {category.name}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {category.description}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginTop: '1.2rem' }}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.45rem 0.85rem',
                        borderRadius: '8px',
                        background: skill.highlighted ? 'rgba(0, 200, 255, 0.12)' : 'rgba(10, 30, 55, 0.8)',
                        border: skill.highlighted ? '1px solid rgba(0, 200, 255, 0.35)' : '1px solid rgba(56, 189, 248, 0.15)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: skill.highlighted ? 700 : 600,
                          color: skill.highlighted ? '#00c8ff' : '#f8fafc'
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.06)',
                          color: '#94a3b8',
                          fontWeight: 500
                        }}
                      >
                        {skill.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
