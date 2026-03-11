'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Loader from '@/components/ui/Loader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './about.module.css';

// Team data - placeholders for now
const teamMembers = [
    {
        id: 1,
        name: '[Founder Name]',
        title: 'Founder & Lead Research Director',
        credentials: '[Degrees, certifications, relevant experience]',
        image: null,
    },
    {
        id: 2,
        name: '[Team Member 1]',
        title: '[Position/Role]',
        credentials: '[Brief qualifications/expertise]',
        image: null,
    },
    {
        id: 3,
        name: '[Team Member 2]',
        title: '[Position/Role]',
        credentials: '[Brief qualifications/expertise]',
        image: null,
    },
    {
        id: 4,
        name: '[Team Member 3]',
        title: '[Position/Role]',
        credentials: '[Brief qualifications/expertise]',
        image: null,
    },
];

// Values data
const values = [
    {
        id: 1,
        title: 'Excellence',
        description: 'We hold ourselves to the highest standards of scientific rigor. From data collection to publication, quality is non-negotiable.',
        icon: '🎯',
    },
    {
        id: 2,
        title: 'Impact',
        description: 'Research means nothing if it doesn\'t improve lives. We train researchers who turn evidence into action and findings into solutions.',
        icon: '💡',
    },
    {
        id: 3,
        title: 'Collaboration',
        description: 'We believe in the power of mentorship and partnership. Knowledge grows when shared, and impact scales through collective effort.',
        icon: '🤝',
    },
];

// Enhanced animation variants for butter-smooth transitions
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    },
};

// Smooth section wrapper with parallax
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

// Interactive card with 3D tilt effect
function InteractiveCard({ children, className }) {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    };

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.3s ease-out' }}
        >
            {children}
        </motion.div>
    );
}

export default function AboutPage() {
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

            <main className={styles.aboutPage}>
                {/* Hero Section with Parallax */}
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
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.h1
                                className={styles.heroTitle}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                We Don&apos;t Just Study Africa&apos;s Health Challenges.
                            </motion.h1>
                            <motion.span
                                className={styles.highlight}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                We Train the Researchers Who Solve Them.
                            </motion.span>
                            <motion.p
                                className={styles.heroSubtitle}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                            >
                                We equip young African health professionals with the practical research skills to design studies, generate evidence, and create solutions that work.
                            </motion.p>
                        </motion.div>

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
                    </div>
                </motion.section>

                {/* Mission & Vision */}
                <section className={styles.missionVision}>
                    <div className={styles.container}>
                        <AnimatedSection className={styles.mvGrid}>
                            <motion.div variants={fadeInLeft}>
                                <InteractiveCard className={styles.mvCard}>
                                    <span className={styles.mvLabel}>Our Mission</span>
                                    <p className={styles.mvText}>
                                        To train the next generation of African health researchers with the practical skills to generate evidence, lead studies, and create solutions that work in Africa.
                                    </p>
                                </InteractiveCard>
                            </motion.div>
                            <motion.div variants={fadeInRight}>
                                <InteractiveCard className={`${styles.mvCard} ${styles.mvCardVision}`}>
                                    <span className={styles.mvLabel}>Our Vision</span>
                                    <p className={styles.mvText}>
                                        A continent where health solutions are researched, designed, and implemented by Africans, using African data to solve African problems.
                                    </p>
                                </InteractiveCard>
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Why We Exist */}
                <section className={styles.whySection}>
                    <div className={styles.container}>
                        <AnimatedSection parallax>
                            <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}>Why We Exist</h2>
                            </motion.div>
                            <motion.div variants={fadeInUp} className={styles.whyContent}>
                                <motion.div
                                    className={styles.statHighlight}
                                    whileHover={{ scale: 1.05, rotate: -2 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <motion.span
                                        className={styles.statNumber}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        24%
                                    </motion.span>
                                    <span className={styles.statLabel}>of global disease burden</span>
                                </motion.div>
                                <motion.div
                                    className={styles.statDivider}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    yet
                                </motion.div>
                                <motion.div
                                    className={styles.statHighlight}
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <motion.span
                                        className={styles.statNumber}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        &lt;4%
                                    </motion.span>
                                    <span className={styles.statLabel}>of health studies worldwide</span>
                                </motion.div>
                            </motion.div>
                            <motion.div variants={fadeInUp} className={styles.whyText}>
                                <p>
                                    This isn&apos;t because Africa lacks talent. It&apos;s because the system was designed to consume research, not create it.
                                </p>
                                <motion.p
                                    className={styles.emphasis}
                                    whileHover={{ x: 10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    That&apos;s why EPIX trains researchers who generate evidence—not just study it.
                                </motion.p>
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* How We Work - Values */}
                <section className={styles.valuesSection}>
                    <div className={styles.container}>
                        <AnimatedSection>
                            <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}>How We Work</h2>
                            </motion.div>
                            <div className={styles.valuesGrid}>
                                {values.map((value, index) => (
                                    <motion.div
                                        key={value.id}
                                        variants={scaleIn}
                                        custom={index}
                                        whileHover={{
                                            y: -15,
                                            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)'
                                        }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <InteractiveCard className={styles.valueCard}>
                                            <motion.span
                                                className={styles.valueIcon}
                                                whileHover={{ scale: 1.3, rotate: 10 }}
                                                transition={{ type: 'spring', stiffness: 400 }}
                                            >
                                                {value.icon}
                                            </motion.span>
                                            <h3 className={styles.valueTitle}>{value.title}</h3>
                                            <p className={styles.valueDescription}>{value.description}</p>
                                        </InteractiveCard>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Who We Are - Story */}
                <section className={styles.storySection}>
                    <div className={styles.container}>
                        <AnimatedSection parallax>
                            <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}>Who We Are</h2>
                                <motion.span
                                    className={styles.sectionLabel}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Our Story
                                </motion.span>
                            </motion.div>
                            <div className={styles.storyGrid}>
                                <motion.div variants={fadeInLeft} className={styles.storyImageContainer}>
                                    <motion.div
                                        className={styles.storyImageWrapper}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Image
                                            src="/about-hero-image.png"
                                            alt="EPIX Initiative team training African health researchers"
                                            width={600}
                                            height={500}
                                            className={styles.storyImage}
                                        />
                                        <div className={styles.imageOverlay} />
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={fadeInRight} className={styles.storyContent}>
                                    <motion.p
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        EPIX was founded to address a critical gap in Africa&apos;s health research landscape: brilliant students graduating with public health degrees but lacking the practical skills to design studies, analyze data, lead research, develop health interventions, or publish findings.
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        Years of work in public health across the continent revealed a persistent pattern—talented young professionals struggling not from lack of knowledge, but from lack of hands-on experience in research design, data systems, program development, and implementation science.
                                    </motion.p>
                                    <motion.p
                                        className={styles.storyHighlight}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        EPIX bridges that gap by training African health researchers and innovators who don&apos;t just consume evidence—they generate it, apply it, and scale it. This is how we build the research and development capacity Africa needs.
                                    </motion.p>
                                </motion.div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Leadership & Team */}
                <section className={styles.teamSection}>
                    <div className={styles.container}>
                        <AnimatedSection>
                            <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                <motion.span
                                    className={styles.sectionLabel}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Leadership & Team
                                </motion.span>
                            </motion.div>
                            <div className={styles.teamGrid}>
                                {teamMembers.map((member, index) => (
                                    <motion.div
                                        key={member.id}
                                        variants={scaleIn}
                                        whileHover={{
                                            y: -10,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <InteractiveCard className={`${styles.teamCard} ${index === 0 ? styles.teamCardFounder : ''}`}>
                                            <motion.div
                                                className={styles.teamAvatar}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                            >
                                                <span className={styles.avatarPlaceholder}>
                                                    {member.name.charAt(1)}
                                                </span>
                                            </motion.div>
                                            <h4 className={styles.teamName}>{member.name}</h4>
                                            <p className={styles.teamTitle}>{member.title}</p>
                                            <p className={styles.teamCredentials}>{member.credentials}</p>
                                        </InteractiveCard>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Where We're Going */}
                <section className={styles.futureSection}>
                    <div className={styles.container}>
                        <AnimatedSection>
                            <motion.div variants={fadeInUp} className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}>Where We&apos;re Going</h2>
                            </motion.div>
                            <motion.div variants={fadeInUp} className={styles.futureContent}>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    EPIX is just getting started. Our vision extends far beyond training—we&apos;re building a movement.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We&apos;re creating a network of African health researchers who collaborate across borders, share knowledge freely, and hold themselves to global standards while solving local problems. We&apos;re building research infrastructure that empowers communities to generate their own evidence and design their own solutions.
                                </motion.p>
                                <motion.p
                                    className={styles.futureHighlight}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    This is the Africa we&apos;re building. Join us.
                                </motion.p>
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Final CTA */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <AnimatedSection className={styles.ctaContent}>
                            <motion.h2 variants={fadeInUp} className={styles.ctaTitle}>
                                Ready to Be Part of the Story?
                            </motion.h2>
                            <motion.p variants={fadeInUp} className={styles.ctaSubtitle}>
                                Whether you&apos;re a student, researcher, partner organization, or funder—there&apos;s a place for you at EPIX.
                            </motion.p>
                            <motion.div variants={fadeInUp} className={styles.ctaButtons}>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                >
                                    <Link href="/academy" className={styles.btnPrimary}>
                                        Join the Academy
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                >
                                    <Link href="/partner" className={styles.btnSecondary}>
                                        Partner With Us
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                >
                                    <Link href="/support" className={styles.btnOutline}>
                                        Support Our Work
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
