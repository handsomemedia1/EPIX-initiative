"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, FileText, Database, ShieldAlert, Monitor, Beaker } from 'lucide-react';
import styles from './lab.module.css';
import { getProjects } from '@/lib/projects';
import { useEffect, useState } from 'react';

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
    transition: { staggerChildren: 0.2 }
  }
};

export default function Lab() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(data => setProjects(data));
  }, []);

  return (
    <div className={styles.labWrapper}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Research and Development</motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>EPIX Research Lab</motion.h1>
            <motion.p variants={fadeUp} className={styles.subTitle} style={{ color: 'var(--accent-green)' }}>Where African Evidence Gets Made</motion.p>
            <motion.p variants={fadeUp} className={styles.heroBody}>
              We design and conduct community-based health studies, produce peer-reviewed publications, and develop digital health tools built from what our research actually finds.
            </motion.p>
          </motion.div>
        </div>

        {/* ── QUOTE OVERLAP ── */}
        <div className={styles.quoteOverlapWrapper}>
          <motion.div 
            className={styles.quoteBlock}
            initial="hidden"
            animate="visible"
            variants={cinematicScale}
          >
            <Quote size={48} className={styles.quoteIcon} />
            <blockquote>
              "We identify the gap. We research it. We build the solution. We test it in the community it was built for."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT THE LAB (White Section) ── */}
      <section className={styles.aboutSection}>
        <div className="container">
          <motion.div 
            className={styles.aboutContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={styles.aboutText}>
              <span className="eyebrow">About The Lab</span>
              <h2>What Is The EPIX Research Lab?</h2>
              <div className={styles.paragraphs}>
                <p>The EPIX Research Lab is the research and development engine of the organization. We design studies, collect primary data from Nigerian communities, analyze findings, and publish evidence in peer-reviewed journals and policy documents that reach the people making health decisions.</p>
                <p>Our focus is Digital Health and Adolescent Health because these are the areas where Nigeria's evidence gap is most significant and where digital innovation has the most concrete potential. We are present in the communities we study. Every project follows a complete research and development cycle from identifying the problem to testing the solution.</p>
              </div>
              <Link href="/get-involved" className={`btn-primary ${styles.aboutBtn}`}>Collaborate With Us</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE PRODUCE (Deep Green Section) ── */}
      <div className={styles.deepGreenWrapper}>
        <div className={styles.tornEdgeTopGreen}></div>
        
        <section className={styles.outputsSection}>
          <div className="container">
            <motion.div 
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Lab Outputs</span>
              <h2 style={{ color: 'white' }}>What We Produce</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>Every project produces at least one publishable or deployable output.</p>
            </motion.div>

            <motion.div 
              className={styles.outputsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { icon: FileText, title: 'Peer-Reviewed Publications', body: 'Original research articles, short communications, and case studies submitted to indexed journals. We publish open access wherever possible.' },
                { icon: Database, title: 'Policy Briefs', body: 'Evidence translated into clear documents for policymakers, health program managers, and government agencies.' },
                { icon: ShieldAlert, title: 'Working Papers', body: 'Technical research outputs shared with the global health community to advance the evidence base on digital health in Nigeria.' },
                { icon: Monitor, title: 'Digital Health Tools', body: 'Applications, screening tools, and intervention frameworks built specifically for the Nigerian context from the ground up.' },
                { icon: FileText, title: 'Open Access Resources', body: 'Research instruments, questionnaires, and datasets made freely available to the African research community.' },
                { icon: Beaker, title: 'Research Collaborations', body: 'Joint studies with Nigerian universities, international institutions, and public health organizations working on African health challenges.' }
              ].map((output, i) => {
                const Icon = output.icon;
                return (
                  <motion.div key={i} variants={fadeUp} className={styles.outputCard}>
                    <Icon size={32} className={styles.outputIcon} />
                    <h3>{output.title}</h3>
                    <p>{output.body}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <div className={styles.tornEdgeBottomWhite}></div>
      </div>

      {/* ── OUR PROJECTS (White Section) ── */}
      <section className={styles.projectsSection}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeaderWhite}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">Our Work</span>
            <h2>Current and Upcoming Projects</h2>
            <p>Every project studies a problem that is underfunded, understudied, and relevant to real Nigerian communities.</p>
          </motion.div>

          <div className={styles.projectsList}>
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className={styles.projectCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <div className={styles.projectHeader}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectSequence}>Project {project.id}</span>
                    <span className={`${styles.projectStatus} ${project.status === 'Ongoing' ? styles.statusOngoing : styles.statusUpcoming}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                </div>
                
                <div className={styles.projectBody}>
                  {project.body.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className={styles.projectFooter}>
                  <div className={styles.footerItem}>
                    <strong>Focus Areas:</strong>
                    <div className={styles.tagList}>
                      {project.focusAreas.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                    </div>
                  </div>
                  <div className={styles.footerItem}>
                    <strong>Expected Output:</strong>
                    <p>{project.expectedOutput}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* NCD PANEL */}
          <motion.div 
            className={styles.ncdPanel}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">Coming Soon</span>
            <h3>Non-Communicable Diseases Research Program</h3>
            <p>Our NCD research program is in development. We are designing studies that use digital health tools and community-based surveillance approaches to address the rising burden of hypertension, diabetes, and other non-communicable conditions in Nigerian communities. Updates will be posted here and on our blog.</p>
            <Link href="/blog" className="btn-secondary" style={{ marginTop: '1.5rem', backgroundColor: 'transparent', borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}>Get Notified</Link>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA (Deep Green Section) ── */}
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
              <h2 style={{ color: 'white' }}>Work With Us</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>We are looking for research partners, co-investigators, institutional collaborators, and field partners. If you believe in African-led evidence, we want to hear from you.</p>
              <div className={styles.ctaActions}>
                <Link href="/get-involved" className="btn-primary">Get In Touch</Link>
                <Link href="/get-involved" className="btn-secondary" style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>Become a Partner</Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        <div className={styles.tornEdgeBottomDark}></div>
      </div>
    </div>
  );
}
