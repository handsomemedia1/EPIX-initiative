'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import styles from './ImpactStats.module.css';

const stats = [
    {
        id: 'fellows',
        value: 250,
        suffix: '+',
        label: 'Fellows Trained',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        id: 'research',
        value: 45,
        suffix: '+',
        label: 'Research Projects',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
    },
    {
        id: 'communities',
        value: 30,
        suffix: '+',
        label: 'Communities Impacted',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        id: 'partners',
        value: 15,
        suffix: '+',
        label: 'Partner Organizations',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        ),
    },
];

function AnimatedCounter({ value, isInView }) {
    const spring = useSpring(0, { stiffness: 50, damping: 20 });
    const display = useTransform(spring, (val) => Math.floor(val));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    useEffect(() => {
        return display.on('change', (val) => setDisplayValue(val));
    }, [display]);

    return <span>{displayValue}</span>;
}

function StatCard({ stat, index, isInView }) {
    return (
        <motion.div
            className={styles.statCard}
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                y: -10,
                scale: 1.03,
                rotateY: 5,
                boxShadow: '15px 15px 30px rgba(0,0,0,0.25), -10px -10px 20px rgba(255,255,255,0.05)',
            }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Animated Icon */}
            <motion.div
                className={styles.iconWrapper}
                whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    backgroundColor: 'var(--color-green)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {stat.icon}
            </motion.div>

            {/* Animated Value */}
            <div className={styles.statValue}>
                <AnimatedCounter value={stat.value} isInView={isInView} />
                <motion.span
                    className={styles.suffix}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                >
                    {stat.suffix}
                </motion.span>
            </div>

            <div className={styles.statLabel}>{stat.label}</div>

            {/* Decorative Ring */}
            <motion.div
                className={styles.decorRing}
                animate={isInView ? {
                    rotate: 360,
                    scale: [1, 1.1, 1],
                } : {}}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity },
                }}
            />
        </motion.div>
    );
}

export default function ImpactStats() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section className={styles.impactStats} id="impact" ref={sectionRef}>
            <div className={styles.container}>
                {/* Animated Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className={styles.label}
                        whileHover={{ scale: 1.05 }}
                    >
                        By The Numbers
                    </motion.span>
                    <h2 className={styles.title}>Impact So Far</h2>
                    <p className={styles.subtitle}>
                        We&apos;re building momentum—one researcher, one study, one community at a time.
                    </p>
                </motion.div>

                {/* Stats Grid with 3D Cards */}
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <StatCard
                            key={stat.id}
                            stat={stat}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className={styles.bgDecor}>
                <motion.div
                    className={styles.bgCircle}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
            </div>
        </section>
    );
}
