import { motion } from 'framer-motion';
import { restaurant } from '../data/restaurantData';
import { SectionHeading } from './SectionHeading';

export function ServicesSection() {
  return (
    <section id="services" className="bg-pine-950/5 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Services" title="Alle Services als klare, hochwertige Auswahl." description="Barrierefreiheit, Außenbereich, Catering, Partyservice, Haustiere und weitere Details bleiben sichtbar und klar lesbar." />

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mt-10 rounded-[2rem] bg-white p-6 shadow-soft">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {restaurant.services.map((service) => (
              <div key={service} className="rounded-2xl border border-pine-900/10 bg-pine-100 px-4 py-4 text-sm font-medium text-pine-900">
                {service}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
            {restaurant.paymentMethods.map((payment) => (
              <span key={payment} className="rounded-full border border-gold/30 bg-cream px-4 py-2 font-medium text-pine-900">
                Zahlungsmöglichkeit: {payment}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}