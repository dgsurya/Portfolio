import React from 'react';
import { Linkedin, Mail, MessageSquare, MapPin, Send, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={15} /> Open to Collaborations
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open for internships, entry-level opportunities, AI/ML collaborations and Data Science projects.
          </p>
        </div>

        <div
          className="glass-card reveal-up reveal-init"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(10, 30, 55, 0.9), rgba(6, 20, 42, 0.95))',
            borderColor: 'rgba(56, 189, 248, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(0, 200, 255, 0.12)',
              border: '1px solid rgba(0, 200, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00c8ff',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 0 25px rgba(0, 200, 255, 0.2)'
            }}
          >
            <Send size={28} />
          </div>

          <h3 style={{ fontSize: '1.6rem', color: '#ffffff', fontWeight: 800, marginBottom: '1rem' }}>
            Start a Conversation with Surya D G
          </h3>

          <p
            style={{
              fontSize: '1.08rem',
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: '650px',
              margin: '0 auto 2rem auto'
            }}
          >
            I'm open to internship opportunities, entry-level roles, AI/ML collaborations and Data Science projects. Feel free to connect with me and discuss technology, opportunities or collaborative ideas.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem', color: '#38bdf8', fontSize: '0.95rem', fontWeight: 600 }}>
            <MapPin size={18} /> {profile.location}
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap'
            }}
          >
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
              >
                <Linkedin size={20} /> Connect on LinkedIn
              </a>
            )}

            {/* Email button auto-hides if profile.email is empty */}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-secondary"
                style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
              >
                <Mail size={20} /> Email Me
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
