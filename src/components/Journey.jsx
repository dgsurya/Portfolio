import React from 'react';
import { Route, Database, Code2, Cpu, Layers, BarChart3, Brain, Sparkles, FolderGit2 } from 'lucide-react';
import { journeyMilestones } from '../data/journey';

const iconMap = {
  Database: Database,
  Code2: Code2,
  Cpu: Cpu,
  Layers: Layers,
  BarChart3: BarChart3,
  Brain: Brain,
  Sparkles: Sparkles,
  FolderGit2: FolderGit2
};

export default function Journey() {
  return (
    <section className="section" style={{ position: 'relative', zIndex: 1, backgroundColor: 'rgba(6, 20, 42, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Route size={15} /> Milestone Timeline
          </div>
          <h2 className="section-title">Learning & Professional Journey</h2>
          <p className="section-subtitle">
            A chronological timeline of verified certifications, internship training, and technical skill milestones.
          </p>
        </div>

        {/* HORIZONTALLY SCROLLABLE WRAPPER ON MOBILE */}
        <div
          style={{
            overflowX: 'auto',
            paddingBottom: '1.5rem',
            msOverflowStyle: 'none',
            scrollbarWidth: 'thin'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              minWidth: '300px'
            }}
          >
            {journeyMilestones.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="glass-card skill-card-lift reveal-up reveal-init"
                  style={{
                    padding: '1.5rem',
                    position: 'relative',
                    borderTop: '3px solid #00c8ff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          color: '#00c8ff',
                          fontFamily: 'var(--font-code)'
                        }}
                      >
                        {item.date}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          background: 'rgba(124, 58, 237, 0.15)',
                          color: '#8b5cf6',
                          fontWeight: 600
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(0, 200, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#00c8ff',
                          flexShrink: 0
                        }}
                      >
                        <IconComp size={16} />
                      </div>
                      <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 800, lineHeight: 1.3 }}>
                        {item.title}
                      </h3>
                    </div>

                    <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 600, marginBottom: '0.6rem' }}>
                      {item.organization}
                    </div>

                    <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
