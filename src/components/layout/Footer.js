import Link from 'next/link';
import styles from './Footer.module.css';

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function XIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733-16z"/>
      <path d="M4 20l6.768-6.768M15.232 10.232L20 4"/>
    </svg>
  );
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.logo}>
            <span className="gradient-accent-text">EPIX</span> Initiative
          </Link>
          <span className={styles.subLabel}>Research and Development</span>
          <p className={styles.tagline}>
            Training Africa's next generation of health researchers and building digital health tools that work.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon size={20} /></a>
            <a href="#" aria-label="Twitter/X"><XIcon size={20} /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon size={20} /></a>
          </div>
        </div>

        <div className={styles.linksColumn}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/programs">The Academy</Link>
            <Link href="/lab">Research Lab</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/get-involved">Get Involved</Link>
          </nav>
        </div>

        <div className={styles.linksColumn}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <address className={styles.address}>
            <a href="mailto:hello@epix.org">hello@epix.org</a>
            <span>Nigeria, West Africa</span>
            <Link href="/get-involved" className={styles.contactLink}>
              Send Us a Message
            </Link>
          </address>
        </div>

      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} The EPIX Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
