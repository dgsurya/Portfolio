import React, { useEffect, useState } from 'react';
import { Linkedin, Github, FileText, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section intersection detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        background: scrolled ? 'rgba(2, 8, 23, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <div 
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(0, 200, 255, 0.2), rgba(124, 58, 237, 0.2))',
              border: '1px solid rgba(0, 200, 255, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.95rem',
              color: '#00c8ff'
            }}
          >
            S
          </div>
          <span style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.04em', color: '#ffffff' }}>
            SURYA <span style={{ color: '#00c8ff' }}>D G</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  color: isActive ? '#00c8ff' : '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '0.4rem 0'
                }}
              >
                {item.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #00c8ff, #8b5cf6)',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px #00c8ff'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions & Social Links */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              aria-label="Surya D G LinkedIn Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(10, 30, 55, 0.8)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8',
                transition: 'all 0.25s ease'
              }}
              className="social-btn"
            >
              <Linkedin size={18} />
            </a>
          )}

          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              aria-label="Surya D G GitHub Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(10, 30, 55, 0.8)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f8fafc',
                transition: 'all 0.25s ease'
              }}
              className="social-btn"
            >
              <Github size={18} />
            </a>
          )}

          {profile.resume && (
            <a
              href={profile.resume}
              download
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <FileText size={15} /> Resume
            </a>
          )}

          {/* Mobile Hamburger Button */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            style={{
              display: 'none',
              background: 'rgba(10, 30, 55, 0.9)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#f8fafc',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: 'rgba(2, 8, 23, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  color: isActive ? '#00c8ff' : '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: isActive ? 700 : 500,
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
