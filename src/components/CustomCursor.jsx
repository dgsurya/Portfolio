import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (isTouch || !visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
        transform: `translate3d(${pos.x - 150}px, ${pos.y - 150}px, 0)`,
        background: 'radial-gradient(circle, rgba(0, 200, 255, 0.07) 0%, rgba(124, 58, 237, 0.02) 40%, transparent 70%)',
        transition: 'transform 0.15s ease-out, opacity 0.3s ease',
        opacity: visible ? 1 : 0
      }}
    />
  );
}
