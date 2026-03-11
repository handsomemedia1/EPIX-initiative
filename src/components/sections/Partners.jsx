'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import styles from './Partners.module.css';

// Placeholder partner logos
const partners = [
    { id: 1, name: 'Partner 1' },
    { id: 2, name: 'Partner 2' },
    { id: 3, name: 'Partner 3' },
    { id: 4, name: 'Partner 4' },
    { id: 5, name: 'Partner 5' },
    { id: 6, name: 'Partner 6' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
        },
    },
};

export default function Partners() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className={styles.partners} id="partners" ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
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
                        Collaborations
                    </motion.span>
                    <h2 className={styles.title}>Our Partners</h2>
                    <p className={styles.subtitle}>
                        Working together to transform health outcomes across Africa
                    </p>
                </motion.div>

                {/* Partners Grid */}
                <motion.div
                    className={styles.partnersGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {partners.map((partner) => (
                        <motion.div
                            key={partner.id}
                            className={styles.partnerCard}
                            variants={logoVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                rotate: Math.random() * 4 - 2, // Slight random rotation
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            }}
                        >
                            <div className={styles.logoPlaceholder}>
                                <motion.span
                                    initial={{ opacity: 0.5 }}
                                    whileHover={{ opacity: 1, color: '#2E7D32' }}
                                >
                                    {partner.name}
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Become a Partner CTA */}
                <motion.div
                    className={styles.ctaWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <p className={styles.ctaText}>
                        Interested in partnering with us?
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/partner" className={styles.ctaLink}>
                            Become a Partner
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
                </motion.div>
            </div>
        </section>
    );
}
