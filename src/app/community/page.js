'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Loader from '@/components/ui/Loader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './community.module.css';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1, scale: 1,
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

// Resources data
const resources = [
    {
        id: 1,
        title: 'Publications',
        subtitle: 'Don\'t just guess—know the facts.',
        text: 'Access the official white papers, policy briefs, and epidemiological studies produced by The EPIX R&D team. These documents are shaping the conversation on health systems in Nigeria.',
        label: 'Available Resources',
        items: [
            'Research Papers & Journals',
            'Health Data Reports',
            'Op-Eds & Articles',
        ],
    },
    {
        id: 2,
        title: 'The Fellows\' Portfolio',
        subtitle: 'Real-World Solutions from the Next Generation.',
        text: 'See what is possible when training meets talent. This section showcases the top-tier output from our School of Grant Writing and School of Data. These aren\'t just assignments; they are practical proposals and models ready for implementation.',
        label: 'Featured Work',
        items: [
            'Winning Grant Proposals (Redacted)',
            'Data Visualization Projects',
            'Case Study Solutions',
        ],
    },
];

const toolkitDownloads = [
    { name: 'Grant Readiness Checklist', icon: '📋' },
    { name: 'The "No-Math" Budget Template', icon: '📊' },
];

export default function CommunityPage() {
    const [email, setEmail] = useState('');
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
    const heroScale = useTransform(heroScroll, [0, 0.5], [1, 1.1]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Frontend-only for now
        alert(`Thanks for joining! We'll send updates to ${email}`);
        setEmail('');
    };

    return (
        <>
            <Loader />
            <Navbar />

            <main className={styles.communityPage}>
                {/* ====== HERO ====== */}
                <motion.section
                    ref={heroRef}
                    className={styles.hero}
                    style={{ opacity: heroOpacity }}
                >
                    <motion.div className={styles.heroOverlay} style={{ scale: heroScale }} />
                    <div className={styles.heroContent}>
                        <motion.h1
                            className={styles.heroTitle}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            The EPIX Community Hub
                        </motion.h1>
                        <motion.span
                            className={styles.heroAccent}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            Where Expertise Meets Action.
                        </motion.span>
                        <motion.p
                            className={styles.heroSubtitle}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Community isn&apos;t just a place—it&apos;s a shared purpose.
                        </motion.p>
                    </div>
                </motion.section>

                {/* ====== PHILOSOPHY / INTRO ====== */}
                <section className={styles.philosophySection}>
                    <div className={styles.container}>
                        <AnimatedSection>
                            <div className={styles.philosophyContent}>
                                <motion.span variants={fadeInUp} className={styles.formulaText}>
                                    Me + You = Impact
                                </motion.span>
                                <motion.p variants={fadeInUp} className={styles.philosophyText}>
                                    At The EPIX Initiative, we operate on a simple philosophy: We believe that research is only valuable when it is shared, and training is only proven when it is applied. This Hub is the intersection of Our Guidance and Your Effort.
                                </motion.p>
                                <motion.p variants={fadeInUp} className={styles.philosophyText}>
                                    Here, we do not just store files; we showcase results. We collate the groundbreaking insights from our Research team, the practical solutions built by our Academy Fellows, and the open-source tools necessary for the future of Public Health in Nigeria and beyond.
                                </motion.p>
                                <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', color: 'var(--color-green)', fontWeight: 600, marginTop: 'var(--spacing-md)' }}>
                                    Explore the ecosystem below ↓
                                </motion.p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ====== THE WHY BLOCK ====== */}
                <section className={styles.whySection}>
                    <div className={styles.container}>
                        <AnimatedSection>
                            <motion.div
                                variants={scaleIn}
                                className={styles.quoteCard}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className={styles.quoteIcon}>&ldquo;</span>
                                <p className={styles.quoteText}>
                                    The gap between theory and practice is where real change happens. The EPIX Community Hub is designed to bridge that gap—providing the evidence, the examples, and the tools you need to move from learning to doing.
                                </p>
                                <span className={styles.quoteAuthor}>— The EPIX Initiative Team</span>
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ====== RESOURCES: PUBLICATIONS & PORTFOLIO ====== */}
                <section className={styles.resourcesSection}>
                    <div className={styles.container}>
                        <AnimatedSection>
                            <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                <span className={styles.sectionLabel}>Resources</span>
                                <h2 className={styles.sectionTitle}>Explore Our Ecosystem</h2>
                            </motion.div>

                            <div className={styles.resourcesGrid}>
                                {resources.map((resource, index) => (
                                    <motion.div
                                        key={resource.id}
                                        variants={scaleIn}
                                        whileHover={{ y: -8, boxShadow: '15px 15px 30px rgba(0, 0, 0, 0.1), -15px -15px 30px rgba(255, 255, 255, 0.95)' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className={styles.resourceCard}>
                                            <span className={styles.resourceNumber}>{resource.id}</span>
                                            <h3 className={styles.resourceTitle}>{resource.title}</h3>
                                            <span className={styles.resourceSubtitle}>{resource.subtitle}</span>
                                            <p className={styles.resourceText}>{resource.text}</p>
                                            <span className={styles.resourceLabel}>{resource.label}</span>
                                            <ul className={styles.resourceList}>
                                                {resource.items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Toolkit Card in the grid */}
                                <motion.div
                                    variants={scaleIn}
                                    whileHover={{ y: -8, boxShadow: '15px 15px 30px rgba(0, 0, 0, 0.1), -15px -15px 30px rgba(255, 255, 255, 0.95)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={styles.resourceCard}>
                                        <span className={styles.resourceNumber}>3</span>
                                        <h3 className={styles.resourceTitle}>The Public Health Toolkit</h3>
                                        <span className={styles.resourceSubtitle}>Stop Starting From Scratch.</span>
                                        <p className={styles.resourceText}>
                                            We equip you to do the work. Download the exact templates, checklists, and guides we use to get results.
                                        </p>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 'var(--spacing-md)', display: 'block' }}>
                                            Note: These are starter tools. For full certification and in-depth training, visit the Academy.
                                        </span>
                                        <span className={styles.resourceLabel}>Available Downloads</span>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-sm)' }}>
                                            {toolkitDownloads.map((download, i) => (
                                                <Link key={i} href="#" className={styles.downloadCard}>
                                                    <span className={styles.downloadIcon}>{download.icon}</span>
                                                    <span className={styles.downloadName}>{download.name}</span>
                                                    <span className={styles.downloadArrow}>↓</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ====== JOIN OUR COMMUNITY ====== */}
                <section className={styles.joinSection}>
                    <div className={styles.container}>
                        <AnimatedSection>
                            <div className={styles.joinContent}>
                                <motion.h2 variants={fadeInUp} className={styles.joinTitle}>
                                    Join Our Community
                                </motion.h2>
                                <motion.span variants={fadeInUp} className={styles.joinSubtitle}>
                                    Be Part of the Ecosystem.
                                </motion.span>
                                <motion.p variants={fadeInUp} className={styles.joinText}>
                                    Public Health moves fast. Don&apos;t let the next opportunity or insight pass you by. Join our digital network to get the latest Research findings, new Toolkit additions, and Academy updates delivered directly to you.
                                </motion.p>
                                <motion.form
                                    variants={fadeInUp}
                                    className={styles.joinForm}
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className={styles.joinInput}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <motion.button
                                        type="submit"
                                        className={styles.joinButton}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Join the Circle
                                    </motion.button>
                                </motion.form>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
