'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const heroSlides = [
    {
        id: 1,
        title: 'Education',
        image: '/images/hero-1.png',
        accent: '#00C853',
    },
    {
        id: 2,
        title: 'Research',
        image: '/images/hero-2.png',
        accent: '#00BFA5',
    },
    {
        id: 3,
        title: 'Community',
        image: '/images/hero-3.png',
        accent: '#FFB300',
    },
];

const textVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
        },
    },
};

const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 100,
        },
    },
};

const AnimatedText = ({ text, className }) => (
    <motion.span
        className={className}
        variants={textVariants}
        initial="hidden"
        animate="visible"
    >
        {text.split('').map((char, i) => (
            <motion.span
                key={i}
                variants={letterVariants}
                style={{ display: 'inline-block' }}
            >
                {char === ' ' ? '\u00A0' : char}
            </motion.span>
        ))}
    </motion.span>
);

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate particles only on client-side to avoid hydration mismatch
        const newParticles = [...Array(20)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            width: 4 + Math.random() * 8,
            height: 4 + Math.random() * 8,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            xMove: Math.random() * 20 - 10,
        }));
        setParticles(newParticles);
    }, []);

    const { scrollY } = useScroll();
    const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 400], [1, 1.1]);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 12000); // 12 seconds for very smooth viewing
        return () => clearInterval(interval);
    }, [nextSlide]);

    // Mouse parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20;
            const y = (clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Animated Background */}
            <motion.div
                className={styles.backgroundContainer}
                style={{ y: parallaxY, scale }}
            >
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentSlide}
                        className={styles.slideBg}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.4, 0, 0.2, 1],
                            opacity: { duration: 0.8 }
                        }}
                    >
                        <Image
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].title}
                            fill
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                        <div className={styles.overlay} />
                    </motion.div>
                </AnimatePresence>

                {/* Floating Particles */}
                <div className={styles.particles}>
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className={styles.particle}
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                width: `${particle.width}px`,
                                height: `${particle.height}px`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, particle.xMove, 0],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Content */}
            <motion.div className={styles.content} style={{ opacity }}>
                <div className={styles.container}>
                    {/* 3D Title with Mouse Parallax */}
                    <motion.div
                        className={styles.titleWrapper}
                        style={{
                            transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                        }}
                    >
                        <motion.h1
                            className={styles.headline}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Building Africa&apos;s Next Generation of Health Leaders Through{' '}
                            <motion.span
                                className={styles.highlight}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                Education
                            </motion.span>
                            ,{' '}
                            <motion.span
                                className={styles.highlight}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                Data
                            </motion.span>
                            , and{' '}
                            <motion.span
                                className={styles.highlight}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                Research
                            </motion.span>
                            .
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        We don&apos;t just teach public health—we train young Africans to collect data,
                        lead research, and design solutions that work for their communities.
                    </motion.p>

                    {/* 3D Buttons */}
                    <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                rotateX: 5,
                                boxShadow: '0 20px 40px rgba(255, 179, 0, 0.5)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                            <Link href="/academy" className={styles.btnPrimary}>
                                Join the Academy
                                <motion.svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </motion.svg>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                borderColor: 'rgba(255,255,255,1)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                            <Link href="/partner" className={styles.btnSecondary}>
                                Partner With Us
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Slide Indicators with Animation */}
            <div className={styles.indicators}>
                {heroSlides.map((slide, index) => (
                    <motion.button
                        key={index}
                        className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {index === currentSlide && (
                            <motion.div
                                className={styles.indicatorProgress}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 12, ease: 'linear' }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <span className={styles.scrollText}>Scroll to explore</span>
                <motion.div
                    className={styles.scrollLine}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <motion.div
                        className={styles.scrollDot}
                        animate={{
                            y: [0, 25, 0],
                            opacity: [1, 0.5, 1],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
