import { motion } from 'framer-motion';
import { restaurant } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <SectionHeading eyebrow="Über uns" title="Ein Bistro mit Kurpark-Charakter und ehrlicher Gastlichkeit." description={restaurant.intro} />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="glass-panel rounded-[2rem] p-8 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-pine-900 p-5 text-cream">
              <div className="text-xs uppercase tracking-[0.35em] text-cream/85">Atmosphäre</div>
              <p className="mt-3 text-lg leading-8">Ruhig, professionell, vertrauenswürdig und mit viel Raum für Begegnung.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 text-pine-900">
              <div className="section-eyebrow">Willkommen</div>
              <p className="mt-3 text-lg leading-8">Hunde sind willkommen, die Terrasse ist sonnig und alle Bereiche sind leicht erreichbar.</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-pine-900/10 bg-white/70 p-5 text-sm leading-7 text-slate-700">
            Das Restaurant verbindet bodenständige Küche, freundliche Atmosphäre und einen ruhigen Kurpark-Charakter zu einem klaren Gesamtbild.
          </div>
        </motion.div>
      </div>
    </section>
  );
}