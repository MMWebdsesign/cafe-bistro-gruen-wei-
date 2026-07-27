import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { DrinksSection } from './components/DrinksSection';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-pine-900">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-pine-200/40 blur-3xl" />
        <div className="absolute right-[-120px] top-[28rem] h-96 w-96 rounded-full bg-cream/70 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/3 h-80 w-80 rounded-full border border-pine-200/40" />
        <div className="absolute inset-x-0 top-[42%] h-40 bg-[radial-gradient(70%_100%_at_50%_100%,rgba(16,39,29,0.08)_0%,rgba(16,39,29,0)_70%)]" />
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <DrinksSection />
        <EventsSection />
        <GallerySection />
        <ReservationSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;