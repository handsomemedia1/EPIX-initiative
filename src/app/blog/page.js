'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './blog.module.css';

const categories = ['All', 'Research', 'Public Health', 'Digital Health', 'Community', 'Events'];

const blogPosts = [
    {
        id: 1,
        title: 'How AI Is Transforming Public Health Surveillance in Sub-Saharan Africa',
        excerpt: 'Exploring the intersection of artificial intelligence and disease monitoring across the continent, from predictive analytics to real-time dashboards.',
        category: 'Digital Health',
        date: 'Feb 10, 2026',
        readTime: '8 min read',
        featured: true,
        image: '/images/hero-focus.png',
    },
    {
        id: 2,
        title: 'EPIX Academy Cohort 3: What We Learned',
        excerpt: 'A deep dive into the outcomes of our third training cohort — 45 researchers, 12 countries, and a record number of published papers.',
        category: 'Community',
        date: 'Feb 5, 2026',
        readTime: '6 min read',
        featured: false,
        image: '/images/hero-work.png',
    },
    {
        id: 3,
        title: 'Understanding NCD Burden Among Adolescents: New Findings',
        excerpt: 'Our latest study reveals critical patterns in non-communicable diseases among young Africans, with implications for policy and prevention.',
        category: 'Research',
        date: 'Jan 28, 2026',
        readTime: '10 min read',
        featured: false,
        image: '/images/hero-1.png',
    },
    {
        id: 4,
        title: 'Building Research Capacity: Lessons From the Field',
        excerpt: 'Field notes from our training programs across West Africa — what works, what doesn\'t, and how we\'re adapting our approach.',
        category: 'Public Health',
        date: 'Jan 20, 2026',
        readTime: '7 min read',
        featured: false,
        image: '/images/hero-2.png',
    },
    {
        id: 5,
        title: 'EPIX at the Global Health Summit 2026',
        excerpt: 'Highlights from our presentations and panel discussions at this year\'s Global Health Summit in Nairobi.',
        category: 'Events',
        date: 'Jan 15, 2026',
        readTime: '5 min read',
        featured: false,
        image: '/images/hero-3.png',
    },
    {
        id: 6,
        title: 'Open-Source Tools for African Health Researchers',
        excerpt: 'A curated list of free, open-source tools that EPIX fellows are using for data collection, analysis, and visualization.',
        category: 'Digital Health',
        date: 'Jan 8, 2026',
        readTime: '9 min read',
        featured: false,
        image: '/images/hero-community.png',
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

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts =
        activeCategory === 'All'
            ? blogPosts
            : blogPosts.filter((p) => p.category === activeCategory);

    const featuredPost = blogPosts.find((p) => p.featured);
    const gridPosts = filteredPosts.filter((p) => !p.featured);

    return (
        <div className={styles.blogPage}>
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
                    <span className={styles.heroBadge}>EPIX Blog</span>
                    <h1 className={styles.heroTitle}>Insights &amp; Stories</h1>
                    <p className={styles.heroSubtitle}>
                        Research updates, field stories, and perspectives from Africa&apos;s emerging health leaders.
                    </p>
                </motion.div>
            </section>

            {/* Featured Post */}
            {featuredPost && activeCategory === 'All' && (
                <section className={styles.featuredSection}>
                    <div className={styles.container}>
                        <motion.div
                            className={styles.featuredCard}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <div
                                className={styles.featuredImage}
                                style={{ backgroundImage: `url(${featuredPost.image})` }}
                            >
                                <span className={styles.featuredBadge}>Featured</span>
                            </div>
                            <div className={styles.featuredBody}>
                                <div className={styles.postMeta}>
                                    <span className={styles.postCategory}>{featuredPost.category}</span>
                                    <span className={styles.postDate}>{featuredPost.date}</span>
                                    <span className={styles.postRead}>{featuredPost.readTime}</span>
                                </div>
                                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                                <Link href={`/blog/${featuredPost.id}`} className={styles.readMore}>
                                    Read Article →
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Category Filter */}
            <section className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filterTabs}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.filterTab} ${activeCategory === cat ? styles.filterActive : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className={styles.gridSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {gridPosts.map((post, i) => (
                            <motion.article
                                key={post.id}
                                className={styles.card}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                variants={fadeUp}
                            >
                                <div
                                    className={styles.cardImage}
                                    style={{ backgroundImage: `url(${post.image})` }}
                                />
                                <div className={styles.cardBody}>
                                    <div className={styles.postMeta}>
                                        <span className={styles.postCategory}>{post.category}</span>
                                        <span className={styles.postDate}>{post.date}</span>
                                    </div>
                                    <h3 className={styles.cardTitle}>{post.title}</h3>
                                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.postRead}>{post.readTime}</span>
                                        <Link href={`/blog/${post.id}`} className={styles.readMore}>
                                            Read →
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {gridPosts.length === 0 && (
                        <div className={styles.emptyState}>
                            <p>No posts in this category yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
