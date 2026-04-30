'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.css';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing core systems');

  const loadingMessages = [
    'Initializing core systems',
    'Syncing research databases',
    'Loading EPIX academy modules',
    'Establishing secure connections',
    'Finalizing interface protocols'
  ];

  useEffect(() => {
    let start = Date.now();
    const minDuration = 3500; // Force at least 3.5 seconds
    const maxDuration = 4500; // Absolute max

    // Cycle through messages based on progress
    const messageInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingMessages.indexOf(prev);
        if (currentIndex < loadingMessages.length - 1) {
          return loadingMessages[currentIndex + 1];
        }
        return prev;
      });
    }, 700);

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / minDuration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);

    // Only exit after minDuration is met, even if page loaded
    const earlyExit = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => setIsLoading(false), minDuration);
      }
    };

    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), minDuration);
    } else {
      window.addEventListener('load', earlyExit);
    }

    // Hard fallback
    const fallback = setTimeout(() => setIsLoading(false), maxDuration);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(fallback);
      window.removeEventListener('load', earlyExit);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loaderWrapper}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            filter: 'blur(10px)',
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Complex Animated Background Map/Network effect */}
          <div className={styles.networkBackground}>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`node-${i}`}
                className={styles.networkNode}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0, 1.5, 2],
                  x: [0, (Math.random() - 0.5) * 300],
                  y: [0, (Math.random() - 0.5) * 300]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          <div className={styles.gridBackground} />

          <div className={styles.loaderContent}>
            {/* The Logo with a pulse effect */}
            <motion.div
              className={styles.logoWrapper}
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className={styles.glow}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <Image
                src="/images/logo.jpg"
                alt="The EPIX Initiative"
                width={72}
                height={72}
                className={styles.logo}
                priority
              />
            </motion.div>

            {/* Brand Name */}
            <motion.div
              className={styles.brandBlock}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h1 className={styles.brandName}>
                The <span className={styles.brandEpix}>EPIX</span> Initiative
              </h1>
            </motion.div>

            {/* Loading text / decoding effect */}
            <motion.div
              className={styles.loadingInfo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.statusLine}>
                <span className={styles.statusDot} />
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={loadingText}
                    className={styles.statusText}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {loadingText}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className={styles.progressContainer}>
                <span className={styles.progressPct}>{Math.min(Math.round(progress), 100)}%</span>
                <div className={styles.progressTrack}>
                  <motion.div
                    className={styles.progressFill}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
