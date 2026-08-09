import React from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, Layers } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  const hasProjects = projects && projects.length > 0;

  return (
    <section id="projects" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={15} /> Technical Work
          </div>
          <h2 className="section-title">AI & ML Projects</h2>
          <p className="section-subtitle">
            Hands-on machine learning implementations, data science analytical pipelines and software solutions.
          </p>
        </div>

        {!hasProjects ? (
          /* Graceful Empty State as Instructed */
          <div
            className="glass-card reveal-up reveal-init"
            style={{
              maxWidth: '650px',
              margin: '0 auto',
              padding: '3.5rem 2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(8, 29, 56, 0.7), rgba(6, 20, 42, 0.9))',
              borderColor: 'rgba(56, 189, 248, 0.25)'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(0, 200, 255, 0.1)',
                border: '1px solid rgba(0, 200, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00c8ff',
                marginBottom: '1.25rem',
                boxShadow: '0 0 20px rgba(0, 200, 255, 0.15)'
              }}
            >
              <Layers size={30} />
            </div>

            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.6rem' }}>
              Projects are being prepared for showcase.
            </h3>

            <p style={{ fontSize: '0.98rem', color: '#94a3b8', maxWidth: '480px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Technical project documentation, GitHub repositories, and live demonstrations will be published here shortly.
            </p>

            <div
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(0, 200, 255, 0.06)',
                border: '1px solid rgba(0, 200, 255, 0.2)',
                color: '#38bdf8',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              Check back soon for updates
            </div>
          </div>
        ) : (
          /* Ready Architecture for Future Project Cards */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '2rem'
            }}
          >
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="glass-card project-card-lift reveal-up reveal-init"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {proj.image && (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        marginBottom: '1.2rem'
                      }}
                    />
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span className="badge">{proj.status || 'Project'}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.5rem' }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', marginBottom: '1rem' }}>
                    {proj.shortDescription}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {proj.techStack.map((t) => (
                      <span key={t} className="badge badge-purple">{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  {proj.githubUrl && (
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
                      <Github size={15} /> Code
                    </a>
                  )}
                  {proj.liveDemoUrl && (
                    <a href={proj.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                      <ExternalLink size={15} /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
