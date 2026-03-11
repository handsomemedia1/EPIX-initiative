'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import styles from './FocusAreas.module.css';

const focusAreas = [
    {
        id: 'adolescent-health',
        title: 'Adolescent Health',
        description: 'Young people make up 60% of Nigeria\'s population but remain invisible in health policy. We design culturally relevant mental health and sexual health programs that build resilience and deliver measurable impact for Africa\'s next generation.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        link: '/focus/adolescent-health',
        color: '#E91E63',
        stats: '60%+',
        statLabel: 'Youth Population',
    },
    {
        id: 'ncds',
        title: 'Non-Communicable Diseases (NCDs)',
        description: 'NCDs are rising rapidly across Africa, often undetected until fatal. We build community-led surveillance systems that identify these "silent killers" early, transforming data into practical tools that manage chronic disease risks before they claim lives.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        link: '/focus/ncds',
        color: '#FF5722',
        stats: '#1',
        statLabel: 'Cause of Death by 2030',
    },
    {
        id: 'digital-health',
        title: 'Digital Health & AI',
        description: 'You cannot improve what you cannot measure. We leverage AI and data analytics to digitize community health systems, transforming raw data into actionable intelligence that enhances decision-making and builds the precision tools that turn data into health solutions.',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <path d="M6 8h.01M10 8h.01M14 8h4" />
            </svg>
        ),
        link: '/focus/digital-health',
        color: '#2196F3',
        stats: '10x',
        statLabel: 'Data Efficiency',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function FocusAreas() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className={styles.focusAreas} id="focus" ref={ref}>
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
                        Our Focus
                    </motion.span>
                    <h2 className={styles.title}>Where We Focus</h2>
                    <p className={styles.subtitle}>
                        Tackling Africa&apos;s most pressing health challenges with data-driven solutions
                    </p>
                </motion.div>

                {/* Cards */}
                <div className={styles.cardsContainer}>
                    {focusAreas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            className={styles.card}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            whileHover={{
                                y: -15,
                                scale: 1.02,
                                rotateY: 3,
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className={styles.cardInner}>
                                {/* Icon with Accent */}
                                <motion.div
                                    className={styles.iconWrapper}
                                    style={{ '--accent-color': area.color }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 10,
                                        backgroundColor: area.color,
                                    }}
                                >
                                    {area.icon}
                                </motion.div>

                                {/* Stat Badge */}
                                <motion.div
                                    className={styles.statBadge}
                                    style={{ backgroundColor: area.color }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <span className={styles.statValue}>{area.stats}</span>
                                    <span className={styles.statLabel}>{area.statLabel}</span>
                                </motion.div>

                                {/* Content */}
                                <h3 className={styles.cardTitle}>{area.title}</h3>
                                <p className={styles.cardDescription}>{area.description}</p>

                                {/* Link */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                >
                                    <Link href={area.link} className={styles.cardLink}>
                                        Explore This Focus
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

                            {/* Decorative Corner */}
                            <motion.div
                                className={styles.cornerDecor}
                                style={{ borderColor: area.color }}
                                animate={{
                                    borderWidth: ['2px', '4px', '2px'],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
