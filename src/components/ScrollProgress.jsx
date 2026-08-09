import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;

      if (totalScroll > 0) {
        const percentage = (scrollTop / totalScroll) * 100;
        setScrollWidth(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: 'rgba(0, 200, 255, 0.1)',
        zIndex: 10001,
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          width: `${scrollWidth}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #00c8ff 0%, #38bdf8 50%, #8b5cf6 100%)',
          boxShadow: '0 0 10px rgba(0, 200, 255, 0.8)',
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  );
}
