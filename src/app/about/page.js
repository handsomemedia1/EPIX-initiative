"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, Target, Eye } from 'lucide-react';
import AnimatedCounter from '../../components/ui/AnimatedCounter';
import styles from './about.module.css';

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

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroGrid}>
          <motion.div 
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>About Us</motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Building the Research Capacity Africa Needs.<br />
              <span className="gradient-accent-text" style={{ background: 'linear-gradient(90deg, #10B981, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Right Here in Nigeria.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroSubtitle}>
              The EPIX Initiative is a Nigerian research and development organization founded in 2025. We train the next generation of African health researchers and build digital health tools designed for the communities that need them most.
            </motion.p>
          </motion.div>
        </div>

        {/* ── QUOTE OVERLAP ── */}
        <div className={styles.quoteOverlapWrapper}>
          <motion.div 
            className={styles.quoteBox}
            initial="hidden"
            animate="visible"
            variants={cinematicScale}
          >
            <Quote size={40} className={styles.quoteIcon} />
            <blockquote>
              "Nigeria does not have a talent problem. It has an infrastructure problem. We are building the infrastructure."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── STORY SECTION (White) ── */}
      <section className={styles.storySection}>
        <div className="container">
          <motion.div 
            className={styles.storyContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={styles.storyImageWrapper}>
              <div className={styles.storyGraphic}>
                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                  <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>EPIX History</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Established 2025. Focused on locally generated evidence for the Nigerian context.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.storyText}>
              <span className="eyebrow">Our Story</span>
              <h2>Why We Started</h2>
              <div className={styles.paragraphs}>
                <p>Nigeria has over <span className={styles.highlight}>200 million people</span>, yet less than 40% have reliable access to basic healthcare. Health decisions are made every day without data, without digital tools, and without locally generated evidence. The tools that exist were mostly designed in other countries for other contexts, and <span className={styles.highlight}>they often fail to work here</span> as intended.</p>
                <p>At the same time, Africa produces <span className={styles.highlight}>less than 2%</span> of global health research despite carrying over 24% of the global disease burden. Brilliant young Nigerians graduate with theoretical knowledge but lack the practical skills to design studies, collect quality data, or lead research that matters.</p>
                <p>EPIX Initiative was founded in 2025 because both problems have the same solution: <span className={styles.highlight}>Train researchers who understand the Nigerian context</span>. Give them practical skills. Point them at the digital health problems that matter most. Let them build solutions that actually fit.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION (Deep Green) ── */}
      <div className={styles.deepGreenWrapper}>
        <div className={styles.tornEdgeTopGreen}></div>
        
        <section className={styles.directionSection}>
          <div className="container">
            <motion.div 
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Our Direction</span>
            </motion.div>

            <motion.div 
              className={styles.directionGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className={styles.directionCard}>
                <Target size={32} className={styles.cardIcon} />
                <span className={styles.cardLabel}>Our Mission</span>
                <h3>What We Do</h3>
                <p>To train the next generation of African health researchers with the practical skills to generate evidence, lead studies, and develop solutions that work in Africa.</p>
              </motion.div>
              <motion.div variants={fadeUp} className={styles.directionCard}>
                <Eye size={32} className={styles.cardIcon} />
                <span className={styles.cardLabel}>Our Vision</span>
                <h3>Where We Are Going</h3>
                <p>A continent where health solutions are researched, designed, and implemented by Africans using African data to solve African problems.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className={styles.tornEdgeBottomWhite}></div>
      </div>

      {/* ── THE PROBLEM & VALUES (White) ── */}
      <section className={styles.problemValuesSection}>
        <div className="container">
          {/* The Problem */}
          <motion.div 
            className={styles.problemWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={styles.problemHeader}>
              <span className="eyebrow">The Problem</span>
              <h2>Two Problems. One Solution.</h2>
            </motion.div>

            <div className={styles.problemContent}>
              <motion.div variants={fadeUp} className={styles.problemStats}>
                <div className={styles.pStat}>
                  <span className={styles.pStatNum}><AnimatedCounter value={24} />%</span>
                  <p>of the global disease burden is carried by Africa. Less than 2% of global health research comes from the continent.</p>
                </div>
                <div className={styles.pStat}>
                  <span className={styles.pStatNum}><AnimatedCounter value={40} />%</span>
                  <p>of Nigerians have reliable access to basic healthcare. The majority of health records in this country are still paper based.</p>
                </div>
                <div className={styles.pStat}>
                  <span className={styles.pStatNum}><AnimatedCounter value={60} />%</span>
                  <p>of Nigeria's population is under 25. Adolescents remain largely invisible in health research, policy, and digital health systems.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.problemText}>
                <p>Nigeria sits at the intersection of two serious and connected problems. The first is a digital health infrastructure gap. Health workers are operating without tools. Communities are making health decisions without data. Young Nigerians are navigating a health system that was not designed with them in mind. Non-communicable diseases are rising silently, largely undetected until they become emergencies.</p>
                <p>The second problem sits underneath the first. The African health research ecosystem was built to consume evidence produced elsewhere rather than generate its own. The policies that affect millions of Nigerians are frequently built on evidence collected by researchers who left after the study ended.</p>
                <p>These two problems are connected and EPIX addresses both. <strong>We train the researchers and we do the research.</strong></p>
              </motion.div>
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.div 
            className={styles.valuesWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={styles.sectionHeader}>
              <span className="eyebrow">What We Stand For</span>
              <h2>How We Work</h2>
            </motion.div>

            <div className={styles.valuesList}>
              {[
                { num: '01', title: 'Excellence', body: 'Scientific rigor is not negotiable. From how we design a study to how we teach a module, we hold ourselves to standards that reflect what we believe African health research should look like globally.' },
                { num: '02', title: 'Impact', body: 'We measure ourselves by what changes, not what we publish. Every project we run starts with a clear answer to one question: who will this actually help and how?' },
                { num: '03', title: 'Collaboration', body: 'No single organization closes a gap this large alone. We build with partners, mentors, universities, and institutions who share the conviction that African health evidence should be generated by Africans.' }
              ].map((val, index) => (
                <motion.div key={index} variants={fadeUp} className={styles.valueItem}>
                  <span className={styles.valueNum}>{val.num}</span>
                  <div className={styles.valueText}>
                    <h3>{val.title}</h3>
                    <p>{val.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TEAM & CTA (Deep Green) ── */}
      <div className={styles.deepGreenWrapper}>
        <div className={styles.tornEdgeTopGreen}></div>
        
        <section className={styles.teamSection}>
          <div className="container">
            <motion.div 
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Our People</span>
              <h2 style={{ color: 'white' }}>Who We Are</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>A team of Nigerian health researchers and educators building the infrastructure Africa needs from the inside.</p>
            </motion.div>

            <motion.div 
              className={styles.teamGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className={styles.teamMember}>
                <div className={styles.memberPhoto} style={{ backgroundImage: "url('/images/team_member_1.png')" }}></div>
                <h3 style={{ color: 'white' }}>Dr. A. O.</h3>
                <span className={styles.memberRole}>Founder and Executive Director</span>
                <p className={styles.memberBio}>As a public health professional, I saw firsthand the gap between academic theory and practical community impact. I founded EPIX to ensure young African researchers are equipped with the skills and digital tools needed to transform our healthcare systems from the ground up.</p>
              </motion.div>
              <motion.div variants={fadeUp} className={styles.teamMember}>
                <div className={styles.memberPhotoPlaceholder}></div>
                <h3 style={{ color: 'white' }}>[Team Member]</h3>
                <span className={styles.memberRole}>Lead Researcher</span>
                <p className={styles.memberBio}>Driving our community-based research initiatives with a focus on non-communicable diseases.</p>
              </motion.div>
              <motion.div variants={fadeUp} className={styles.teamMember}>
                <div className={styles.memberPhotoPlaceholder}></div>
                <h3 style={{ color: 'white' }}>[Team Member]</h3>
                <span className={styles.memberRole}>Digital Health Specialist</span>
                <p className={styles.memberBio}>Designing localized digital tools that empower our communities and research teams.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <motion.div 
              className={styles.ctaBox}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 style={{ color: 'white' }}>Ready to Be Part of What We Are Building?</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>Whether you want to learn, collaborate, partner, or invest in African-led research, there is a place for you here.</p>
              <div className={styles.ctaActions}>
                <Link href="/programs" className="btn-primary">Join The Academy</Link>
                <Link href="/get-involved" className="btn-secondary" style={{ backgroundColor: 'white', color: 'var(--bg-primary)' }}>Partner With Us</Link>
                <Link href="/get-involved" className="btn-secondary" style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>Support Our Work</Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div className={styles.tornEdgeBottomDark}></div>
      </div>
    </div>
  );
}
