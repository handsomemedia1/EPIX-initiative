"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Handshake, Heart, MapPin, Mail, ArrowRight } from 'lucide-react';
import styles from './get-involved.module.css';

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

export default function GetInvolved() {
  return (
    <div className={styles.wrapper}>
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
            <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Join the Movement</motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>Get Involved</motion.h1>
            <motion.p variants={fadeUp} className={styles.heroBody}>
              Be part of the generation building Africa's research capacity and digital health infrastructure. There is a place for you here.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── THREE PATHWAYS (White Section) ── */}
      <section className={styles.pathwaysSection}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeaderWhite}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="eyebrow">How to Engage</span>
            <h2>Three Ways to Be Part of EPIX</h2>
          </motion.div>

          <motion.div 
            className={styles.pathwaysGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: GraduationCap, title: 'Join The Academy', body: 'Are you a student or young health professional ready to build real research skills? Apply to our next Academy cohort. You will leave with practical competencies, a portfolio of completed work, and access to a growing network of mentors and researchers.', btnText: 'Apply Now', link: '/programs' },
              { icon: Handshake, title: 'Partner With Us', body: 'Are you a university, research institution, NGO, or funder who believes in African-led research? We are looking for institutional partners for joint studies, co-designed training programs, and community-based research initiatives.', btnText: 'Become a Partner', link: '#contact' },
              { icon: Heart, title: 'Support Our Work', body: 'Your support funds community studies, digital tool development, and the training of researchers who will spend their careers building Nigeria\'s health evidence base.', btnText: 'Support EPIX', link: '#contact' }
            ].map((path, i) => {
              const Icon = path.icon;
              return (
                <motion.div key={i} variants={fadeUp} className={styles.pathCard}>
                  <div className={styles.iconWrapper}>
                    <Icon size={32} className={styles.pathIcon} />
                  </div>
                  <h3>{path.title}</h3>
                  <p>{path.body}</p>
                  <Link href={path.link} className={`btn-secondary ${styles.pathBtn}`}>{path.btnText}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT & CTA (Deep Green Section) ── */}
      <div className={styles.deepGreenWrapper}>
        <div className={styles.tornEdgeTopGreen}></div>
        
        {/* CONTACT */}
        <section id="contact" className={styles.contactSection}>
          <div className="container">
            <motion.div 
              className={styles.contactWrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className={styles.contactInfo}>
                <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Reach Out</span>
                <h2 style={{ color: 'white' }}>Get In Touch</h2>
                <p className={styles.contactIntro}>Whether you have a question, want to explore a collaboration, or want to learn more about what we are building, we would love to hear from you.</p>
                
                <ul className={styles.contactList}>
                  <li>
                    <div className={styles.cIconWrapper}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className={styles.cLabel}>General Enquiries</span>
                      <a href="mailto:hello@epix.org" className={styles.cValue}>hello@epix.org</a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.cIconWrapper}>
                      <Handshake size={20} />
                    </div>
                    <div>
                      <span className={styles.cLabel}>Research and Partnerships</span>
                      <a href="mailto:partners@epix.org" className={styles.cValue}>partners@epix.org</a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.cIconWrapper}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className={styles.cLabel}>Location</span>
                      <span className={styles.cValue}>Nigeria, West Africa</span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.contactFormWrapper}>
                <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Jane Doe" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="jane@example.com" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">I Am Reaching Out To</label>
                    <select id="subject" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="academy">Join The Academy</option>
                      <option value="partnership">Discuss a Partnership</option>
                      <option value="support">Support Our Work</option>
                      <option value="research">Research Collaboration</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                  </div>
                  <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Send Message</button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <motion.div 
              className={styles.ctaBox}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 style={{ color: 'white' }}>The Africa We Are Building</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>A continent where health solutions are researched, designed, and implemented by Africans using African data to solve African problems. Come build it with us.</p>
              <div className={styles.ctaActions}>
                <Link href="/programs" className="btn-primary">Join The Academy</Link>
                <Link href="/lab" className="btn-secondary" style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>Explore Our Research</Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div className={styles.tornEdgeBottomDark}></div>
      </div>
    </div>
  );
}
