'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import styles from './GetInvolved.module.css';

const actions = [
    {
        id: 'academy',
        title: 'Join the Academy',
        description: 'Apply to become an EPIX Fellow and build your research skills.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
        link: '/apply',
        primary: true,
    },
    {
        id: 'partner',
        title: 'Partner With Us',
        description: 'Collaborate with us to scale health solutions across Africa.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        link: '/partner',
        primary: false,
    },
    {
        id: 'support',
        title: 'Support Our Work',
        description: 'Donate or sponsor programs that train the next generation.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        link: '/donate',
        primary: false,
    },
];

export default function GetInvolved() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className={styles.getInvolved} id="get-involved" ref={ref}>
            <div className={styles.container}>
                {/* Header */}
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
                        Take Action
                    </motion.span>
                    <h2 className={styles.title}>Get Involved</h2>
                    <p className={styles.subtitle}>
                        Be part of the generation that builds Africa&apos;s research capacity today.
                    </p>
                </motion.div>

                {/* Action Cards */}
                <div className={styles.actionsGrid}>
                    {actions.map((action, index) => (
                        <motion.div
                            key={action.id}
                            className={`${styles.actionCard} ${action.primary ? styles.primaryCard : ''}`}
                            initial={{ opacity: 0, y: 50, rotateX: -10 }}
                            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.2 + index * 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                                y: -15,
                                scale: 1.03,
                                rotateY: 5,
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <motion.div
                                className={styles.iconWrapper}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                {action.icon}
                            </motion.div>
                            <h3 className={styles.cardTitle}>{action.title}</h3>
                            <p className={styles.cardDescription}>{action.description}</p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href={action.link} className={styles.cardButton}>
                                    {action.title}
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
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <motion.div
                className={styles.bgDecor}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{ duration: 6, repeat: Infinity }}
            />
        </section>
    );
}
