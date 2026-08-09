import React, { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Cpu } from 'lucide-react';
import { profile } from '../data/profile';

const iconList = [Briefcase, Award, Cpu];

export default function Stats() {
  const [counts, setCounts] = useState(profile.stats.map(() => 0));
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          
          profile.stats.forEach((stat, index) => {
            const target = stat.count;
            const duration = 1200;
            const stepTime = 40;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.floor(current);
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ padding: '3rem 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem'
          }}
        >
          {profile.stats.map((stat, idx) => {
            const Icon = iconList[idx] || Cpu;
            return (
              <div
                key={idx}
                className="glass-card skill-card-lift reveal-up reveal-init"
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(10, 30, 55, 0.8), rgba(6, 20, 42, 0.95))',
                  borderColor: 'rgba(56, 189, 248, 0.25)'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(0, 200, 255, 0.12)',
                    border: '1px solid rgba(0, 200, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00c8ff',
                    marginBottom: '1rem',
                    boxShadow: '0 0 15px rgba(0, 200, 255, 0.2)'
                  }}
                >
                  <Icon size={24} />
                </div>

                <div
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.2rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-main)'
                  }}
                >
                  <span className="gradient-text">{counts[idx]}</span>
                  {stat.suffix}
                </div>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#94a3b8',
                    fontWeight: 600,
                    margin: 0
                  }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
