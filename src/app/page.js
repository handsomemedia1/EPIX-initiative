"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Activity, Database, Users } from 'lucide-react';
import dynamic from 'next/dynamic';
import SpotlightCard from '../components/ui/SpotlightCard';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import styles from './page.module.css';

// Dynamically import the 3D component to avoid SSR issues with WebGL
const Hero3DElement = dynamic(() => import('../components/ui/Hero3DElement'), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cinematicScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "circOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [hoveredFocus, setHoveredFocus] = useState(null);
  return (
    <div className={styles.homeWrapper}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroRight}>
          <Hero3DElement />
        </div>
        
        <div className={`container ${styles.heroGrid}`}>

          <div className={styles.heroLeft}>
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="eyebrow">
                Research and Development · Nigeria · Est. 2025
              </motion.span>
              <motion.h1 variants={fadeUp} className={styles.heroTitle}>
                Building Africa's Next Generation of{' '}
                <span className="gradient-accent-text">Health Researchers</span>{' '}
                Through Digital Innovation.
              </motion.h1>
              <motion.p variants={fadeUp} className={styles.heroSubtitle}>
                We are a Nigerian research and development organization. We train young health professionals and build digital health tools that work for the communities they serve.
              </motion.p>
              <motion.div variants={fadeUp} className={styles.heroActions}>
                <Link href="/programs" className="btn-primary">
                  Join The Academy <ArrowRight size={18} style={{ marginLeft: '6px' }} />
                </Link>
                <Link href="/get-involved" className="btn-secondary">
                  Partner With Us
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className={`glass-card ${styles.heroInfoCard}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <h3 className={styles.cardTitle}>What We Do</h3>
              <div className={styles.cardGrid}>
                {[
                  { label: 'Research Arm', value: 'EPIX Research Lab' },
                  { label: 'Training Arm', value: 'The Academy' },
                  { label: 'Main Focus', value: 'Digital Health' },
                  { label: 'Sub Focus 1', value: 'Adolescent Health' },
                  { label: 'Sub Focus 2', value: 'Non-Communicable Diseases' },
                  { label: 'Location', value: 'Nigeria, West Africa' },
                ].map((row) => (
                  <div key={row.label} className={styles.cardRow}>
                    <span className={styles.rowLabel}>{row.label}</span>
                    <span className={styles.rowValue}>{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.whatWeDoBox}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cinematicScale}
          >
            <h2 className={styles.formulaTitle} style={{ background: 'linear-gradient(90deg, #10B981, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
              Education + Data + Research = Impact
            </h2>
            <p className={styles.formulaBody}>
              Africa carries over 24% of the global disease burden but produces less than 2% of the world's health research. The gap is not in talent. It is in infrastructure. EPIX Initiative trains researchers, runs community-based studies, and develops digital health tools designed specifically for the Nigerian context. We do not import solutions. We build them here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TWO ENGINES ── */}
      <section className={`section ${styles.enginesSection}`}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">How We Work</span>
            <h2>Two Engines. One Mission.</h2>
            <p>Everything EPIX does runs through two core structures working together.</p>
          </motion.div>

          <motion.div
            className={styles.enginesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SpotlightCard className={styles.engineCard}>
                <Database size={32} className={styles.cardIcon} />
                <h3>EPIX Research Lab</h3>
                <p>We design and conduct community-based health studies, produce peer-reviewed publications, and develop digital health tools built directly from our research findings. Every project runs a complete cycle from identifying the problem to deploying the solution.</p>
                <Link href="/lab" className={styles.textLink}>Explore Our Lab <ArrowRight size={16} /></Link>
              </SpotlightCard>
            </motion.div>

            <motion.div variants={fadeUp}>
              <SpotlightCard className={styles.engineCard}>
                <Users size={32} className={styles.cardIcon} />
                <h3>The Academy</h3>
                <p>We train students and young health professionals with practical research skills. From data collection to scientific writing, every module is designed around one question: can you actually do this when the training ends? Fully online. Accessible across Nigeria.</p>
                <Link href="/programs" className={styles.textLink}>Explore The Academy <ArrowRight size={16} /></Link>
              </SpotlightCard>
            </motion.div>

            <motion.div variants={fadeUp}>
              <SpotlightCard className={styles.engineCard}>
                <Activity size={32} className={styles.cardIcon} />
                <h3>Our Focus Areas</h3>
                <p>We work at the intersection of Digital Health, Adolescent Health, and Non-Communicable Diseases. These are the areas where Nigeria's evidence gap is widest and where digital innovation has the most to offer.</p>
                <Link href="/about" className={styles.textLink}>See Our Focus <ArrowRight size={16} /></Link>
              </SpotlightCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── RESEARCH FOCUS ── */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">Research Focus</span>
            <h2>Where We Concentrate Our Work</h2>
            <p>We focus on problems that are underfunded, understudied, and where digital health tools have a clear and immediate role to play.</p>
          </motion.div>

          <motion.div
            className={styles.focusList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { name: 'Digital Health', desc: 'The primary lens through which we approach every research question and every solution we build.', tag: 'Primary Focus' },
              { name: 'Adolescent Health', desc: "Young people are 60% of Nigeria's population but largely invisible in health research and health systems. We are changing that.", tag: 'Active Projects' },
              { name: 'Non-Communicable Diseases', desc: "Hypertension, diabetes, and other NCDs are rising quietly across Nigeria. We are building the surveillance and management tools communities need.", tag: 'Coming Soon' },
            ].map((focus, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp} 
                className={styles.focusItem}
                onMouseEnter={() => setHoveredFocus(index)}
                onMouseLeave={() => setHoveredFocus(null)}
                animate={{
                  opacity: hoveredFocus === null || hoveredFocus === index ? 1 : 0.4,
                  scale: hoveredFocus === index ? 1.02 : 1,
                  borderColor: hoveredFocus === index ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.06)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.focusHeader}>
                  <h3>{focus.name}</h3>
                  <span className={styles.focusTag}>{focus.tag}</span>
                </div>
                <p>{focus.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">Our Vision</span>
            <h2>Building Momentum</h2>
            <p>One researcher, one study, one community at a time.</p>
          </motion.div>

          <motion.div
            className={styles.statsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: '50+', label: 'Researchers Trained' },
              { number: '5', label: 'Research Projects' },
              { number: '12', label: 'Communities Reached' },
              { number: '8', label: 'Publications and Outputs' },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeUp} className={styles.statItem}>
                <span className={styles.statNumber}>
                  <AnimatedCounter value={stat.number} />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <motion.div
            className={`glass-card ${styles.ctaBox}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">Get Involved</span>
            <h2>There Is a Place for You at EPIX</h2>
            <p>Whether you are a student, a researcher, an institution, or a funder, there is a clear way for you to be part of this work.</p>
            <div className={styles.ctaActions}>
              <Link href="/programs" className="btn-primary">Join The Academy</Link>
              <Link href="/get-involved" className="btn-secondary">Partner With Us</Link>
              <Link href="/get-involved" className="btn-secondary">Support Our Work</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
