import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 950);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        backgroundColor: '#020817',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.4s ease, visibility 0.4s ease'
      }}
    >
      <div 
        style={{
          position: 'relative',
          width: '100px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Glowing Neural Ring */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid rgba(0, 200, 255, 0.15)',
            borderTopColor: '#00c8ff',
            borderRightColor: '#7c3aed',
            animation: 'neural-loader 1s ease-in-out infinite'
          }}
        />
        
        {/* SDG Monogram */}
        <span 
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: '1.8rem',
            letterSpacing: '0.15em',
            background: 'linear-gradient(135deg, #00c8ff, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          SDG
        </span>
      </div>

      <p 
        style={{
          marginTop: '1.2rem',
          fontSize: '0.85rem',
          color: '#94a3b8',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 600
        }}
      >
        SURYA D G • AI / ML
      </p>
    </div>
  );
}
