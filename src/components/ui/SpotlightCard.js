"use client";

import { useRef, useState } from 'react';
import styles from './SpotlightCard.module.css';

export default function SpotlightCard({ children, className = '' }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.spotlightCard} ${className}`}
    >
      {/* The Glow Effect */}
      <div
        className={styles.spotlightGlow}
        style={{
          opacity,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      
      {/* The Content Wrapper to sit above the glow */}
      <div className={styles.spotlightContent}>
        {children}
      </div>
    </div>
  );
}
