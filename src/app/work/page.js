'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Loader from '@/components/ui/Loader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './work.module.css';

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

// Data
const schools = [
    {
        id: 1,
        title: 'Data & Research School',
        description: 'Fellows master the complete data pipeline: fundamentals of data and research, data collection methods and tools, data cleaning and management, basic statistical analysis (SPSS, Excel), research design, and data visualization. You graduate ready to lead research projects from design to publication.',
        cta: 'Purchase our Data & Research Toolkit →',
        curriculum: [
            'Research Fundamentals',
            'Data Collection & Survey Design',
            'Data Management & Analysis',
            'Statistical Analysis (SPSS, Excel)',
            'Data Visualization',
            'Hands-on Practical Application (Week 3)',
        ],
    },
    {
        id: 2,
        title: 'Grants & Management School',
        description: 'Fellows learn how to secure funding and manage projects: grant writing (concept notes, proposals, budgets), monitoring & evaluation (LogFrames, Theory of Change), project management, and compliance reporting. You graduate ready to lead health programs and write winning proposals.',
        cta: 'Purchase our Grants & Management Toolkit →',
        curriculum: [
            'Grant Writing Fundamentals',
            'The P-A-G-S Blueprint',
            'Proposal & Budget Development',
            'Monitoring & Evaluation Frameworks',
            'Logic Models & Theory of Change',
            'Hands-on Practical Application (Week 3)',
        ],
    },
    {
        id: 3,
        title: 'Digital Health & Health Tech School',
        description: 'Master the tools transforming modern healthcare: health informatics, digital health systems, mobile health (mHealth) applications, health data analytics, and AI applications in public health. Bridge the gap between technology and healthcare delivery.',
        cta: null,
        comingSoon: true,
        curriculum: [
            'Health Informatics',
            'Digital Health Systems',
            'Mobile Health (mHealth)',
            'Health Data Analytics',
            'AI in Public Health',
        ],
    },
];

const trainingInfo = [
    { icon: '⏱️', label: 'Duration', value: '3 Weeks Total' },
    { icon: '💰', label: 'Certification', value: '₦5,000' },
    { icon: '💻', label: 'Format', value: 'Fully Online' },
    { icon: '🎓', label: 'Training', value: 'FREE (Subsidized)' },
];

const whoShouldJoin = [
    'Fresh graduates with degrees but no practical skills',
    'Health professionals wanting to transition into research',
    'NGO staff needing data or M&E skills',
    'Students preparing for graduate school',
    'Anyone passionate about evidence-based health solutions',
];

const mentorships = [
    {
        id: 1,
        title: 'Research Mentorship',
        subtitle: 'What It Is:',
        text: 'Get paired with experienced researchers to conduct community-based health studies and publish your findings. You lead the project—from design to data collection to publication—with expert guidance every step of the way.',
        items: [
            'Design a research study with your mentor',
            'Collect field data in communities, markets, schools, or clinics',
            'Analyze findings and write manuscripts',
            'Submit to peer-reviewed journals',
        ],
        duration: '6-12 months per project',
        outcome: 'Co-authored publication in academic journals',
        buttons: [
            { label: 'Apply as a Mentee →', primary: true },
            { label: 'Become a Research Mentor →', primary: false },
        ],
    },
    {
        id: 2,
        title: 'Career Mentorship',
        subtitle: 'What It Is:',
        text: 'Get one-on-one guidance from established leaders in public health, research, and program management. Build your career path from early researcher to published scientist to industry leader.',
        items: [
            'Monthly sessions with industry leaders',
            'Career planning and goal-setting',
            'Access to EPIX\'s professional network',
            'First access to jobs, consultancies, and research opportunities',
        ],
        duration: '6-12 months',
        outcome: null,
        buttons: [
            { label: 'Apply as a Mentee →', primary: true },
            { label: 'Become a Career Mentor →', primary: false },
        ],
    },
    {
        id: 3,
        title: 'Mentee-to-Mentor Program',
        subtitle: 'Our "Reach Back" culture',
        text: 'Once you publish research or complete mentorship, you become a mentor to new cohorts. This creates a self-sustaining network of African researchers supporting each other.',
        items: [
            'Complete research mentorship and publish your study',
            'Receive mentor training from EPIX',
            'Guide new fellows through their research projects',
            'Build your leadership and supervision skills',
        ],
        duration: null,
        outcome: null,
        buttons: [
            { label: 'Become a Mentor →', primary: true },
        ],
    },
];

const fellowshipStructure = [
    { label: 'Month 1', text: 'Advanced research training, academic writing, publication standards' },
    { label: 'Months 2-3', text: 'Mentored field research, data collection and analysis, manuscript drafting' },
    { label: 'Month 4', text: 'Publication preparation, research defense, journal submission guidance' },
];

const fellowshipPricing = [
    { label: 'Standard Fellowship', value: '₦75,000' },
    { label: 'Subsidized Scholarship', value: '₦30,000' },
    { label: 'Full Scholarship', value: 'FREE (merit-based)' },
];

const applicationSteps = [
    { step: 1, title: 'Submit Application', desc: 'Submit application + research abstract (250-300 words) + CV' },
    { step: 2, title: 'Review', desc: 'Review by EPIX Research Committee (2 weeks)' },
    { step: 3, title: 'Acceptance', desc: 'Acceptance + payment (₦75k / ₦30k / ₦0)' },
    { step: 4, title: 'Onboarding', desc: 'Onboarding + mentor matching + research refinement workshop' },
];

const publicationReasons = [
    'Contributing African evidence to inform policy',
    'Building credibility as a researcher',
    'Opening doors to graduate programs and funding',
    'Shifting Africa from research subject to research producer',
];

export default function WorkPage() {
    const [activeTab, setActiveTab] = useState('academy');
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
    const heroScale = useTransform(heroScroll, [0, 0.5], [1, 1.1]);

    return (
        <>
            <Loader />
            <Navbar />

            <main className={styles.workPage}>
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
                            Our Work
                        </motion.h1>
                        <motion.p
                            className={styles.heroSubtitle}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            From training to research to publication — explore the engines that power EPIX&apos;s impact across Africa.
                        </motion.p>
                    </div>
                </motion.section>

                {/* ====== TAB NAVIGATION ====== */}
                <section style={{ padding: 'var(--spacing-xl) 0', background: 'var(--color-white)' }}>
                    <div className={styles.container}>
                        <div className={styles.tabNav}>
                            {[
                                { id: 'academy', label: '🎓 The Academy' },
                                { id: 'research', label: '🔬 The Research Hub' },
                            ].map(tab => (
                                <motion.button
                                    key={tab.id}
                                    className={`${styles.tabButton} ${activeTab === tab.id ? styles.tabButtonActive : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {tab.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ====== THE ACADEMY ====== */}
                <AnimatePresence mode="wait">
                    {activeTab === 'academy' && (
                        <motion.div
                            key="academy"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <section className={styles.academySection}>
                                <div className={styles.container}>
                                    <AnimatedSection>
                                        <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                            <span className={styles.sectionLabel}>The Academy</span>
                                            <h2 className={styles.sectionTitle}>Where Skills Are Built</h2>
                                            <p className={styles.sectionSubtitle}>
                                                The Academy is where Africa&apos;s next generation of health researchers learns to DO research—not just read about it. We teach the practical, hands-on skills that universities skip: data collection, statistical analysis, research design, grant writing, and project management.
                                            </p>
                                        </motion.div>

                                        {/* Our Schools */}
                                        <motion.div variants={fadeInUp}>
                                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 'var(--spacing-lg)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                Our Schools
                                            </h3>
                                        </motion.div>

                                        <div className={styles.schoolsGrid}>
                                            {schools.map((school, index) => (
                                                <motion.div
                                                    key={school.id}
                                                    variants={scaleIn}
                                                    whileHover={{ y: -8, boxShadow: '15px 15px 30px rgba(0, 0, 0, 0.12), -15px -15px 30px rgba(255, 255, 255, 0.95)' }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className={`${styles.schoolCard} ${school.comingSoon ? styles.schoolCardComingSoon : ''}`}>
                                                        <span className={styles.schoolNumber}>{school.id}</span>
                                                        <h3 className={styles.schoolTitle}>
                                                            {school.title}
                                                            {school.comingSoon && <span style={{ fontSize: '0.75rem', color: 'var(--color-green)', marginLeft: '0.5rem' }}>(Coming Soon)</span>}
                                                        </h3>
                                                        <p className={styles.schoolDescription}>{school.description}</p>

                                                        {/* Curriculum */}
                                                        <div className={styles.curriculumSection}>
                                                            <span className={styles.curriculumTitle}>What You&apos;ll Master</span>
                                                            <ul className={styles.curriculumList}>
                                                                {school.curriculum.map((item, i) => (
                                                                    <li key={i}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {school.cta && (
                                                            <Link href="#" className={styles.schoolCta}>
                                                                {school.cta}
                                                            </Link>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Training Info */}
                                        <motion.div variants={fadeInUp}>
                                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 'var(--spacing-lg)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                How Training Works
                                            </h3>
                                        </motion.div>

                                        <div className={styles.trainingInfoGrid}>
                                            {trainingInfo.map((info, index) => (
                                                <motion.div
                                                    key={index}
                                                    className={styles.trainingInfoCard}
                                                    variants={scaleIn}
                                                    whileHover={{ y: -4 }}
                                                >
                                                    <span className={styles.trainingInfoIcon}>{info.icon}</span>
                                                    <span className={styles.trainingInfoLabel}>{info.label}</span>
                                                    <span className={styles.trainingInfoValue}>{info.value}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Who Should Join + What You Get */}
                                        <div className={styles.whoSection}>
                                            <motion.div variants={fadeInLeft}>
                                                <div className={styles.whoCard}>
                                                    <h3 className={styles.whoCardTitle}>Who Should Join</h3>
                                                    <ul className={styles.whoList}>
                                                        {whoShouldJoin.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                    <p className={styles.whoNote}>No prior experience needed. Just bring your commitment.</p>
                                                </div>
                                            </motion.div>

                                            <motion.div variants={fadeInRight}>
                                                <div className={styles.getCard}>
                                                    <h3 className={styles.getCardTitle}>What You Get</h3>
                                                    <p className={styles.getText}>
                                                        You don&apos;t just leave with a certificate—you leave job-ready. With practical skills employers actually need, a portfolio of real work, and access to a network of African researchers and mentors who continue supporting your growth long after the program ends.
                                                    </p>
                                                    <div className={styles.priceHighlight}>
                                                        <div className={styles.priceRow}>
                                                            <span className={styles.priceLabel}>Training</span>
                                                            <span className={`${styles.priceValue} ${styles.priceFree}`}>FREE</span>
                                                        </div>
                                                        <div className={styles.priceRow}>
                                                            <span className={styles.priceLabel}>Certification</span>
                                                            <span className={styles.priceValue}>₦5,000</span>
                                                        </div>
                                                        <p className={styles.priceNote}>As our founding cohort, you&apos;re part of building Africa&apos;s research capacity from the ground up.</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Apply CTA */}
                                        <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
                                            <motion.div
                                                whileHover={{ scale: 1.05, y: -3 }}
                                                whileTap={{ scale: 0.98 }}
                                                style={{ display: 'inline-block' }}
                                            >
                                                <Link href="#" className={styles.applyButton}>
                                                    Apply for Inaugural Cohort →
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    </AnimatedSection>
                                </div>
                            </section>
                        </motion.div>
                    )}

                    {/* ====== THE RESEARCH HUB ====== */}
                    {activeTab === 'research' && (
                        <motion.div
                            key="research"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Research Hub Intro */}
                            <section className={styles.researchSection}>
                                <div className={styles.container}>
                                    <AnimatedSection>
                                        <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                            <span className={styles.sectionLabel}>The Research Hub</span>
                                            <h2 className={styles.sectionTitle}>Where Research Happens. Where Evidence Gets Published.</h2>
                                            <p className={styles.sectionSubtitle}>
                                                The Research Hub pairs early-career researchers with expert mentors to design studies, collect field data, and publish findings in peer-reviewed journals. This is where African health professionals become published researchers.
                                            </p>
                                        </motion.div>

                                        <motion.div variants={fadeInUp} className={styles.hubIntro}>
                                            <span className={styles.hubGoal}>
                                                🎯 Our Goal: Every fellow becomes a published author contributing to Africa&apos;s health evidence base.
                                            </span>
                                        </motion.div>

                                        {/* Mentorship Programs */}
                                        <motion.div variants={fadeInUp}>
                                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 'var(--spacing-lg)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>
                                                Mentorship Programs
                                            </h3>
                                        </motion.div>

                                        <div className={styles.mentorshipGrid}>
                                            {mentorships.map((m, index) => (
                                                <motion.div
                                                    key={m.id}
                                                    variants={scaleIn}
                                                    whileHover={{ y: -8 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className={styles.mentorshipCard}>
                                                        <span className={styles.mentorshipNumber}>{m.id}</span>
                                                        <h3 className={styles.mentorshipTitle}>{m.title}</h3>
                                                        <span className={styles.mentorshipSubtitle}>{m.subtitle}</span>
                                                        <p className={styles.mentorshipText}>{m.text}</p>

                                                        <ul className={styles.mentorshipList}>
                                                            {m.items.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>

                                                        <div className={styles.mentorshipMeta}>
                                                            {m.duration && (
                                                                <span className={styles.mentorshipMetaItem}>📅 {m.duration}</span>
                                                            )}
                                                            {m.outcome && (
                                                                <span className={styles.mentorshipMetaItem}>📄 {m.outcome}</span>
                                                            )}
                                                        </div>

                                                        <div className={styles.mentorshipButtons}>
                                                            {m.buttons.map((btn, i) => (
                                                                <Link
                                                                    key={i}
                                                                    href="#"
                                                                    className={`${styles.btnSmall} ${btn.primary ? styles.btnSmallPrimary : styles.btnSmallOutline}`}
                                                                >
                                                                    {btn.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </AnimatedSection>
                                </div>
                            </section>

                            {/* ====== FELLOWSHIP ====== */}
                            <section className={styles.fellowshipSection}>
                                <div className={styles.container}>
                                    <AnimatedSection>
                                        <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                            <span className={styles.sectionLabel}>Research Fellowship</span>
                                            <h2 className={styles.sectionTitle}>4 Months | Training + Mentorship + Publication</h2>
                                        </motion.div>

                                        <div className={styles.fellowshipContent}>
                                            <motion.div variants={fadeInLeft} className={styles.fellowshipMain}>
                                                <p className={styles.fellowshipText}>
                                                    An intensive 4-month program that takes you from research idea to published manuscript. Combines advanced training, expert mentorship, and field research to produce studies ready for journal submission.
                                                </p>
                                                <div className={styles.fellowshipMust}>
                                                    Every fellow MUST produce a manuscript ready for publication by program end.
                                                </div>

                                                <h3 style={{ color: 'var(--color-white)', fontSize: '1.15rem', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>Program Structure</h3>
                                                <ul className={styles.fellowshipStructure}>
                                                    {fellowshipStructure.map((item, i) => (
                                                        <li key={i}><strong>{item.label}:</strong> {item.text}</li>
                                                    ))}
                                                </ul>
                                            </motion.div>

                                            <motion.div variants={fadeInRight} className={styles.fellowshipSidebar}>
                                                <div className={styles.fellowshipCard}>
                                                    <h4 className={styles.fellowshipCardTitle}>✅ What You Get</h4>
                                                    <ul className={styles.fellowshipCheckList}>
                                                        <li>✅ 4 months of advanced training and mentorship</li>
                                                        <li>✅ Co-authorship on published research (first author)</li>
                                                        <li>✅ Manuscript editing and journal submission support</li>
                                                        <li>✅ Professional certificate</li>
                                                        <li>✅ Alumni network access</li>
                                                    </ul>
                                                    <p className={styles.fellowshipNote}>Note: No stipend provided. Fellows cover their own field logistics.</p>
                                                </div>

                                                <div className={styles.fellowshipCard}>
                                                    <h4 className={styles.fellowshipCardTitle}>💰 Program Investment</h4>
                                                    <ul className={styles.fellowshipPricing}>
                                                        {fellowshipPricing.map((price, i) => (
                                                            <li key={i}>
                                                                <span className={styles.fellowshipPricingLabel}>{price.label}</span>
                                                                <span className={styles.fellowshipPricingValue}>{price.value}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <p className={styles.fellowshipNote}>Fee covers: Training, mentorship, research support, data tools, publication guidance, certificate, alumni network</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </AnimatedSection>
                                </div>
                            </section>

                            {/* ====== APPLICATION PROCESS ====== */}
                            <section className={styles.applicationSection}>
                                <div className={styles.container}>
                                    <AnimatedSection>
                                        <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                            <h2 className={styles.sectionTitle}>Application Process</h2>
                                        </motion.div>

                                        <div className={styles.stepsGrid}>
                                            {applicationSteps.map((step, index) => (
                                                <motion.div
                                                    key={step.step}
                                                    className={styles.stepCard}
                                                    variants={scaleIn}
                                                    whileHover={{ y: -6 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <span className={styles.stepNumber}>{step.step}</span>
                                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                                    <p className={styles.stepDesc}>{step.desc}</p>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <motion.div variants={fadeInUp} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                                            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
                                                <Link href="#" className={styles.applyButton}>
                                                    Apply for Fellowship →
                                                </Link>
                                            </motion.div>
                                            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
                                                <Link href="#" className={styles.applyButton} style={{ background: 'var(--color-navy)' }}>
                                                    Request Scholarship →
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    </AnimatedSection>
                                </div>
                            </section>

                            {/* ====== BECOME A MENTOR ====== */}
                            <section className={styles.mentorSection}>
                                <div className={styles.container}>
                                    <AnimatedSection>
                                        <div className={styles.mentorContent}>
                                            <motion.h2 variants={fadeInUp} className={styles.mentorTitle}>
                                                Become a Mentor
                                            </motion.h2>
                                            <motion.p variants={fadeInUp} className={styles.mentorText}>
                                                Are you an experienced researcher, project manager, or public health professional? Join EPIX as a mentor and help train Africa&apos;s next generation of published researchers.
                                            </motion.p>
                                            <motion.div
                                                variants={fadeInUp}
                                                whileHover={{ scale: 1.05, y: -3 }}
                                                whileTap={{ scale: 0.98 }}
                                                style={{ display: 'inline-block' }}
                                            >
                                                <Link href="#" className={styles.mentorButton}>
                                                    Apply to Become a Mentor →
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </AnimatedSection>
                                </div>
                            </section>

                            {/* ====== WHY PUBLICATION MATTERS ====== */}
                            <section className={styles.publicationSection}>
                                <div className={styles.container}>
                                    <AnimatedSection>
                                        <div className={styles.publicationContent}>
                                            <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                                <h2 className={styles.sectionTitle}>Why Publication Matters</h2>
                                            </motion.div>

                                            <div className={styles.publicationList}>
                                                {publicationReasons.map((reason, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className={styles.publicationItem}
                                                        variants={scaleIn}
                                                        whileHover={{ y: -4 }}
                                                    >
                                                        <span className={styles.publicationIcon}>✅</span>
                                                        <span className={styles.publicationText}>{reason}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <motion.p variants={fadeInUp} className={styles.contactLink}>
                                                Questions? Contact us at <a href="mailto:research@epixinitiative.org">research@epixinitiative.org</a>
                                            </motion.p>
                                        </div>
                                    </AnimatedSection>
                                </div>
                            </section>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </>
    );
}
