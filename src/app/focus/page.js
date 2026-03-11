'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Loader from '@/components/ui/Loader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './focus.module.css';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    },
};

function AnimatedSection({ children, className, parallax = false }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], parallax ? [50, -50] : [0, 0]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className={className}
            style={{ y }}
        >
            {children}
        </motion.div>
    );
}

// Focus areas data
const focusAreas = [
    {
        id: 1,
        title: 'Adolescent Health',
        icon: '🧠',
        overview: 'Young people are 60% of Nigeria\'s population but invisible in health research. We design culturally relevant mental health and sexual health solutions that actually work for African youth.',
        currentFocus: 'Mental Health',
        currentFocusDetails: [
            'Brief description of the project',
            'What is being researched',
            'What is being developed',
            'Expected outcomes',
            'Status/timeline',
        ],
        comingSoon: ['Sexual & Reproductive Health', 'Substance Abuse Prevention'],
        cardStyle: '',
    },
    {
        id: 2,
        title: 'Non-Communicable Diseases (NCDs)',
        icon: '❤️‍🩹',
        overview: 'NCDs are rising rapidly across Africa, often undetected until fatal. We build community-led surveillance systems that identify these "silent killers" early, transforming data into practical tools that manage chronic disease risks before they claim lives.',
        currentFocus: 'To Be Determined',
        currentFocusDetails: [
            'Brief description of the project',
            'What is being researched',
            'What is being developed',
            'Expected outcomes',
            'Status/timeline',
        ],
        comingSoon: ['Additional NCD sub-areas to be determined'],
        cardStyle: 'Green',
    },
    {
        id: 3,
        title: 'Digital Health & AI',
        icon: '🤖',
        overview: 'You cannot improve what you cannot measure. We leverage AI and data analytics to digitize community health systems, transforming raw data into actionable intelligence that enhances decision-making and build the precision tools that turn data into health solutions.',
        currentFocus: 'To Be Determined',
        currentFocusDetails: [
            'Brief description of the project',
            'What is being researched',
            'What is being developed',
            'Expected outcomes',
            'Status/timeline',
        ],
        comingSoon: ['Additional digital health sub-areas to be determined'],
        cardStyle: 'Gradient',
    },
];

export default function FocusPage() {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
    const heroScale = useTransform(heroScroll, [0, 0.5], [1, 1.1]);
    const heroY = useTransform(heroScroll, [0, 0.5], [0, 100]);

    return (
        <>
            <Loader />
            <Navbar />

            <main className={styles.focusPage}>
                {/* ====== HERO SECTION ====== */}
                <motion.section
                    ref={heroRef}
                    className={styles.hero}
                    style={{ opacity: heroOpacity }}
                >
                    <motion.div
                        className={styles.heroOverlay}
                        style={{ scale: heroScale, y: heroY }}
                    />
                    <div className={styles.heroContent}>
                        <motion.h1
                            className={styles.heroTitle}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Our Focus Areas
                        </motion.h1>
                        <motion.span
                            className={styles.heroFormula}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            Gap + Research + Solutions = Change
                        </motion.span>
                        <motion.p
                            className={styles.heroSubtitle}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            We concentrate on areas where Africa&apos;s disease burden is high but evidence generation is low.
                        </motion.p>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        className={styles.scrollIndicator}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <span>Scroll to explore</span>
                        <motion.div
                            className={styles.scrollLine}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <div className={styles.scrollDot} />
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* ====== THE MODEL ====== */}
                <section className={styles.modelSection}>
                    <div className={styles.container}>
                        <AnimatedSection>
                            <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                <span className={styles.sectionLabel}>The Model</span>
                                <h2 className={styles.sectionTitle}>How Our Focus Areas Work</h2>
                            </motion.div>

                            <motion.div variants={fadeInUp} className={styles.modelDiagram}>
                                <motion.div
                                    className={styles.modelStep}
                                    whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)' }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <span className={styles.modelStepIcon}>🔍</span>
                                    <span className={styles.modelStepLabel}>Step 1</span>
                                    <span className={styles.modelStepTitle}>IDENTIFY Critical Gaps</span>
                                </motion.div>

                                <motion.span
                                    className={styles.modelArrow}
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>

                                <motion.div
                                    className={styles.modelStep}
                                    whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)' }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <span className={styles.modelStepIcon}>📊</span>
                                    <span className={styles.modelStepLabel}>Step 2</span>
                                    <span className={styles.modelStepTitle}>RESEARCH Evidence</span>
                                </motion.div>

                                <motion.span
                                    className={styles.modelArrow}
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                                >
                                    →
                                </motion.span>

                                <motion.div
                                    className={styles.modelStep}
                                    whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)' }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <span className={styles.modelStepIcon}>🛠️</span>
                                    <span className={styles.modelStepLabel}>Step 3</span>
                                    <span className={styles.modelStepTitle}>DEVELOP Solutions</span>
                                </motion.div>
                            </motion.div>

                            <motion.p variants={fadeInUp} className={styles.modelDescription}>
                                Our focus areas operate on this model: We identify critical health gaps where African research is lacking, generate locally-relevant evidence, and develop solutions tested in our context.
                            </motion.p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ====== FOCUS AREA 1: ADOLESCENT HEALTH ====== */}
                {focusAreas.map((area, index) => {
                    const isReversed = index % 2 !== 0;
                    const bgClass = isReversed ? styles.focusAreaSectionAlt : styles.focusAreaSectionDefault;
                    const cardStyleClass = area.cardStyle === 'Green'
                        ? styles.focusIconCardGreen
                        : area.cardStyle === 'Gradient'
                            ? styles.focusIconCardGradient
                            : '';

                    return (
                        <section key={area.id} className={`${styles.focusAreaSection} ${bgClass}`}>
                            <div className={styles.container}>
                                <AnimatedSection parallax>
                                    <div className={`${styles.focusAreaGrid} ${isReversed ? styles.focusAreaGridReverse : ''}`}>
                                        {/* Text Content */}
                                        <motion.div variants={isReversed ? fadeInRight : fadeInLeft} className={styles.focusAreaContent}>
                                            <motion.div
                                                className={styles.focusAreaNumber}
                                                whileHover={{ scale: 1.2, rotate: 15 }}
                                                transition={{ type: 'spring', stiffness: 400 }}
                                            >
                                                {area.id}
                                            </motion.div>
                                            <h2 className={styles.focusAreaTitle}>{area.title}</h2>
                                            <p className={styles.focusAreaText}>{area.overview}</p>

                                            {/* Current Focus Card */}
                                            <motion.div
                                                className={styles.currentFocusCard}
                                                whileHover={{ y: -4 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <span className={styles.currentFocusLabel}>Current Focus</span>
                                                <h3 className={styles.currentFocusTitle}>{area.currentFocus}</h3>
                                                <p className={styles.currentFocusText}>
                                                    This section will be filled with details about the chosen {area.currentFocus.toLowerCase()} research and development project, including:
                                                </p>
                                                <ul className={styles.currentFocusList}>
                                                    {area.currentFocusDetails.map((detail, i) => (
                                                        <li key={i}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </motion.div>

                                            {/* Coming Soon */}
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {area.comingSoon.map((item, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className={styles.comingSoonBadge}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <span className={styles.comingSoonDot} />
                                                        Coming Soon: {item}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>

                                        {/* Visual Card */}
                                        <motion.div variants={isReversed ? fadeInLeft : fadeInRight} className={styles.focusAreaVisual}>
                                            <motion.div
                                                className={`${styles.focusIconCard} ${cardStyleClass}`}
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            >
                                                <div className={`${styles.floatingShape} ${styles.floatingShape1}`} />
                                                <div className={`${styles.floatingShape} ${styles.floatingShape2}`} />
                                                <motion.span
                                                    className={styles.focusIconEmoji}
                                                    animate={{ y: [0, -10, 0] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                                >
                                                    {area.icon}
                                                </motion.span>
                                                <span className={styles.focusIconTitle}>{area.title}</span>
                                                <span className={styles.focusIconSubtitle}>Focus Area {area.id}</span>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </section>
                    );
                })}

                {/* ====== CALL TO ACTION ====== */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <AnimatedSection className={styles.ctaContent}>
                            <motion.h2 variants={fadeInUp} className={styles.ctaTitle}>
                                See How We Address These Challenges
                            </motion.h2>
                            <motion.p variants={fadeInUp} className={styles.ctaSubtitle}>
                                Our three-engine model turns research into impact.
                            </motion.p>
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: 'spring', stiffness: 400 }}
                            >
                                <Link href="/work" className={styles.ctaButton}>
                                    Explore Our Work →
                                </Link>
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
