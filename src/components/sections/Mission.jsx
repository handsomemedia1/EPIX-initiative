'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Mission.module.css';

const formulaItems = [
    { label: 'Education', icon: '🎓', description: 'Practical, skills-based training' },
    { label: 'Data', icon: '📊', description: 'Primary data collection & analysis' },
    { label: 'Research', icon: '🔬', description: 'Evidence-driven studies' },
];

export default function Mission() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className={styles.mission} id="mission" ref={ref}>
            <div className={styles.container}>
                {/* Animated Formula Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.formula}>
                        {formulaItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                className={styles.formulaItem}
                                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 + index * 0.15,
                                    type: 'spring',
                                    stiffness: 100,
                                }}
                                whileHover={{ scale: 1.1, rotateY: 10 }}
                            >
                                <span className={styles.word}>{item.label}</span>
                            </motion.div>
                        ))}

                        {/* Plus signs */}
                        <motion.span
                            className={styles.operator}
                            style={{ position: 'absolute', left: 'calc(33% - 10px)' }}
                            animate={isInView ? {
                                scale: [1, 1.3, 1],
                                rotate: [0, 180, 360],
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                            +
                        </motion.span>
                        <motion.span
                            className={styles.operator}
                            style={{ position: 'absolute', left: 'calc(66% - 10px)' }}
                            animate={isInView ? {
                                scale: [1, 1.3, 1],
                                rotate: [0, 180, 360],
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                        >
                            +
                        </motion.span>
                    </div>

                    {/* Equals Impact */}
                    <motion.div
                        className={styles.equalsSection}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <motion.span
                            className={styles.equals}
                            animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
                        >
                            =
                        </motion.span>
                        <motion.span
                            className={styles.impact}
                            whileHover={{
                                scale: 1.1,
                                textShadow: '0 0 30px rgba(0, 200, 83, 0.5)',
                            }}
                        >
                            Impact
                        </motion.span>
                    </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className={styles.description}>
                        We don&apos;t just teach theory—we build the researchers Africa is missing.
                        Our fellows master data collection, conduct real studies that generate the
                        evidence needed to drive meaningful health impact across the continent.
                    </p>
                </motion.div>

                {/* Interactive Visual Cards */}
                <motion.div
                    className={styles.visualGrid}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {formulaItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            className={styles.visualCard}
                            initial={{ opacity: 0, y: 40, rotateX: -15 }}
                            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.7 + index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                rotateY: 5,
                                boxShadow: '15px 15px 30px rgba(0,0,0,0.15), -10px -10px 25px rgba(255,255,255,0.95)',
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <motion.div
                                className={styles.iconWrapper}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                <span className={styles.emoji}>{item.icon}</span>
                            </motion.div>
                            <h4>{item.label}</h4>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}

                    {/* Impact Card (Special) */}
                    <motion.div
                        className={`${styles.visualCard} ${styles.impactCard}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1, type: 'spring' }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 20px 40px rgba(0, 200, 83, 0.3)',
                        }}
                    >
                        <motion.div
                            className={styles.iconWrapper}
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className={styles.emoji}>🌍</span>
                        </motion.div>
                        <h4>Impact</h4>
                        <p>Real change for communities</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
