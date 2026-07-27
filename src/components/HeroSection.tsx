import { motion } from 'framer-motion';
import { heroImages, restaurant } from '../data/restaurantData';
import { SmartImage } from './SmartImage';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-6 md:pt-10">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20">
        <div className="flex items-end">
          <div className="max-w-3xl">
            <motion.p {...fadeUp} transition={{ duration: 0.6 }} className="section-eyebrow mb-5">
              Unna · Deutsche Küche · Premium Bistro
            </motion.p>
            <motion.h1 {...fadeUp} transition={{ duration: 0.7, delay: 0.05 }} className="font-display text-5xl leading-[0.95] text-pine-950 md:text-7xl lg:text-[5.5rem]">
              {restaurant.name}
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.12 }} className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              {restaurant.welcomeLine}. {restaurant.tagline} Wir verbinden ehrliche Gastronomie mit ruhiger Premium-Ästhetik und allen Inhalten der ursprünglichen Seite.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 flex flex-wrap gap-4">
              <a href="#reservation" className="rounded-full bg-pine-800 px-6 py-3 text-sm font-semibold text-cream shadow-soft transition hover:bg-pine-700">
                Reservierung
              </a>
              <a href="#menu" className="rounded-full border border-pine-900/10 bg-white px-6 py-3 text-sm font-semibold text-pine-900 transition hover:border-gold hover:text-pine-800">
                Speisekarte
              </a>
              <a href="#contact" className="rounded-full border border-pine-900/10 bg-white px-6 py-3 text-sm font-semibold text-pine-900 transition hover:border-gold hover:text-pine-800">
                Kontakt
              </a>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.26 }} className="mt-10 grid gap-3 text-sm text-pine-900 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/70 p-4 shadow-soft">Terrasse im Kurpark</div>
              <div className="rounded-2xl bg-white/70 p-4 shadow-soft">Haustiere willkommen</div>
              <div className="rounded-2xl bg-white/70 p-4 shadow-soft">Mittag, Abend, Events</div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute -left-6 top-6 h-36 w-36 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-4 right-0 h-44 w-44 rounded-full bg-pine-800/20 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3 shadow-soft">
            <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[460px] overflow-hidden rounded-[1.5rem]">
                <SmartImage src={heroImages[0]} alt="Café-bistro Grün-weiß" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-pine-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                  <div className="text-xs uppercase tracking-[0.32em] text-sand/80">Premium Gastronomie</div>
                  <p className="mt-3 max-w-md text-2xl font-display leading-tight">Ruhig, elegant und warm wie ein moderner Treffpunkt im Grünen.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <SmartImage src={heroImages[1]} alt="Restaurant Atmosphäre" className="h-48 w-full rounded-[1.5rem] object-cover" />
                <div className="rounded-[1.5rem] bg-pine-900 p-5 text-cream">
                  <div className="text-xs uppercase tracking-[0.32em] text-sand/80">Stimmung</div>
                  <p className="mt-3 text-base leading-7 text-sand/90">{restaurant.intro}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-[1.3rem] bg-white p-4 text-sm text-pine-900">
                    <div className="text-xs uppercase tracking-[0.3em] text-gold">Kontakt</div>
                    <p className="mt-2 font-medium">{restaurant.phone}</p>
                  </div>
                  <div className="rounded-[1.3rem] bg-pine-100 p-4 text-sm text-pine-900">
                    <div className="text-xs uppercase tracking-[0.3em] text-pine-600">Ort</div>
                    <p className="mt-2 font-medium">Unna · Kurpark</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}