'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './lab.module.css';

const statusTabs = ['All', 'Completed', 'Ongoing', 'Upcoming'];

const projects = [
    {
        id: 1,
        title: 'NCD Prevalence Mapping in Urban Adolescents',
        status: 'Completed',
        description: 'A cross-sectional study mapping the prevalence of non-communicable diseases among adolescents in 6 major African cities, covering hypertension, diabetes, and obesity.',
        team: ['Dr. A. Okafor', 'F. Mensah', 'K. Ndiaye'],
        timeline: 'Jan 2025 – Dec 2025',
        tags: ['NCDs', 'Adolescent Health', 'Epidemiology'],
        outcomes: '3 peer-reviewed publications, policy brief adopted by 2 ministries of health.',
    },
    {
        id: 2,
        title: 'AI-Powered Disease Surveillance Dashboard',
        status: 'Ongoing',
        description: 'Building an open-source, real-time surveillance dashboard that uses machine learning to predict disease outbreaks from community health worker reports.',
        team: ['EPIX Lab Team', 'Partner: Digital Health Institute'],
        timeline: 'Jul 2025 – Jun 2026',
        tags: ['AI', 'Digital Health', 'Surveillance'],
        progress: 65,
    },
    {
        id: 3,
        title: 'Mental Health Screening Tool for Community Health Workers',
        status: 'Ongoing',
        description: 'Developing and validating a mobile-first mental health screening tool designed specifically for use by community health workers in low-resource settings.',
        team: ['S. Abiodun', 'M. Wanjiku', 'EPIX Fellows Cohort 4'],
        timeline: 'Sep 2025 – Aug 2026',
        tags: ['Mental Health', 'mHealth', 'Validation Study'],
        progress: 40,
    },
    {
        id: 4,
        title: 'Systematic Review: Digital Health Interventions for NCDs in Africa',
        status: 'Completed',
        description: 'A comprehensive systematic review and meta-analysis of digital health interventions targeting NCDs across the African continent.',
        team: ['Dr. B. Tetteh', 'N. Kamau', 'EPIX Research Hub'],
        timeline: 'Mar 2025 – Nov 2025',
        tags: ['Systematic Review', 'Digital Health', 'NCDs'],
        outcomes: 'Published in The Lancet Digital Health. 89 studies analyzed.',
    },
    {
        id: 5,
        title: 'Pan-African Adolescent Health Data Repository',
        status: 'Upcoming',
        description: 'Creating a centralized, open-access repository of adolescent health datasets from across Africa to enable cross-country research and collaboration.',
        team: ['EPIX Lab Team', 'Data Partners (TBA)'],
        timeline: 'Mar 2026 – Feb 2027',
        tags: ['Data Infrastructure', 'Open Access', 'Adolescent Health'],
    },
    {
        id: 6,
        title: 'Health Literacy Assessment Framework',
        status: 'Upcoming',
        description: 'Developing a standardized health literacy assessment framework tailored to African contexts, focusing on NCD prevention messaging.',
        team: ['Research Hub Fellows', 'WHO Nigeria (Partner)'],
        timeline: 'May 2026 – Apr 2027',
        tags: ['Health Literacy', 'Framework', 'NCDs'],
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

const statusColors = {
    Completed: { bg: 'rgba(46, 125, 50, 0.12)', color: '#2e7d32', border: 'rgba(46, 125, 50, 0.3)' },
    Ongoing: { bg: 'rgba(13, 33, 55, 0.1)', color: '#0d2137', border: 'rgba(13, 33, 55, 0.3)' },
    Upcoming: { bg: 'rgba(255, 152, 0, 0.1)', color: '#e65100', border: 'rgba(255, 152, 0, 0.3)' },
};

export default function LabPage() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredProjects =
        activeTab === 'All' ? projects : projects.filter((p) => p.status === activeTab);

    const stats = {
        completed: projects.filter((p) => p.status === 'Completed').length,
        ongoing: projects.filter((p) => p.status === 'Ongoing').length,
        upcoming: projects.filter((p) => p.status === 'Upcoming').length,
    };

    return (
        <div className={styles.labPage}>
            <Navbar />

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <span className={styles.heroBadge}>EPIX Lab</span>
                    <h1 className={styles.heroTitle}>Research &amp; Development</h1>
                    <p className={styles.heroSubtitle}>
                        Where evidence meets innovation. Explore our completed breakthroughs,
                        ongoing investigations, and upcoming research initiatives.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        <motion.div className={styles.statCard} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <span className={styles.statNumber}>{stats.completed}</span>
                            <span className={styles.statLabel}>Completed Projects</span>
                        </motion.div>
                        <motion.div className={styles.statCard} variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <span className={styles.statNumber}>{stats.ongoing}</span>
                            <span className={styles.statLabel}>Ongoing Projects</span>
                        </motion.div>
                        <motion.div className={styles.statCard} variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <span className={styles.statNumber}>{stats.upcoming}</span>
                            <span className={styles.statLabel}>Upcoming Projects</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filter */}
            <section className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filterTabs}>
                        {statusTabs.map((tab) => (
                            <button
                                key={tab}
                                className={`${styles.filterTab} ${activeTab === tab ? styles.filterActive : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                                {tab !== 'All' && (
                                    <span className={styles.tabCount}>
                                        {projects.filter((p) => p.status === tab).length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className={styles.projectsSection}>
                <div className={styles.container}>
                    <div className={styles.projectsList}>
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                className={styles.projectCard}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                variants={fadeUp}
                            >
                                <div className={styles.projectHeader}>
                                    <span
                                        className={styles.statusBadge}
                                        style={{
                                            background: statusColors[project.status].bg,
                                            color: statusColors[project.status].color,
                                            borderColor: statusColors[project.status].border,
                                        }}
                                    >
                                        {project.status}
                                    </span>
                                    <span className={styles.projectTimeline}>{project.timeline}</span>
                                </div>

                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>

                                {/* Progress bar for ongoing */}
                                {project.progress !== undefined && (
                                    <div className={styles.progressBlock}>
                                        <div className={styles.progressHeader}>
                                            <span className={styles.progressLabel}>Progress</span>
                                            <span className={styles.progressValue}>{project.progress}%</span>
                                        </div>
                                        <div className={styles.progressTrack}>
                                            <motion.div
                                                className={styles.progressFill}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${project.progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Outcomes for completed */}
                                {project.outcomes && (
                                    <div className={styles.outcomesBlock}>
                                        <span className={styles.outcomesLabel}>Key Outcomes</span>
                                        <p className={styles.outcomesText}>{project.outcomes}</p>
                                    </div>
                                )}

                                <div className={styles.projectFooter}>
                                    <div className={styles.teamList}>
                                        {project.team.map((member, idx) => (
                                            <span key={idx} className={styles.teamMember}>{member}</span>
                                        ))}
                                    </div>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.ctaCard}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className={styles.ctaTitle}>Collaborate With Us</h2>
                        <p className={styles.ctaText}>
                            Interested in partnering on research or contributing to our projects?
                            We&apos;re always looking for collaborators, data partners, and funders who share our vision.
                        </p>
                        <a href="/contact" className={styles.ctaButton}>Get In Touch</a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
