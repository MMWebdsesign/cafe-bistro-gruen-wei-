import { motion } from 'framer-motion';
import { restaurant } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';

export function ContactSection() {
  const hasAddress = restaurant.address.length > 0;

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Kontakt" title="Alle Kontaktinformationen, Öffnungszeiten und Standort auf einen Blick." description="Adresse, Telefon, E-Mail, Karte und ein ruhiges Kontaktlayout mit Ortsmarken." />

      <div className={`mt-10 grid gap-6 ${hasAddress ? 'lg:grid-cols-[0.9fr_1.1fr]' : ''}`}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid gap-6">
          <div className="glass-panel rounded-[2rem] p-6 shadow-soft">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Adresse</div>
            <p className="mt-3 text-lg font-medium text-pine-900">{restaurant.address.join(', ')}</p>
          </div>
          <div className="glass-panel rounded-[2rem] p-6 shadow-soft">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Kontakt</div>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p>Telefon: {restaurant.phone}</p>
              <p>E-Mail: {restaurant.email}</p>
            </div>
          </div>
          <div id="times" className="glass-panel rounded-[2rem] p-6 shadow-soft">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Öffnungszeiten</div>
            <div className="mt-4 grid gap-3">
              {restaurant.hours.map((hour) => (
                <div key={hour.day} className="flex items-start justify-between gap-4 border-b border-pine-900/10 pb-2 last:border-b-0 last:pb-0">
                  <div className="font-medium text-pine-900">{hour.day}</div>
                  <div className="text-right text-sm text-slate-700">
                    <div>{hour.time}</div>
                    {hour.kitchen ? <div className="text-xs uppercase tracking-[0.22em] text-gold">Küche {hour.kitchen}</div> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {hasAddress ? (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="overflow-hidden rounded-[2rem] bg-pine-900 text-cream shadow-soft">
            <div id="map" className="relative min-h-[420px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,169,106,0.22),transparent_45%),linear-gradient(145deg,rgba(16,39,29,1)_0%,rgba(33,69,50,0.94)_55%,rgba(45,91,67,0.9)_100%)]" />
              <div className="relative flex h-full flex-col justify-between gap-6 p-8">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.32em] text-sand/80">So finden Sie uns</div>
                  <div className="mt-4 space-y-1 text-lg font-medium leading-8 text-cream">
                    {restaurant.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-sand/80">Anfahrt</div>
                    <p className="mt-2 text-sm text-sand/95">Direkt am Kurpark und Tennisclub, gut erreichbar mit Auto und Fahrrad.</p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-sand/80">Parken</div>
                    <p className="mt-2 text-sm text-sand/95">Parkmoeglichkeiten in unmittelbarer Naehe des Bistros.</p>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="inline-flex w-fit cursor-default rounded-full bg-cream px-5 py-3 text-sm font-semibold text-pine-900"
                >
                  Route in Google Maps öffnen
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}