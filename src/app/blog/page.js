"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Mail, BookOpen, GraduationCap, Globe2 } from 'lucide-react';
import styles from './blog.module.css';
import { getPosts } from '@/lib/posts';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(data => setPosts(data));
  }, []);

  return (
    <div className={styles.blogWrapper}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="eyebrow">EPIX Initiative</motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>Latest From EPIX</motion.h1>
            <motion.p variants={fadeUp} className={styles.heroBody}>
              Research updates, program news, and perspectives on digital health in Africa from the EPIX team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* DYNAMIC POSTS OR EMPTY STATE */}
      <section className="section">
        <div className="container">
          {posts.length > 0 ? (
            <motion.div 
              className={styles.postsGrid}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {posts.map((post, i) => (
                <motion.article key={i} variants={fadeUp} className={`glass-card ${styles.postCard}`}>
                  <div className={styles.postMeta}>
                    <span className={styles.postCategory}>{post.category}</span>
                    <span className={styles.postDate}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read Article <ArrowRight size={16} />
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className={`glass-card ${styles.emptyState}`}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className={styles.emptyContent}>
                <h2>First Posts Coming Soon</h2>
                <p>We are preparing our first research updates and insights from the Lab and Academy. Subscribe to be notified when we publish.</p>
                
                <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.inputGroup}>
                    <Mail className={styles.inputIcon} size={20} />
                    <input type="email" placeholder="Enter your email address" required />
                  </div>
                  <button type="submit" className="btn-primary">Subscribe</button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className={`section ${styles.expectSection}`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">Coming Soon</span>
            <h2>What We Will Write About</h2>
          </motion.div>

          <motion.div 
            className={styles.expectGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={styles.expectItem}>
              <BookOpen size={32} className={styles.expectIcon} />
              <h3>Research Insights</h3>
              <p>Updates from the EPIX Research Lab including findings, reflections from the field, and perspectives on what rigorous digital health research looks like in the Nigerian context.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className={styles.expectItem}>
              <GraduationCap size={32} className={styles.expectIcon} />
              <h3>Academy Updates</h3>
              <p>Stories from our training cohorts, what participants are learning, and the journey from student to published researcher.</p>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.expectItem}>
              <Globe2 size={32} className={styles.expectIcon} />
              <h3>African Health Perspectives</h3>
              <p>Commentary on African public health, digital health innovation, and what it will take to shift Africa from research consumer to research producer.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
