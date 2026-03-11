import Loader from '@/components/ui/Loader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import ARCFramework from '@/components/sections/ARCFramework';
import FocusAreas from '@/components/sections/FocusAreas';
import ImpactStats from '@/components/sections/ImpactStats';
import Partners from '@/components/sections/Partners';
import LatestUpdates from '@/components/sections/LatestUpdates';
import GetInvolved from '@/components/sections/GetInvolved';

export default function Home() {
  return (
    <>
      {/* Sophisticated Loader */}
      <Loader />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Education + Data + Research = Impact */}
        <Mission />

        {/* The ARC Framework */}
        <ARCFramework />

        {/* Where We Focus */}
        <FocusAreas />

        {/* Impact Statistics */}
        <ImpactStats />

        {/* Our Partners */}
        <Partners />

        {/* Latest Updates / Blog */}
        <LatestUpdates />

        {/* Get Involved CTA */}
        <GetInvolved />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
