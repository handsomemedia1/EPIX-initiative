'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.css';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = Date.now();
    const duration = 1600; // 1.6s max

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);

    // Check if page is already loaded
    const earlyExit = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => setIsLoading(false), 800);
      }
    };

    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 1200);
    } else {
      window.addEventListener('load', earlyExit);
    }

    // Hard cap — never exceed 1.8s
    const fallback = setTimeout(() => setIsLoading(false), 1800);

    return () => {
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
            scale: 1.02,
            filter: 'blur(8px)',
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated background rings */}
          <div className={styles.bgRings}>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.ring}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{
                  scale: [0.6, 1.2, 0.6],
                  opacity: [0, 0.08, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeInOut',
                }}
                style={{
                  width: 250 + i * 120,
                  height: 250 + i * 120,
                }}
              />
            ))}
          </div>

          <div className={styles.loaderContent}>
            {/* Pulsing logo container */}
            <motion.div
              className={styles.logoContainer}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Orbiting ring */}
              <motion.div
                className={styles.orbitRing}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <div className={styles.orbitDot} />
              </motion.div>

              {/* Logo */}
              <motion.div
                className={styles.logoInner}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(46, 125, 50, 0.2)',
                    '0 0 60px rgba(46, 125, 50, 0.4)',
                    '0 0 30px rgba(46, 125, 50, 0.2)',
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/images/logo.jpg"
                  alt="The EPIX Initiative"
                  width={72}
                  height={72}
                  className={styles.logo}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Brand text */}
            <motion.div
              className={styles.brandBlock}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className={styles.brandName}>
                <span className={styles.brandThe}>The</span>
                <span className={styles.brandEpix}>EPIX</span>
                <span className={styles.brandThe}>Initiative</span>
              </h1>
              <motion.p
                className={styles.tagline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Building Africa&apos;s Evidence Base
              </motion.p>
            </motion.div>

            {/* Minimal progress bar */}
            <motion.div
              className={styles.progressWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <div className={styles.progressTrack}>
                <motion.div
                  className={styles.progressFill}
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <span className={styles.progressPct}>
                {Math.min(Math.round(progress), 100)}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
