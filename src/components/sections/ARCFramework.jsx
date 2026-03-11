'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './ARCFramework.module.css';

const arcCards = [
    {
        id: 'academy',
        title: 'The Academy',
        description: 'We train students and young health professionals in practical, hands-on skills—moving beyond textbooks to master the tools that turn raw data into global health solutions.',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
        link: '/academy',
        linkText: 'Explore Our Academy',
        color: '#00C853',
    },
    {
        id: 'research',
        title: 'The Research Hub',
        description: 'Our fellows lead research, not just study it. Paired with expert mentors, they design studies, collect primary data, and publish findings that influence health policy across Africa.',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <path d="M11 8v6M8 11h6" />
            </svg>
        ),
        link: '/research',
        linkText: 'Learn More About Our Research',
        color: '#1E3A5F',
    },
    {
        id: 'community',
        title: 'The Community Labs',
        description: 'We transform evidence into action by piloting health programs in real communities—markets, schools, clinics—testing solutions that scale across Nigeria and beyond.',
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        link: '/community',
        linkText: 'Be Part of Our Community',
        color: '#00BFA5',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        rotateX: -15,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function ARCFramework() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className={styles.arcFramework} id="arc-framework" ref={ref}>
            <div className={styles.container}>
                {/* Animated Section Header */}
                <motion.div
                    className={styles.header}
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.span
                        className={styles.label}
                        whileHover={{ scale: 1.05 }}
                    >
                        Our Approach
                    </motion.span>
                    <h2 className={styles.title}>
                        How We Work: The{' '}
                        <motion.span
                            className={styles.highlight}
                            animate={isInView ? {
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            } : {}}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            ARC
                        </motion.span>
                        {' '}Framework
                    </h2>
                    <p className={styles.subtitle}>
                        Academy • Research • Community
                    </p>
                </motion.div>

                {/* 3D Animated Cards Grid */}
                <motion.div
                    className={styles.cardsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {arcCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={styles.card}
                            variants={cardVariants}
                            whileHover={{
                                y: -15,
                                rotateY: 5,
                                rotateX: 5,
                                scale: 1.02,
                                boxShadow: '20px 20px 40px rgba(0,0,0,0.15), -10px -10px 30px rgba(255,255,255,0.9)',
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                        >
                            <div className={styles.cardInner}>
                                {/* Animated Icon */}
                                <motion.div
                                    className={styles.iconWrapper}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5,
                                        backgroundColor: card.color,
                                        color: '#fff',
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {card.icon}
                                </motion.div>

                                {/* Content */}
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDescription}>{card.description}</p>

                                {/* Animated Link */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                >
                                    <Link href={card.link} className={styles.cardLink}>
                                        {card.linkText}
                                        <motion.svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </motion.svg>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Decorative Glow */}
                            <motion.div
                                className={styles.cardGlow}
                                style={{ background: card.color }}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.1 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
