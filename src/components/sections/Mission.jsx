'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Mission.module.css';

const formulaItems = [
    { label: 'Education', icon: '🎓', description: 'Practical, skills-based training', color: 'rgba(0, 191, 165, 0.15)', textCol: '#00BFA5' },
    { label: 'Data', icon: '📊', description: 'Primary data collection & analysis', color: 'rgba(255, 179, 0, 0.15)', textCol: '#FFB300' },
    { label: 'Research', icon: '🔬', description: 'Evidence-driven studies', color: 'rgba(57, 73, 171, 0.15)', textCol: '#3949AB' },
];

export default function Mission() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className={styles.mission} id="mission" ref={ref}>
            {/* Ambient Background Elements */}
            <div className={styles.bgGlow}></div>
            
            {/* Animated Data Nodes Background */}
            <div className={styles.nodesContainer}>
                {[...Array(15)].map((_, i) => (
                    <motion.div 
                        key={i}
                        className={styles.node}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 8 + 4}px`,
                            height: `${Math.random() * 8 + 4}px`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{
                            duration: Math.random() * 4 + 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2
                        }}
                    >
                        <div className={styles.nodeCore}></div>
                        <div className={styles.nodeRipple}></div>
                    </motion.div>
                ))}
            </div>

            <div className={styles.container}>
                
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.label}>Our Core Formula</span>
                    <h2 className={styles.title}>How We Build <span className={styles.highlight}>The Future</span></h2>
                    <p className={styles.description}>
                        We don&apos;t just teach theory—we build the researchers Africa is missing.
                        Our fellows master data collection, conduct real studies that generate the
                        evidence needed to drive meaningful health impact across the continent.
                    </p>
                </motion.div>

                {/* The Interactive Formula */}
                <div className={styles.formulaLayout}>
                    
                    {/* Left: The Inputs */}
                    <motion.div 
                        className={styles.inputsBlock}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {formulaItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                className={styles.inputCard}
                                whileHover={{ scale: 1.02, x: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className={styles.iconWrapper} style={{ background: item.color, color: item.textCol }}>
                                    <span className={styles.emoji}>{item.icon}</span>
                                </div>
                                <div className={styles.inputContent}>
                                    <div className={styles.inputHeader}>
                                        <h4 style={{ color: item.textCol }}>{item.label}</h4>
                                        {index < formulaItems.length - 1 && (
                                            <span className={styles.plusSign}>+</span>
                                        )}
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Middle: Equals Sign connecting them */}
                    <motion.div 
                        className={styles.equalsBlock}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
                    >
                        <div className={styles.equalsRing}>
                            <motion.span 
                                className={styles.equalsIcon}
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >=</motion.span>
                        </div>
                    </motion.div>

                    {/* Right: The Output (Impact) */}
                    <motion.div 
                        className={styles.impactBlock}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className={styles.impactCard}>
                            <motion.div 
                                className={styles.impactGlow} 
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            
                            <motion.div
                                className={styles.impactIconWrapper}
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <span className={styles.emojiLg}>🌍</span>
                            </motion.div>
                            
                            <h3 className={styles.impactTitle}>Global Impact</h3>
                            <p className={styles.impactDesc}>
                                Real change for communities. We turn educated fellows into 
                                data-driven policymakers changing the landscape of African health.
                            </p>
                            
                            <motion.button 
                                className={styles.exploreBtn}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                See Our Work
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
