import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';

export const metadata = {
  title: 'The EPIX Initiative | Research and Development',
  description: 'Building Africa\'s Next Generation of Health Researchers Through Digital Innovation. We train young health professionals and build digital health tools.',
  keywords: 'Health Research, Digital Health, African Researchers, Non-Communicable Diseases, Adolescent Health, Nigeria, EPIX Initiative',
  openGraph: {
    title: 'The EPIX Initiative',
    description: 'Building Africa\'s Next Generation of Health Researchers Through Digital Innovation.',
    type: 'website',
    locale: 'en_NG',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
