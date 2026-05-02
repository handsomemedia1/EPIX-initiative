"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Activity, Database, Users, Calendar, ArrowUpRight } from 'lucide-react';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import styles from './page.module.css';

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
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={`container ${styles.heroGrid}`}>
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
            <motion.div variants={fadeUp} className={styles.heroActions}>
              <Link href="/programs" className="btn-primary">
                Join The Academy <ArrowRight size={18} style={{ marginLeft: '6px' }} />
              </Link>
              <Link href="/get-involved" className="btn-secondary">
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Overlapping Feature Boxes */}
        <div className="container">
          <div className={styles.heroFeaturesWrapper}>
            {[
              { num: '01.', title: 'EPIX RESEARCH LAB', desc: 'Designing and conducting community-based health studies.', link: '/lab', icon: <Database size={24} /> },
              { num: '02.', title: 'THE ACADEMY', desc: 'Training young health professionals with practical skills.', link: '/programs', icon: <Users size={24} /> },
              { num: '03.', title: 'DIGITAL HEALTH FOCUS', desc: 'Intersection of Digital Health, Adolescent Health & NCDs.', link: '/about', icon: <Activity size={24} /> }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className={styles.featureBox}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.2), duration: 0.6 }}
              >
                <div className={styles.featureNum}>{feature.num}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <Link href={feature.link} className={styles.featureLink}>
                  LEARN MORE <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Torn Paper Edge - Top */}
      <div className={styles.tornEdgeBottomWhite}></div>

      {/* ── CURRENT PROJECTS ── */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <motion.div
            className={styles.sectionHeaderProjects}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>CURRENT PROJECTS</h2>
            <Link href="/lab" className={styles.viewAllLink}>View all <ArrowUpRight size={16} /></Link>
          </motion.div>

          <motion.div
            className={styles.projectsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={styles.projectCard}>
              <div className={styles.projectImage} style={{ backgroundImage: "url('/images/project1.png')" }}></div>
              <div className={styles.projectContent}>
                <h3>Digital Health Literacy</h3>
                <p>Empowering young adults in rural communities with the tools to navigate digital health platforms effectively. We train peer educators to bridge the digital divide.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className={styles.projectCard}>
              <div className={styles.projectImage} style={{ backgroundImage: "url('/images/project2.png')" }}></div>
              <div className={styles.projectContent}>
                <h3>NCD Surveillance App</h3>
                <p>Developing a lightweight data collection tool for community health workers to track hypertension and diabetes prevalence in underserved areas.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className={`section ${styles.eventsSection}`}>
        <div className="container">
          <div className={styles.eventsGrid}>
            <motion.div 
              className={styles.eventsListContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className={styles.eventsHeader}>
                <h3>UPCOMING EVENTS</h3>
                <Link href="/programs" className={styles.viewAllLinkEvents}>View all <ArrowUpRight size={16} /></Link>
              </div>
              
              <div className={styles.eventsList}>
                {[
                  { date: '2025-06-15', title: 'Data Analysis Bootcamp: Cohort 4' },
                  { date: '2025-07-02', title: 'Adolescent Health Tech Symposium' },
                  { date: '2025-08-10', title: 'Community Research Methodology Workshop' }
                ].map((event, idx) => (
                  <motion.div key={idx} variants={fadeUp} className={styles.eventItem}>
                    <div className={styles.eventDateBox}>
                      <Calendar size={20} className={styles.eventIcon} />
                      <span className={styles.eventDateText}>{event.date}</span>
                    </div>
                    <h4>{event.title}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className={styles.newsletterContainer}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>NEWSLETTER SIGN-UP</h3>
              <p>Stay updated with our latest research findings and academy openings.</p>
              <div className={styles.newsletterForm}>
                <input type="email" placeholder="Email Address" className={styles.newsletterInput} />
                <button className="btn-primary" style={{ borderRadius: '4px', padding: '0.875rem 1.25rem' }}>Subscribe</button>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/get-involved" className={styles.donateBtnLarge}>
                  Support Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className={styles.greenBottomWrapper}>
        {/* Torn Paper Edge - Top Green (White tearing into Green) */}
        <div className={styles.tornEdgeTopGreen}></div>

        {/* ── WHAT WE DO (Formula) ── */}
        <section className={styles.formulaSectionCompact}>
          <div className="container">
            <motion.div
              className={styles.whatWeDoBox}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cinematicScale}
            >
              <h2 className={styles.formulaTitle} style={{ background: 'linear-gradient(90deg, #FFFFFF, #E0F2FE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
                Education + Data + Research = Impact
              </h2>
              <p className={styles.formulaBody} style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Africa carries over 24% of the global disease burden but produces less than 2% of the world's health research. The gap is not in talent. It is in infrastructure. EPIX Initiative trains researchers, runs community-based studies, and develops digital health tools designed specifically for the Nigerian context. We do not import solutions. We build them here.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={styles.statsSectionCompact}>
          <div className="container">
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="eyebrow" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Our Vision</span>
              <h2 style={{ color: '#FFFFFF' }}>Building Momentum</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.95)' }}>One researcher, one study, one community at a time.</p>
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
                  <span className={styles.statNumber} style={{ color: '#FFFFFF' }}>
                    <AnimatedCounter value={stat.number} />
                  </span>
                  <span className={styles.statLabel} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* Torn Paper Edge - Bottom Dark (Green tearing into Dark) */}
      <div className={styles.tornEdgeBottomDark}></div>

    </div>
  );
}
