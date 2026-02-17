import HeaderTopBar from './sections/HeaderTopBar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import TataAigSection from './sections/TataAigSection';
import CoverageSection from './sections/CoverageSection';
import PlanOptionsSection from './sections/PlanOptionsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import AdvisorSection from './sections/AdvisorSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function SecureHealthKeralaLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderTopBar />
      <main>
        <HeroSection />
        <AboutSection />
        <TataAigSection />
        <CoverageSection />
        <PlanOptionsSection />
        <WhyChooseUsSection />
        <AdvisorSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
