import { motion } from 'framer-motion';
import { restaurant } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';
import { SmartImage } from './SmartImage';

export function ReservationSection() {
  return (
    <section id="reservation" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2rem] bg-pine-900 text-cream shadow-soft">
            <div className="relative min-h-[420px]">
              <SmartImage
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80"
                alt="Restaurant Reservierung"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pine-950/95 via-pine-900/85 to-pine-800/80" />
              <div className="relative flex h-full flex-col justify-between p-8">
                <SectionHeading
                  eyebrow="Reservierung"
                  title="Ein ruhiger, eleganter Reservierungsbereich für den direkten Kontakt."
                  description="Reservieren, anrufen oder eine Nachricht schicken - alles ist klar sichtbar und hochwertig inszeniert."
                  variant="inverse"
                />
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur">
                    <div className="text-xs uppercase tracking-[0.28em] text-sand/85">Telefon</div>
                    <div className="mt-2 font-medium">{restaurant.reservationPhone}</div>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur">
                    <div className="text-xs uppercase tracking-[0.28em] text-sand/85">E-Mail</div>
                    <div className="mt-2 break-all text-sm font-medium leading-6 sm:text-base">{restaurant.email}</div>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur">
                    <div className="text-xs uppercase tracking-[0.28em] text-sand/85">Hinweis</div>
                    <div className="mt-2 font-medium">Bestätigung per Anruf</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="glass-panel rounded-[2rem] p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4">
                <label className="text-sm font-medium text-pine-900">Personen</label>
                <div className="mt-2 rounded-xl border border-pine-900/10 bg-pine-100 px-4 py-3 text-sm text-slate-600">2 Personen</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <label className="text-sm font-medium text-pine-900">Datum</label>
                <div className="mt-2 rounded-xl border border-pine-900/10 bg-pine-100 px-4 py-3 text-sm text-slate-600">Di, 28.07.2026</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <label className="text-sm font-medium text-pine-900">Uhrzeit</label>
                <div className="mt-2 rounded-xl border border-pine-900/10 bg-pine-100 px-4 py-3 text-sm text-slate-600">17:30 Uhr</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <label className="text-sm font-medium text-pine-900">Kontakt</label>
                <div className="mt-2 rounded-xl border border-pine-900/10 bg-pine-100 px-4 py-3 text-sm text-slate-600">Tisch reservieren</div>
              </div>
              <div className="rounded-2xl bg-white p-4 sm:col-span-2">
                <label className="text-sm font-medium text-pine-900">Nachricht</label>
                <div className="mt-2 min-h-28 rounded-xl border border-pine-900/10 bg-pine-100 px-4 py-3 text-sm text-slate-600">Schicken Sie uns Ihre Anfrage</div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`tel:${restaurant.reservationPhone.replace(/\s/g, '')}`} className="rounded-full bg-pine-800 px-5 py-3 text-sm font-semibold text-cream transition hover:bg-pine-700">
                Jetzt anrufen
              </a>
              <a href={`mailto:${restaurant.email}`} className="rounded-full border border-pine-900/10 bg-white px-5 py-3 text-sm font-semibold text-pine-900 transition hover:border-gold">
                E-Mail senden
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}