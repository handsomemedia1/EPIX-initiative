"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Target, Eye } from 'lucide-react';
import styles from './about.module.css';

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
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="eyebrow">About Us</motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Building the Research Capacity Africa Needs. <span className="gradient-accent-text">Right Here in Nigeria.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroSubtitle}>
              The EPIX Initiative is a Nigerian research and development organization founded in 2025. We train the next generation of African health researchers and build digital health tools designed for the communities that need them most.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container">
          <motion.div 
            className={styles.quoteBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Quote size={48} className={styles.quoteIcon} />
            <blockquote>
              "Nigeria does not have a talent problem. It has an infrastructure problem. We are building the infrastructure."
            </blockquote>
          </motion.div>

          <motion.div 
            className={styles.storyContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={styles.storyText}>
              <span className="eyebrow">Our Story</span>
              <h2>Why We Started</h2>
              <div className={styles.paragraphs}>
                <p>Nigeria has over 200 million people. Less than 40% have reliable access to basic healthcare. Health decisions are made every day without data, without digital tools, and without locally generated evidence. The digital health tools that exist were mostly designed in other countries for other contexts. Most of them do not work here the way they were intended to.</p>
                <p>At the same time, Africa produces less than 2% of global health research despite carrying over 24% of the global disease burden. Brilliant young Nigerians are graduating from public health programs every year with theoretical knowledge and almost no practical skills. They cannot design a study, collect quality data, or write a manuscript. They enter a field that desperately needs researchers and find themselves unequipped to do the research.</p>
                <p>EPIX Initiative was founded in 2025 because both problems have the same solution. Train researchers who understand the Nigerian context. Give them practical skills. Point them at the digital health problems that matter most. Let them build solutions that actually fit.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className={`section ${styles.directionSection}`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">Our Direction</span>
          </motion.div>

          <motion.div 
            className={styles.directionGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={`glass-card ${styles.directionCard}`}>
              <Target size={32} className={styles.cardIcon} />
              <span className={styles.cardLabel}>Our Mission</span>
              <h3>What We Do</h3>
              <p>To train the next generation of African health researchers with the practical skills to generate evidence, lead studies, and develop solutions that work in Africa.</p>
            </motion.div>
            <motion.div variants={fadeUp} className={`glass-card ${styles.directionCard}`}>
              <Eye size={32} className={styles.cardIcon} />
              <span className={styles.cardLabel}>Our Vision</span>
              <h3>Where We Are Going</h3>
              <p>A continent where health solutions are researched, designed, and implemented by Africans using African data to solve African problems.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section">
        <div className="container">
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
                  <span className={styles.pStatNum}>24%</span>
                  <p>of the global disease burden is carried by Africa. Less than 2% of global health research comes from the continent.</p>
                </div>
                <div className={styles.pStat}>
                  <span className={styles.pStatNum}>40%</span>
                  <p>of Nigerians have reliable access to basic healthcare. The majority of health records in this country are still paper based.</p>
                </div>
                <div className={styles.pStat}>
                  <span className={styles.pStatNum}>60%</span>
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
        </div>
      </section>

      {/* OUR VALUES */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">What We Stand For</span>
            <h2>How We Work</h2>
          </motion.div>

          <motion.div 
            className={styles.valuesList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
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
          </motion.div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="section">
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">Our People</span>
            <h2>Who We Are</h2>
            <p>A team of Nigerian health researchers and educators building the infrastructure Africa needs from the inside.</p>
          </motion.div>

          <motion.div 
            className={styles.teamGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={`glass-card ${styles.teamMember}`}>
              <div className={styles.memberPhoto}></div>
              <h3>[Founder Name]</h3>
              <span className={styles.memberRole}>Founder and Executive Director</span>
              <p className={styles.memberBio}>As a public health professional, I saw firsthand the gap between academic theory and practical community impact. I founded EPIX to ensure young African researchers are equipped with the skills and digital tools needed to transform our healthcare systems from the ground up.</p>
            </motion.div>
            {/* Add more team members easily here */}
            <motion.div variants={fadeUp} className={`glass-card ${styles.teamMember}`}>
              <div className={styles.memberPhoto}></div>
              <h3>[Team Member]</h3>
              <span className={styles.memberRole}>[Role]</span>
            </motion.div>
            <motion.div variants={fadeUp} className={`glass-card ${styles.teamMember}`}>
              <div className={styles.memberPhoto}></div>
              <h3>[Team Member]</h3>
              <span className={styles.memberRole}>[Role]</span>
            </motion.div>
            <motion.div variants={fadeUp} className={`glass-card ${styles.teamMember}`}>
              <div className={styles.memberPhoto}></div>
              <h3>[Team Member]</h3>
              <span className={styles.memberRole}>[Role]</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <motion.div 
            className={`glass-card ${styles.ctaBox}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>Ready to Be Part of What We Are Building?</h2>
            <p>Whether you want to learn, collaborate, partner, or invest in African-led research, there is a place for you here.</p>
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
