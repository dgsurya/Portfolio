import React, { useEffect, useState } from 'react';
import { ArrowRight, Award, Linkedin, Sparkles, Brain, Cpu, Database, Network } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 45;
    const moveY = (clientY - window.innerHeight / 2) / 45;
    setMousePos({ x: moveX, y: moveY });
  };

  return (
    <section
      id="home"
      className="section"
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          className="hero-container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Hero Content */}
          <div className="hero-left animate-hero-fade-up">
            {/* Status Badge */}
            <div
              className="hero-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                background: 'rgba(0, 200, 255, 0.08)',
                border: '1px solid rgba(0, 200, 255, 0.28)',
                color: '#38bdf8',
                fontSize: '0.88rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                boxShadow: '0 0 15px rgba(0, 200, 255, 0.15)'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#00c8ff',
                  boxShadow: '0 0 10px #00c8ff',
                  display: 'inline-block'
                }}
              />
              Open to Opportunities
            </div>

            {/* Main Greeting Heading */}
            <h1
              className="hero-title"
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1.2rem',
                letterSpacing: '-0.02em'
              }}
            >
              Hi, I'm{' '}
              <span className="gradient-text animate-gradient-text">
                SURYA D G
              </span>
            </h1>

            {/* Rotating Role Subheading */}
            <div
              style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                fontWeight: 700,
                color: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
                minHeight: '40px'
              }}
            >
              <span style={{ color: '#94a3b8' }}>Aspiring</span>
              <span
                className="animate-pulse-subtle"
                style={{
                  color: '#00c8ff',
                  background: 'rgba(0, 200, 255, 0.1)',
                  padding: '0.2rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 200, 255, 0.25)'
                }}
              >
                {profile.roles[roleIndex]}
              </span>
            </div>

            {/* Tagline */}
            <h2
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                fontWeight: 600,
                color: '#38bdf8',
                marginBottom: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={18} style={{ color: '#00c8ff' }} />
              {profile.tagline}
            </h2>

            {/* Short Bio */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#94a3b8',
                maxWidth: '620px',
                marginBottom: '2.2rem'
              }}
            >
              {profile.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">
                Explore My Work <ArrowRight size={17} />
              </a>

              <a href="#certifications" className="btn btn-secondary">
                View Certifications <Award size={17} />
              </a>

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={17} /> LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Right Hero Visual / AI Neural Diagram */}
          <div
            className="hero-right animate-neural-float"
            style={{
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                borderColor: 'rgba(56, 189, 248, 0.3)',
                background: 'linear-gradient(135deg, rgba(8, 29, 56, 0.8), rgba(6, 20, 42, 0.9))'
              }}
            >
              {/* Visual Node Diagram SVG */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '320px',
                  height: '320px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Center Brain Core */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 200, 255, 0.3) 0%, rgba(124, 58, 237, 0.1) 70%)',
                    border: '2px solid #00c8ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 30px rgba(0, 200, 255, 0.4)',
                    zIndex: 2
                  }}
                >
                  <Brain size={44} style={{ color: '#00c8ff' }} />
                </div>

                {/* Orbiting Satellite Tech Nodes */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '30px',
                    padding: '0.6rem',
                    borderRadius: '12px',
                    background: 'rgba(10, 30, 55, 0.9)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#38bdf8',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)'
                  }}
                >
                  <Cpu size={16} /> Python
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '25px',
                    right: '20px',
                    padding: '0.6rem',
                    borderRadius: '12px',
                    background: 'rgba(10, 30, 55, 0.9)',
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#8b5cf6',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 15px rgba(124, 58, 237, 0.2)'
                  }}
                >
                  <Database size={16} /> RDBMS
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '20px',
                    padding: '0.6rem',
                    borderRadius: '12px',
                    background: 'rgba(10, 30, 55, 0.9)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#22d3ee',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)'
                  }}
                >
                  <Network size={16} /> TensorFlow
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '25px',
                    right: '25px',
                    padding: '0.6rem',
                    borderRadius: '12px',
                    background: 'rgba(10, 30, 55, 0.9)',
                    border: '1px solid rgba(0, 200, 255, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#00c8ff',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 15px rgba(0, 200, 255, 0.2)'
                  }}
                >
                  <Sparkles size={16} /> Deep Learning
                </div>

                {/* SVG Connecting Lines */}
                <svg
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none'
                  }}
                >
                  <line x1="80" y1="50" x2="160" y2="160" stroke="rgba(0, 200, 255, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="240" y1="50" x2="160" y2="160" stroke="rgba(0, 200, 255, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="80" y1="270" x2="160" y2="160" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="240" y1="270" x2="160" y2="160" stroke="rgba(0, 200, 255, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Status footer pill */}
              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  background: 'rgba(0, 200, 255, 0.05)',
                  border: '1px solid rgba(0, 200, 255, 0.15)',
                  fontSize: '0.82rem',
                  color: '#94a3b8',
                  textAlign: 'center',
                  fontFamily: 'var(--font-code)'
                }}
              >
                Model: Neural AI Architecture • Python
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
