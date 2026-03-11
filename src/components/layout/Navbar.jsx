'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    {
        label: 'What We Do',
        children: [
            { href: '/focus', label: 'Our Focus', desc: 'Research areas & priorities' },
            { href: '/work', label: 'Our Work', desc: 'Academy, fellowships & more' },
            { href: '/lab', label: 'The Lab', desc: 'R&D projects & experiments' },
        ],
    },
    {
        label: 'Community',
        children: [
            { href: '/community', label: 'Community Hub', desc: 'Resources & publications' },
            { href: '/blog', label: 'Blog', desc: 'Insights & stories' },
        ],
    },
    { href: '/contact', label: 'Contact' },
];

const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.1,
        }
    },
};

const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        }
    },
};

const mobileMenuVariants = {
    hidden: {
        x: '100%',
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.05,
            delayChildren: 0.1,
        }
    },
};

const mobileItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 }
    },
};

const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        y: -6,
        scale: 0.97,
        transition: { duration: 0.15 },
    },
};

function DropdownMenu({ items, isOpen }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.dropdown}
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={styles.dropdownItem}
                        >
                            <span className={styles.dropdownLabel}>{item.label}</span>
                            <span className={styles.dropdownDesc}>{item.desc}</span>
                        </Link>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileAccordion, setMobileAccordion] = useState(null);
    const dropdownTimeoutRef = useRef(null);

    const { scrollY } = useScroll();
    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ['rgba(250, 252, 255, 0)', 'rgba(250, 252, 255, 0.95)']
    );
    const headerShadow = useTransform(
        scrollY,
        [0, 100],
        ['0 0 0 rgba(0,0,0,0)', '0 4px 30px rgba(0,0,0,0.1)']
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setMobileAccordion(null);
        document.body.style.overflow = 'auto';
    };

    const handleDropdownEnter = (index) => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        setOpenDropdown(index);
    };

    const handleDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 150);
    };

    const toggleMobileAccordion = (index) => {
        setMobileAccordion(mobileAccordion === index ? null : index);
    };

    return (
        <motion.header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
            style={{
                backgroundColor: headerBg,
                boxShadow: headerShadow,
            }}
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <nav className={styles.nav}>
                <div className={styles.container}>
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
                            <motion.div
                                initial={{ rotate: -180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Image
                                    src="/images/logo.jpg"
                                    alt="The EPIX Initiative"
                                    width={50}
                                    height={50}
                                    className={styles.logoImage}
                                />
                            </motion.div>
                            <motion.span
                                className={styles.logoText}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                The <strong>EPIX</strong> Initiative
                            </motion.span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <ul className={styles.navLinks}>
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.label}
                                variants={linkVariants}
                                className={link.children ? styles.hasDropdown : ''}
                                onMouseEnter={() => link.children && handleDropdownEnter(index)}
                                onMouseLeave={() => link.children && handleDropdownLeave()}
                            >
                                {link.children ? (
                                    <>
                                        <span className={styles.navLink}>
                                            {link.label}
                                            <svg
                                                className={`${styles.chevron} ${openDropdown === index ? styles.chevronOpen : ''}`}
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                        <DropdownMenu
                                            items={link.children}
                                            isOpen={openDropdown === index}
                                        />
                                    </>
                                ) : (
                                    <Link href={link.href} className={styles.navLink}>
                                        {link.label}
                                    </Link>
                                )}
                            </motion.li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                        variants={linkVariants}
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                            boxShadow: '0 10px 30px rgba(0, 200, 83, 0.3)',
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/get-involved" className={styles.ctaButton}>
                            Get Involved
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                        />
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            className={styles.mobileMenu}
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <ul className={styles.mobileNavLinks}>
                                {navLinks.map((link, index) => (
                                    <motion.li key={link.label} variants={mobileItemVariants}>
                                        {link.children ? (
                                            <>
                                                <button
                                                    className={styles.mobileAccordionBtn}
                                                    onClick={() => toggleMobileAccordion(index)}
                                                >
                                                    {link.label}
                                                    <svg
                                                        className={`${styles.chevron} ${mobileAccordion === index ? styles.chevronOpen : ''}`}
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                    >
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </button>
                                                <AnimatePresence>
                                                    {mobileAccordion === index && (
                                                        <motion.div
                                                            className={styles.mobileSubMenu}
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.25 }}
                                                        >
                                                            {link.children.map((child) => (
                                                                <Link
                                                                    key={child.href}
                                                                    href={child.href}
                                                                    className={styles.mobileSubLink}
                                                                    onClick={closeMobileMenu}
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className={styles.mobileNavLink}
                                                onClick={closeMobileMenu}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </motion.li>
                                ))}
                                <motion.li variants={mobileItemVariants}>
                                    <Link
                                        href="/get-involved"
                                        className={styles.mobileCta}
                                        onClick={closeMobileMenu}
                                    >
                                        Get Involved
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className={styles.overlayBg}
                            onClick={closeMobileMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
