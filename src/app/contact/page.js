'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './contact.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        department: 'General',
        message: '',
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Frontend-only for now — backend integration in Phase 3
        setStatus('sent');
        setTimeout(() => setStatus(null), 4000);
        setFormData({ name: '', email: '', subject: '', department: 'General', message: '' });
    };

    return (
        <div className={styles.contactPage}>
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
                    <span className={styles.heroBadge}>Get In Touch</span>
                    <h1 className={styles.heroTitle}>Contact Us</h1>
                    <p className={styles.heroSubtitle}>
                        Have a question, partnership idea, or want to join our mission?
                        We&apos;d love to hear from you.
                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className={styles.mainSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Form */}
                        <motion.div
                            className={styles.formCard}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h2 className={styles.formTitle}>Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputRow}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="name" className={styles.label}>Full Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={styles.input}
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="email" className={styles.label}>Email Address</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={styles.input}
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div className={styles.inputRow}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="subject" className={styles.label}>Subject</label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className={styles.input}
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="department" className={styles.label}>Department</label>
                                        <select
                                            id="department"
                                            name="department"
                                            value={formData.department}
                                            onChange={handleChange}
                                            className={styles.input}
                                        >
                                            <option value="General">General Inquiry</option>
                                            <option value="Research">Research & Partnerships</option>
                                            <option value="Academy">Academy & Training</option>
                                            <option value="Media">Media & Press</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="message" className={styles.label}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className={`${styles.input} ${styles.textarea}`}
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    Send Message
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                    </svg>
                                </button>

                                {status === 'sent' && (
                                    <motion.p
                                        className={styles.successMsg}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        ✓ Message sent successfully! We&apos;ll get back to you within 48 hours.
                                    </motion.p>
                                )}
                            </form>
                        </motion.div>

                        {/* Contact Info Sidebar */}
                        <motion.div
                            className={styles.infoSidebar}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={1}
                        >
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={styles.infoLabel}>Phone</h3>
                                    <a href="tel:+2349025065652" className={styles.infoValue}>+234 902 506 5652</a>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={styles.infoLabel}>Email</h3>
                                    <a href="mailto:info@epixinitiative.org" className={styles.infoValue}>info@epixinitiative.org</a>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={styles.infoLabel}>Location</h3>
                                    <p className={styles.infoValue}>Nigeria</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className={styles.socialBlock}>
                                <h3 className={styles.socialTitle}>Follow Us</h3>
                                <div className={styles.socials}>
                                    <a href="#" className={styles.socialLink} aria-label="Twitter/X">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    </a>
                                    <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    </a>
                                    <a href="#" className={styles.socialLink} aria-label="Instagram">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Embedded Map */}
            <section className={styles.mapSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.mapWrapper}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <iframe
                            title="EPIX Initiative Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7236903846895!2d3.3950898!3d6.4540798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
