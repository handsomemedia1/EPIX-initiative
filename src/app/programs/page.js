"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, CheckCircle } from 'lucide-react';
import styles from './programs.module.css';

const cinematicScale = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Programs() {
  return (
    <div className={styles.programsWrapper}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            className={styles.heroGrid}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className={styles.heroContent}>
              <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Our Programs</motion.span>
              <motion.h1 variants={fadeUp} className={styles.heroTitle}>The Academy</motion.h1>
              <motion.p variants={fadeUp} className={styles.subTitle} style={{ color: 'var(--accent-green)' }}>Where Research Skills Are Built</motion.p>
              <motion.p variants={fadeUp} className={styles.heroBody}>
                The EPIX Academy trains students and young health professionals with practical, hands-on research skills. Fully online. Accessible across Nigeria. No prior research experience required.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* ── SIDEBAR WIDGET (Floating Overlap) ── */}
        <div className={styles.widgetOverlapWrapper}>
          <motion.div 
            className={styles.sidebarWidget}
            initial="hidden"
            animate="visible"
            variants={cinematicScale}
          >
            <h3>At a Glance</h3>
            <ul className={styles.widgetList}>
              <li><Globe size={18} /> <strong>Format:</strong> Fully Online</li>
              <li><Users size={18} /> <strong>Target:</strong> Students & Young Professionals</li>
              <li><BookOpen size={18} /> <strong>Levels:</strong> Three Certification Levels</li>
              <li><Clock size={18} /> <strong>Next Cohort:</strong> May 2026</li>
            </ul>
            <Link href="/get-involved" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', textAlign: 'center', display: 'block' }}>
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS THE ACADEMY (White Section) ── */}
      <section className={styles.aboutSection}>
        <div className="container">
          <motion.div 
            className={styles.aboutAcademy}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">About The Academy</span>
            <h2>What Is The Academy?</h2>
            <div className={styles.twoColumnText}>
              <p>The Academy is EPIX's training engine. The most critical gap in African public health today is not knowledge. It is skill. Young health professionals graduate knowing what public health is but unable to design a study, collect quality data, write a manuscript, or build a monitoring and evaluation framework. The Academy was built to close that gap.</p>
              <p>Every module is practical and immediately applicable. We train online so our programs reach students and young professionals across Nigeria regardless of where they are. We award certificates for demonstrated competence, not attendance. You leave with real skills, a portfolio of completed work, and access to a network of researchers and mentors who continue supporting your growth after the program ends.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THREE LEVELS (Deep Green Section) ── */}
      <div className={styles.deepGreenWrapper}>
        <div className={styles.tornEdgeTopGreen}></div>
        
        <section className={styles.levelsSection}>
          <div className="container">
            <motion.div 
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Program Structure</span>
              <h2 style={{ color: 'white' }}>Three Levels. One Clear Pathway.</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>Each level builds on the last. You can join at the level that matches where you are right now.</p>
            </motion.div>

            <motion.div 
              className={styles.levelsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* LEVEL 1 */}
              <motion.div variants={fadeUp} className={styles.levelCard}>
                <div className={styles.levelHeader}>
                  <span className={styles.levelBadge}>Level 1</span>
                  <h3>Research Foundations Certificate</h3>
                </div>
                <ul className={styles.levelDetails}>
                  <li><strong>Duration:</strong> 4 Weeks</li>
                  <li><strong>Who It Is For:</strong> Complete beginners. Students, fresh graduates, NGO staff.</li>
                  <li><strong>What You Learn:</strong> Research design, data collection, data cleaning and analysis, and research ethics. You leave with a completed research proposal.</li>
                  <li><strong>Output:</strong> Research proposal and certificate</li>
                </ul>
                <div className={styles.levelFooter}>
                  <span className={styles.price}>TBD</span>
                  <Link href="/get-involved" className="btn-secondary" style={{ backgroundColor: 'white', color: 'var(--bg-primary)' }}>Apply for Level 1</Link>
                </div>
              </motion.div>

              {/* LEVEL 2 */}
              <motion.div variants={fadeUp} className={styles.levelCard}>
                <div className={styles.levelHeader}>
                  <span className={styles.levelBadge}>Level 2</span>
                  <h3>Data and Analysis Certificate</h3>
                </div>
                <ul className={styles.levelDetails}>
                  <li><strong>Duration:</strong> 4 Weeks</li>
                  <li><strong>Who It Is For:</strong> People with Level 1 or equivalent background who want to go deeper into data.</li>
                  <li><strong>What You Learn:</strong> Advanced data management, statistical analysis, data visualization, and interpretation of findings.</li>
                  <li><strong>Output:</strong> Completed data analysis project and certificate</li>
                </ul>
                <div className={styles.levelFooter}>
                  <span className={styles.price}>TBD</span>
                  <Link href="/get-involved" className="btn-secondary" style={{ backgroundColor: 'white', color: 'var(--bg-primary)' }}>Apply for Level 2</Link>
                </div>
              </motion.div>

              {/* LEVEL 3 */}
              <motion.div variants={fadeUp} className={styles.levelCard}>
                <div className={styles.levelHeader}>
                  <span className={styles.levelBadge}>Level 3</span>
                  <h3>Publication Mentorship Program</h3>
                </div>
                <ul className={styles.levelDetails}>
                  <li><strong>Duration:</strong> 3 to 6 Months</li>
                  <li><strong>Who It Is For:</strong> Researchers who are ready to publish and want expert guidance through the entire process.</li>
                  <li><strong>What You Learn:</strong> Scientific writing, manuscript development, navigating peer review, and submitting to indexed journals.</li>
                  <li><strong>Output:</strong> Manuscript submitted to a peer-reviewed journal</li>
                </ul>
                <div className={styles.levelFooter}>
                  <span className={styles.price}>TBD</span>
                  <Link href="/get-involved" className="btn-secondary" style={{ backgroundColor: 'white', color: 'var(--bg-primary)' }}>Apply for Level 3</Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className={styles.tornEdgeBottomWhite}></div>
      </div>

      {/* ── CURRICULUM (White Section) ── */}
      <section className={styles.curriculumSection}>
        <div className="container">
          <motion.div 
            className={styles.curriculumWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={styles.sectionHeaderWhite}>
              <span className="eyebrow">What You Will Learn</span>
              <h2>The Skills We Teach</h2>
            </motion.div>

            <div className={styles.modulesGrid}>
              {[
                { title: 'Research Fundamentals', desc: 'Formulating research questions, selecting study designs, understanding research ethics, and navigating the complete research cycle from idea to output.' },
                { title: 'Data Collection', desc: 'Survey and questionnaire design, data collection methods, field best practices, and quality assurance. You will know how to collect data that is actually usable.' },
                { title: 'Data Management and Analysis', desc: 'Data cleaning, organization, statistical analysis, and visualization. From raw numbers to clear, honest findings.' },
                { title: 'Scientific Writing and Publication', desc: 'Writing a research manuscript, structuring an academic paper, navigating peer review, and getting your work into the published literature.' },
                { title: 'Grant Writing and M&E', desc: 'Writing compelling proposals, building budgets, developing logic models, and creating monitoring and evaluation frameworks that satisfy donors.' }
              ].map((mod, i) => (
                <motion.div key={i} variants={fadeUp} className={styles.moduleItem}>
                  <div className={styles.moduleNumber}>0{i + 1}</div>
                  <div className={styles.moduleText}>
                    <h3>{mod.title}</h3>
                    <p>{mod.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className={styles.practicalProject}>
              <CheckCircle size={32} className={styles.checkIcon} />
              <div>
                <h3>Practical Project</h3>
                <p>Design a study, collect real data, analyze it, and present your findings. Every participant leaves with a completed portfolio project. Not just a certificate. Actual work.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA (Deep Green) ── */}
      <div className={styles.deepGreenWrapper}>
        <div className={styles.tornEdgeTopGreen}></div>
        
        <section className={styles.ctaSection}>
          <div className="container">
            <motion.div 
              className={styles.ctaBox}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 style={{ color: 'white' }}>Start Building Real Research Skills</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>Applications for our next cohort are open. Join a growing community of African researchers trained to generate evidence.</p>
              <div className={styles.ctaActions}>
                <Link href="/get-involved" className="btn-primary">Apply Now</Link>
                <Link href="/get-involved" className="btn-secondary" style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>Get In Touch</Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        <div className={styles.tornEdgeBottomDark}></div>
      </div>
    </div>
  );
}

// Small icon component for Globe
function Globe(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      <path d="M2 12h20"/>
    </svg>
  )
}
