'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import styles from './LatestUpdates.module.css';

// Sample blog posts
const blogPosts = [
    {
        id: 1,
        title: 'Launching Our 2024 Fellowship Program',
        excerpt: 'We are excited to announce the launch of our new cohort of health research fellows across Nigeria.',
        category: 'Announcements',
        date: 'Jan 15, 2024',
        image: '#2E7D32', // Brand green
        slug: 'launching-2024-fellowship',
    },
    {
        id: 2,
        title: 'Community Health Data Collection in Lagos',
        excerpt: 'Our research team has completed a comprehensive health survey across 10 communities in Lagos State.',
        category: 'Research',
        date: 'Jan 10, 2024',
        image: '#0D2137', // Brand navy
        slug: 'community-health-lagos',
    },
    {
        id: 3,
        title: 'Digital Health Innovation Workshop',
        excerpt: 'A recap of our recent workshop on leveraging AI and digital tools for community health solutions.',
        category: 'Events',
        date: 'Jan 5, 2024',
        image: '#1A3A5C', // Navy light variant
        slug: 'digital-health-workshop',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function LatestUpdates() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className={styles.latestUpdates} id="latest-updates" ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.headerContent}>
                        <motion.span
                            className={styles.label}
                            whileHover={{ scale: 1.05 }}
                        >
                            News & Insights
                        </motion.span>
                        <h2 className={styles.title}>Latest Updates</h2>
                    </div>
                    <motion.div
                        whileHover={{ x: 5 }}
                    >
                        <Link href="/blog" className={styles.viewAllLink}>
                            View All Posts
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

                {/* Blog Grid */}
                <motion.div
                    className={styles.blogGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {blogPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            className={styles.blogCard}
                            variants={cardVariants}
                            whileHover={{
                                y: -15,
                                scale: 1.02,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Image Placeholder with Gradient */}
                            <div className={styles.imageWrapper} style={{ background: post.image }}>
                                <div className={styles.imagePlaceholder}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <polyline points="21 15 16 10 5 21" />
                                    </svg>
                                </div>
                                <motion.span
                                    className={styles.category}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {post.category}
                                </motion.span>
                            </div>

                            {/* Content */}
                            <div className={styles.cardContent}>
                                <span className={styles.date}>{post.date}</span>
                                <h3 className={styles.cardTitle}>
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                >
                                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                        Read More
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
